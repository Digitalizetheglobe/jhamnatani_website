import { NextResponse } from "next/server";

const MDOC_ENDPOINT =
  "https://jhamtani.maksoftbox.com//MDocBoxAPI/MdocAddEnquiryORTeleCalling/";

/** Project pages that exist on the site, keyed to the MDOC PUSH API keys. */
const PROJECT_API_KEYS: Record<string, string> = {
  "ace abundance": "74259574-87b7-4083-beac-9070d2b2ed06",
  "ace aster": "04544383-474f-4502-8fd4-94662a95b7df",
  "ace atmosphere": "a175b455-bbcb-4a78-a5af-322312435f33",
  "ace ayodhya": "b30864d0-35e0-4c9a-8d90-fbaccd098012",
  "ace villas": "b45c2c35-ef90-43a8-940f-e0f6ac0b4232",
  "jhamtani bizcore": "f9746457-0201-4c9b-8acb-5bec834ed844",
  "jhamtani elevate": "88fade9d-9e3b-4532-8639-e7136d650fd5",
  "jhamtani spacebiz": "b8da4b1f-f077-4450-a171-5ff45434c18a",
};

const MDOC_PREFERENCES = new Set([
  "2 BHK Garden",
  "6 BHK",
  "2.5 BHK",
  "3 BHK",
  "Office",
  "2 BHK",
  "3 BHK Garden",
  "Villa",
  "1.5 BHK",
  "Shop",
  "1 BHK",
  "3.5 BHK",
  "8 BHK",
  "5 BHK",
  "Studio",
  "4.5 BHK",
  "4 BHK",
]);

const UTM_FIELDS = [
  "UtmCampaignSource",
  "UtmCampaignName",
  "UtmCampaignId",
  "UtmCampaignAdId",
  "UtmCampaignAdsetId",
  "UtmCampaignMedium",
  "UtmCampaignContent",
  "UtmCampaignTerm",
  "UtmCampaignCountry",
  "UtmCampaignState",
  "UtmCampaignCity",
  "UtmCampaignPincode",
  "UtmAdGroup",
  "UtmProjectId",
  "UtmDevice",
  "UtmDeviceModel",
  "UtmExtensionId",
] as const;

function normalizeProject(name: string) {
  return name.trim().toLowerCase().replace(/\s+/g, " ");
}

function mapPreference(config: string): string {
  const value = config.trim();
  if (!value) return "";
  if (MDOC_PREFERENCES.has(value)) return value;

  const bhk = value.match(/(\d+(?:\.\d+)?)\s*bhk/i);
  if (bhk) {
    const candidate = `${bhk[1]} BHK`;
    if (MDOC_PREFERENCES.has(candidate)) return candidate;
  }

  const lower = value.toLowerCase();
  if (lower.includes("villa")) return "Villa";
  if (lower.includes("studio")) return "Studio";
  if (lower.includes("retail") || lower.includes("shop") || lower.includes("showroom")) {
    return "Shop";
  }
  if (lower.includes("office") || lower.includes("commercial")) return "Office";
  return "";
}

function splitName(fullName: string) {
  const cleaned = fullName.replace(/[^A-Za-z\s]/g, " ").replace(/\s+/g, " ").trim();
  const parts = cleaned.split(" ").filter(Boolean);
  return {
    firstName: (parts[0] || "").slice(0, 50),
    lastName: parts.length > 1 ? parts[parts.length - 1].slice(0, 50) : "",
  };
}

function enquiryDate() {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Kolkata" }).format(new Date());
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const project = String(body.project || "");
    const apiKey = PROJECT_API_KEYS[normalizeProject(project)];

    if (!apiKey) {
      return NextResponse.json(
        { success: false, error: "This project is not configured for MDOC." },
        { status: 400 }
      );
    }

    const { firstName, lastName } = splitName(String(body.name || ""));
    const mobile = String(body.phone || "").replace(/\D/g, "").slice(-10);
    const email = String(body.email || "").trim();
    const preferencesInput = String(body.preferences || "").trim();
    const preferences = mapPreference(preferencesInput);
    const message = String(body.message || "").trim();

    if (!firstName || !/^[A-Za-z]+$/.test(firstName)) {
      return NextResponse.json(
        { success: false, error: "A valid first name is required." },
        { status: 400 }
      );
    }
    if (!/^\d{10}$/.test(mobile)) {
      return NextResponse.json(
        { success: false, error: "A valid 10-digit mobile number is required." },
        { status: 400 }
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: "A valid email is required." },
        { status: 400 }
      );
    }

    const remarkParts: string[] = [];
    if (preferencesInput && preferencesInput !== preferences) {
      remarkParts.push(`Configuration: ${preferencesInput}`);
    }
    if (message) remarkParts.push(message);
    const remark = remarkParts.join(" | ").slice(0, 500);

    const fields: Record<string, string> = {
      DataFrom: "T",
      ApiKey: apiKey,
      EnquiryDate: enquiryDate(),
      FirstName: firstName,
      MobileNo: mobile,
      Email: email,
      Source: "Digitals",
      SourceDetail: "Website",
    };

    if (lastName) fields.LastName = lastName;
    if (preferences) fields.Preferences = preferences;
    if (remark) fields.Remark = remark;

    for (const field of UTM_FIELDS) {
      const value = body[field];
      if (typeof value === "string" && value.trim()) {
        fields[field] = value.trim();
      }
    }

    const response = await fetch(MDOC_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(fields).toString(),
    });

    const text = await response.text();
    let parsed: { code?: number; status?: string; message?: string; id?: string | number } | null = null;
    try {
      parsed = JSON.parse(text);
    } catch {
      parsed = null;
    }

    const code = Number(parsed?.code ?? response.status);
    const statusText = String(parsed?.status || "");
    const ok = code === 200 || statusText.toLowerCase() === "success";

    if (ok) {
      return NextResponse.json({ success: true, data: parsed ?? { message: text } });
    }

    // MDOC puts the real reason in `status`. `message` is only the generic "failed...".
    const duplicate = /already exists/i.test(statusText);
    if (duplicate) {
      const existingId = statusText.match(/\b(?:Enquiry|Lead) ID is:\s*(\d+)/i)?.[1];
      return NextResponse.json({
        success: true,
        duplicate: true,
        id: existingId,
        message: statusText,
      });
    }

    console.error("MDOC enquiry rejected:", text);
    return NextResponse.json(
      {
        success: false,
        error: statusText || parsed?.message || text || "MDOC request failed",
      },
      { status: 502 }
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : "MDOC request failed";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
