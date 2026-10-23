import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";

const ENQUIRY_INBOX = "enquiry@jhamtani.com";
const MAX_ATTACHMENT_BYTES = 22 * 1024 * 1024;

type BrochureProject = {
  file?: string;
  attachmentName: string;
  mapUrl: string;
  location: string;
};

const PROJECTS: Record<string, BrochureProject> = {
  "ACE Ayodhya": {
    file: "ace-ayodhya-brochure.pdf",
    attachmentName: "ACE Ayodhya Brochure.pdf",
    mapUrl: "https://maps.app.goo.gl/vYZwTtzdB66RBc659",
    location: "Thergaon, Pune",
  },
  "ACE Abundance": {
    file: "ace-abundance-brochure.pdf",
    attachmentName: "ACE Abundance Brochure.pdf",
    mapUrl: "https://maps.app.goo.gl/6D4qdjPCjVYpbVHn7",
    location: "Mundhwa, Pune",
  },
  "ACE Villas": {
    file: "ace-villas-brochure.pdf",
    attachmentName: "ACE Villas Brochure.pdf",
    mapUrl: "https://maps.app.goo.gl/a9YwRzpSVa7HMv2Z6",
    location: "Koregaon Park NX, Pune",
  },
  "ACE Atmosphere": {
    file: "ace-atmosphere-brochure.pdf",
    attachmentName: "ACE Atmosphere Brochure.pdf",
    mapUrl: "https://maps.app.goo.gl/QmgpoiXuRVJrSPHK7",
    location: "Upper Ravet, Pune",
  },
  "ACE Aster": {
    file: "ace-aster-brochure.pdf",
    attachmentName: "ACE Aster Brochure.pdf",
    mapUrl: "https://maps.app.goo.gl/PpJ66RukXKwegA5r6",
    location: "Ravet, Pune",
  },
  "Jhamtani Bizcore": {
    file: "jhamtani-bizcore-brochure.pdf",
    attachmentName: "Jhamtani Bizcore Brochure.pdf",
    mapUrl: "https://maps.app.goo.gl/efy7ZLxVURwiotWM6",
    location: "Koregaon Park NX, Pune",
  },
  "Jhamtani Elevate": {
    file: "jhamtani-elevate-brochure.pdf",
    attachmentName: "Jhamtani Elevate Brochure.pdf",
    mapUrl: "https://maps.app.goo.gl/NvMzvwJx6e4xpBxC7",
    location: "Mundhwa, Pune",
  },
  "Jhamtani SpaceBiz": {
    file: "jhamtani-spacebiz-brochure.pdf",
    attachmentName: "Jhamtani SpaceBiz Brochure.pdf",
    mapUrl: "https://maps.app.goo.gl/F74h2REXgdd3DVfPA",
    location: "Baner, Pune",
  },
  "Jhamtani Biz One": {
    attachmentName: "Jhamtani Biz One Brochure.pdf",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Jhamtani%20Bizone%20Kokane%20Chowk%20Pimple%20Saudagar%20Pune",
    location: "Pimple Saudagar, Pune",
  },
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: Request) {
  try {
    let body: { name?: string; email?: string; project?: string };
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ success: false, error: "Invalid request." }, { status: 400 });
    }
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const projectTitle = String(body.project || "").trim();
    const project = PROJECTS[projectTitle];

    if (name.length < 2) {
      return NextResponse.json({ success: false, error: "A valid name is required." }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ success: false, error: "A valid email is required." }, { status: 400 });
    }
    if (!project) {
      return NextResponse.json({ success: false, error: "Unknown project brochure." }, { status: 400 });
    }

    const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://jhamtani.com").replace(/\/+$/, "");
    let attachment: { filename: string; path: string; contentType: string } | undefined;
    let downloadNote = "";

    if (project.file) {
      const filePath = path.join(process.cwd(), "public", "assets", "brochure", project.file);
      if (!filePath.startsWith(path.join(process.cwd(), "public", "assets", "brochure"))) {
        return NextResponse.json({ success: false, error: "Invalid brochure path." }, { status: 400 });
      }
      const stat = fs.existsSync(filePath) ? fs.statSync(filePath) : null;
      if (!stat) {
        return NextResponse.json(
          { success: false, error: "Brochure file is not available." },
          { status: 500 }
        );
      }
      const publicLink = `${siteUrl}/assets/brochure/${project.file}`;

      if (stat.size <= MAX_ATTACHMENT_BYTES) {
        attachment = {
          filename: project.attachmentName,
          path: filePath,
          contentType: "application/pdf",
        };
      } else {
        downloadNote = `<p style="margin: 0 0 16px;">Your brochure is ready to download here: <a href="${publicLink}" style="color: #A0725B;">${escapeHtml(project.attachmentName)}</a></p>`;
      }
    }

    const safeName = escapeHtml(name);
    const html = `
      <div style="font-family: Arial, sans-serif; color: #333; max-width: 640px; margin: 0 auto; line-height: 1.6;">
        <p style="margin: 0 0 16px;">Dear ${safeName},</p>
        <p style="margin: 0 0 16px;">Thank You for downloading the project details. We are glad to have received your enquiry.</p>
        <p style="margin: 0 0 16px;">Concerned sales / pre-sales team will get in touch with you at the earliest with all the project details and required information.</p>
        <p style="margin: 0 0 16px;">Your journey to reach us starts here - <a href="${project.mapUrl}" style="color: #A0725B;">${escapeHtml(projectTitle)}, ${escapeHtml(project.location)}</a></p>
        ${downloadNote}
        <p style="margin: 0;">Kind Regards,<br/>Jhamtani</p>
      </div>
    `;

    const host = process.env.SMTP_HOST || "smtp.gmail.com";
    const port = Number(process.env.SMTP_PORT) || 465;
    const secure = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : port === 465;
    const user = process.env.SMTP_USER || ENQUIRY_INBOX;
    const pass = process.env.SMTP_PASS || "pkppczknqnzvkkvs";
    const fromEmail = process.env.FROM_EMAIL || `"Jhamtani" <${user}>`;

    const createTransporter = (mailPort: number, mailSecure: boolean) =>
      nodemailer.createTransport({
        host,
        port: mailPort,
        secure: mailSecure,
        auth: { user, pass },
        tls: { rejectUnauthorized: false },
      });

    const mail = {
      from: fromEmail,
      to: email,
      replyTo: ENQUIRY_INBOX,
      subject: "Thank you for Showing interest in Jhamtani!",
      html,
      attachments: attachment ? [attachment] : undefined,
    };

    const transporter = createTransporter(port, secure);
    try {
      await transporter.sendMail(mail);
    } catch (primaryErr: unknown) {
      const reason = primaryErr instanceof Error ? primaryErr.message : "SMTP send failed";
      console.warn("Brochure thank-you SMTP failed, trying port 587:", reason);
      await createTransporter(587, false).sendMail(mail);
    }

    return NextResponse.json({ success: true, attached: Boolean(attachment) });
  } catch (error: unknown) {
    console.error("Brochure thank-you error:", error);
    return NextResponse.json(
      { success: false, error: "We could not send the brochure email. Please try again." },
      { status: 500 }
    );
  }
}
