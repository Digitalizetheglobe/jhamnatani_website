/**
 * Centralized API Service for Jhamtani Website
 * All API calls and domain base configuration are managed in this single file.
 * To change the domain, update CMS_BASE_URL here or set NEXT_PUBLIC_CMS_URL in .env.
 */

export const CMS_BASE_URL = (
  process.env.NEXT_PUBLIC_CMS_URL ||
  process.env.NEXT_PUBLIC_LOCATION_API_URL ||
  "https://api.jhamtani.com"
).replace(/\/+$/, "");

export const CMS_LOCATION_BASE_URL = (
  process.env.NEXT_PUBLIC_LOCATION_API_URL ||
  process.env.NEXT_PUBLIC_CMS_URL ||
  "https://api.jhamtani.com"
).replace(/\/+$/, "");

// ==========================================
// Brochure API Interfaces
// ==========================================

export interface CmsBrochureItem {
  id: string;
  projectName: string;
  projectLogo: string;
  projectTitle: string; // e.g. "Residential", "Commercial", "Studio"
  location: string;
  tagline: string;
  projectPageUrl: string;
  brochureDocument: string;
  isActive: boolean;
  order?: number;
  createdAt?: string;
  updatedAt?: string;
  _id?: string;
}

export interface CmsBrochuresResponse {
  brochures: CmsBrochureItem[];
  pagination?: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
  };
}

// ==========================================
// Project Location API Interfaces
// ==========================================

export interface CmsProjectLocationItem {
  id: string;
  projectName: string;
  projectType: string; // e.g. "Residential", "Commercial", "Studio"
  projectImage: string;
  location: string;
  tagline: string;
  locationUrl: string;
  projectLink?: string;
  isActive: boolean;
  order?: number;
  createdAt?: string;
  updatedAt?: string;
  _id?: string;
}

// ==========================================
// MahaRERA API Interfaces
// ==========================================

export interface CmsMahaReraItem {
  id: string;
  projectName: string;
  projectType: string; // e.g. "Residential", "Commercial", "Studio"
  projectLocation: string;
  tagline: string;
  mahareraNo: string;
  projectImage: string;
  mahareraDocument: string;
  isActive: boolean;
  order?: number;
  createdAt?: string;
  updatedAt?: string;
  _id?: string;
}

// ==========================================
// Site Updates API Interfaces
// ==========================================

export interface CmsSiteUpdateItem {
  id: string;
  projectName: string;
  title: string;
  month: string;
  projectCategory: string; // e.g. "Residential", "Commercial", "Studio"
  location: string;
  tagline: string;
  projectLink: string;
  images: string[];
  isActive: boolean;
  order?: number;
  createdAt?: string;
  updatedAt?: string;
  _id?: string;
}

export interface CmsSiteUpdatesResponse {
  siteUpdates: CmsSiteUpdateItem[];
  pagination?: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
  };
}

// ==========================================
// Media Publications API Interfaces
// ==========================================

export interface CmsMediaArticleItem {
  id: string;
  publisher: string;
  category: string; // e.g. "Featured Article", "Press Release", "Industry Insight"
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  image: string;
  articleUrl: string;
  isActive: boolean;
  order?: number;
  createdAt?: string;
  updatedAt?: string;
  _id?: string;
}

export interface CmsMediaPublicationsResponse {
  mediaArticles: CmsMediaArticleItem[];
  pagination?: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
  };
}

// ==========================================
// Newsletter API Interfaces
// ==========================================

export interface CmsNewsletterItem {
  id: string;
  title: string;
  month: string;
  year: number;
  badge?: string;
  tagline: string;
  pdfDocument: string;
  coverImage?: string;
  date: string;
  isActive: boolean;
  order?: number;
  createdAt?: string;
  updatedAt?: string;
  _id?: string;
}

export interface CmsNewslettersResponse {
  newsletters: CmsNewsletterItem[];
  months?: string[];
  pagination?: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
  };
}

// ==========================================
// Helper Utilities
// ==========================================

/**
 * Formats relative CMS asset paths into complete accessible URLs.
 */
export function getCmsMediaUrl(path: string, baseUrl: string = CMS_BASE_URL): string {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  return `${baseUrl}${path.startsWith("/") ? "" : "/"}${path}`;
}

// ==========================================
// Helper for Safe Offline-Tolerant Fetching
// ==========================================

async function safeFetch(url: string, options: RequestInit = {}, timeoutMs = 6000): Promise<Response | null> {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    clearTimeout(timer);
    return response;
  } catch {
    return null;
  }
}

// ==========================================
// API Methods
// ==========================================

/**
 * Fetch brochures list from CMS
 */
export async function getCmsBrochures(limit = 100): Promise<CmsBrochureItem[]> {
  try {
    const response = await safeFetch(`${CMS_BASE_URL}/api/brochures?limit=${limit}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!response || !response.ok) {
      return [];
    }

    const data: CmsBrochuresResponse = await response.json();
    return data.brochures || [];
  } catch {
    return [];
  }
}

/**
 * Fetch project locations list from CMS
 */
export async function getCmsProjectLocations(): Promise<CmsProjectLocationItem[]> {
  try {
    const response = await safeFetch(`${CMS_LOCATION_BASE_URL}/api/project-locations`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!response || !response.ok) {
      return [];
    }

    const data = await response.json();
    if (Array.isArray(data)) {
      return data;
    } else if (data && Array.isArray(data.locations)) {
      return data.locations;
    } else if (data && Array.isArray(data.projectLocations)) {
      return data.projectLocations;
    } else if (data && Array.isArray(data.data)) {
      return data.data;
    }
    return [];
  } catch {
    return [];
  }
}

/**
 * Fetch MahaRERA list from CMS
 */
export async function getCmsMahaReras(): Promise<CmsMahaReraItem[]> {
  try {
    const response = await safeFetch(`${CMS_LOCATION_BASE_URL}/api/mahareras`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!response || !response.ok) {
      return [];
    }

    const data = await response.json();
    if (Array.isArray(data)) {
      return data;
    } else if (data && Array.isArray(data.mahareras)) {
      return data.mahareras;
    } else if (data && Array.isArray(data.data)) {
      return data.data;
    }
    return [];
  } catch {
    return [];
  }
}

/**
 * Fetch site updates list from CMS
 */
export async function getCmsSiteUpdates(limit = 100): Promise<CmsSiteUpdateItem[]> {
  try {
    const response = await safeFetch(`${CMS_BASE_URL}/api/site-updates?limit=${limit}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!response || !response.ok) {
      return [];
    }

    const data: CmsSiteUpdatesResponse = await response.json();
    return data.siteUpdates || [];
  } catch {
    return [];
  }
}

/**
 * Fetch media publications list from CMS
 */
export async function getCmsMediaPublications(limit = 100): Promise<CmsMediaArticleItem[]> {
  try {
    const response = await safeFetch(`${CMS_BASE_URL}/api/media-publications?limit=${limit}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!response || !response.ok) {
      return [];
    }

    const data: CmsMediaPublicationsResponse = await response.json();
    return data.mediaArticles || [];
  } catch {
    return [];
  }
}

/**
 * Fetch monthly newsletters list from CMS
 */
export async function getCmsNewsletters(limit = 100): Promise<CmsNewsletterItem[]> {
  try {
    const response = await safeFetch(`${CMS_BASE_URL}/api/newsletters?limit=${limit}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!response || !response.ok) {
      return [];
    }

    const data: CmsNewslettersResponse = await response.json();
    return data.newsletters || [];
  } catch {
    return [];
  }
}

// ==========================================
// Form Submission API Interfaces & Method
// ==========================================

export const SARV_ENQUIRY_INBOX = "sarvenquiry@jhamtani.com";

export interface FormSubmissionPayload {
  name: string;
  email: string;
  phone: string;
  project?: string;
  message?: string;
  consent?: boolean;
  formName?: string;
  to?: string;
}

export interface MdocEnquiryPayload {
  project: string;
  name: string;
  email: string;
  phone: string;
  preferences?: string;
  message?: string;
}

const MDOC_UTM_FIELDS: Record<string, string> = {
  utm_source: "UtmCampaignSource",
  utm_campaign: "UtmCampaignName",
  utm_id: "UtmCampaignId",
  utm_medium: "UtmCampaignMedium",
  utm_content: "UtmCampaignContent",
  utm_term: "UtmCampaignTerm",
};

function readUtmParams(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const utm: Record<string, string> = {};
  for (const [queryKey, field] of Object.entries(MDOC_UTM_FIELDS)) {
    const value = params.get(queryKey);
    if (value) utm[field] = value;
  }
  return utm;
}

/**
 * Push a project-page enquiry into the MDOC CRM.
 * The project API key stays on the server.
 */
export async function submitMdocEnquiry(
  data: MdocEnquiryPayload
): Promise<{ success: boolean; error?: string }> {
  try {
    const res = await fetch("/api/mdoc-enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, ...readUtmParams() }),
    });
    const json = await res.json().catch(() => ({}));
    if (res.ok && json.success) {
      return { success: true };
    }
    console.error("MDOC enquiry failed:", json);
    return { success: false, error: json.error || "MDOC enquiry failed" };
  } catch (err: any) {
    console.error("submitMdocEnquiry error:", err);
    return { success: false, error: err?.message || "MDOC enquiry failed" };
  }
}

export async function sendFormEmail(data: Record<string, any>): Promise<{ success: boolean; error?: string }> {
  try {
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const json = await res.json().catch(() => ({}));
    if (res.ok && json.success) {
      return { success: true };
    }
    return { success: false, error: json.error || "Failed to send email" };
  } catch (err: any) {
    console.error("sendFormEmail error:", err);
    return { success: false, error: err?.message || "Failed to send email" };
  }
}

export const CONTACT_PAGE_FORM_ID = "0cfddca7-afc6-46cb-a076-dae138589f4e";
export const QUICK_ENQUIRY_FORM_ID = "4e4649db-d32f-4d8b-9eac-0c6ed3a385c6";

export async function submitContactUsForm(
  data: FormSubmissionPayload
): Promise<{ success: boolean; data?: any; fallback?: boolean; error?: string }> {
  return submitMainEnquiryForm(
    {
      ...data,
      formName: data.formName || "Contact Us Page Form",
      to: data.to || SARV_ENQUIRY_INBOX,
    },
    CONTACT_PAGE_FORM_ID
  );
}

export async function submitQuickEnquiryForm(
  data: FormSubmissionPayload
): Promise<{ success: boolean; data?: any; fallback?: boolean; error?: string }> {
  return submitMainEnquiryForm(
    {
      ...data,
      formName: data.formName || "Floating Quick Enquiry Modal Form",
      to: data.to || SARV_ENQUIRY_INBOX,
    },
    QUICK_ENQUIRY_FORM_ID
  );
}

export async function submitMainEnquiryForm(
  data: FormSubmissionPayload,
  formId = QUICK_ENQUIRY_FORM_ID
): Promise<{ success: boolean; data?: any; fallback?: boolean; error?: string }> {
  // Trigger Nodemailer email dispatch
  sendFormEmail({
    name: data.name,
    email: data.email,
    phone: data.phone,
    project: data.project,
    message: data.message,
    formName: data.formName || "Main Enquiry Form",
    to: data.to,
  });

  const targetUrl =
    typeof window !== "undefined"
      ? `/api/forms/forms/${formId}/submit`
      : `${CMS_BASE_URL}/api/forms/forms/${formId}/submit`;

  const payload = {
    data: {
      n: data.name,
      f: data.name,
      name: data.name,
      fullName: data.name,
      "Your Name": data.name,
      e: data.email,
      email: data.email,
      emailAddress: data.email,
      "Email Address": data.email,
      p: data.phone,
      phone: data.phone,
      phoneNumber: data.phone,
      "Phone Number": data.phone,
      project_of_interes: data.project || "",
      project_of_interest: data.project || "",
      project: data.project || "",
      projectOfInterest: data.project || "",
      "Project of Interest": data.project || "",
      m: data.message || "",
      message: data.message || "",
      Message: data.message || "",
      consent: data.consent ?? true,
    },
  };

  try {
    let res = await safeFetch(targetUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res || !res.ok) {
      const directUrl = `${CMS_BASE_URL}/api/forms/forms/${formId}/submit`;
      if (directUrl !== targetUrl) {
        res = await safeFetch(directUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
      }
    }

    if (res && res.ok) {
      const resData = await res.json().catch(() => ({}));
      return { success: true, data: resData };
    }

    // Graceful fallback if CMS backend is offline during local dev or returns non-200
    return { success: true, fallback: true };
  } catch {
    return { success: true, fallback: true };
  }
}

// ==========================================
// Career Jobs API Interfaces & Method
// ==========================================

export interface CmsCareerJobItem {
  id: string;
  slug?: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  isActive?: boolean;
  order?: number;
  createdAt?: string;
  updatedAt?: string;
  _id?: string;
}

/**
 * Fetch career job openings list from CMS
 */
export async function getCmsCareerJobs(): Promise<CmsCareerJobItem[]> {
  try {
    const response = await safeFetch(`${CMS_LOCATION_BASE_URL}/api/career-jobs`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!response || !response.ok) {
      return [];
    }

    const data = await response.json();
    if (Array.isArray(data)) {
      return data;
    } else if (data && Array.isArray(data.jobs)) {
      return data.jobs;
    } else if (data && Array.isArray(data.careerJobs)) {
      return data.careerJobs;
    } else if (data && Array.isArray(data.data)) {
      return data.data;
    }
    return [];
  } catch {
    return [];
  }
}

// ==========================================
// Career Application Submission API Method
// ==========================================

export interface CareerApplicationData {
  positionApplyingFor: string;
  fullName: string;
  email: string;
  phone: string;
  experienceYears: string;
  linkedinUrl?: string;
  briefNote?: string;
  consent?: boolean;
  resume?: File | null;
}

const CAREERS_INBOX = "careers@jhamtani.com";

function asCareerApplication(payload: CareerApplicationData | FormData): CareerApplicationData {
  if (!(payload instanceof FormData)) return payload;
  const resume = payload.get("resume");
  return {
    positionApplyingFor: String(payload.get("positionApplyingFor") || "General Application"),
    fullName: String(payload.get("fullName") || ""),
    email: String(payload.get("email") || ""),
    phone: String(payload.get("phone") || ""),
    experienceYears: String(payload.get("experienceYears") || ""),
    linkedinUrl: String(payload.get("linkedinUrl") || ""),
    briefNote: String(payload.get("briefNote") || ""),
    consent: String(payload.get("consent") ?? "true") !== "false",
    resume: resume instanceof File ? resume : null,
  };
}

async function sendCareerApplicationEmail(
  data: CareerApplicationData
): Promise<{ success: boolean; error?: string }> {
  const body = new FormData();
  body.append("to", CAREERS_INBOX);
  body.append("name", data.fullName);
  body.append("email", data.email);
  body.append("phone", data.phone);
  body.append("project", data.positionApplyingFor);
  body.append("formName", `Career Application: ${data.positionApplyingFor}`);
  body.append("experienceYears", `${data.experienceYears} Years`);
  if (data.linkedinUrl) body.append("linkedinUrl", data.linkedinUrl);
  if (data.briefNote) body.append("message", data.briefNote);
  if (data.resume) body.append("resume", data.resume);

  const res = await fetch("/api/send-email", {
    method: "POST",
    body,
  });
  const json = await res.json().catch(() => ({}));
  if (res.ok && json.success) {
    return { success: true };
  }
  return { success: false, error: json.error || "Failed to send career email" };
}

/**
 * Submit career application to careers@jhamtani.com and the CMS.
 * Job applications and general applications both use this path.
 */
export async function submitCareerApplication(
  payload: CareerApplicationData | FormData
): Promise<{ success: boolean; data?: any; error?: string }> {
  const data = asCareerApplication(payload);
  const emailResult = await sendCareerApplicationEmail(data);

  const url = `${CMS_LOCATION_BASE_URL}/api/careers`;
  const bodyData = new FormData();
  bodyData.append("positionApplyingFor", data.positionApplyingFor);
  bodyData.append("fullName", data.fullName);
  bodyData.append("email", data.email);
  bodyData.append("phone", data.phone);
  bodyData.append("experienceYears", data.experienceYears);
  if (data.linkedinUrl) bodyData.append("linkedinUrl", data.linkedinUrl);
  if (data.briefNote) bodyData.append("briefNote", data.briefNote);
  bodyData.append("consent", String(data.consent ?? true));
  if (data.resume) bodyData.append("resume", data.resume);

  try {
    const response = await fetch(url, {
      method: "POST",
      body: bodyData,
    });
    const resData = await response.json().catch(() => ({}));
    if (!emailResult.success) {
      return { success: false, error: emailResult.error, data: resData };
    }
    return { success: true, data: resData };
  } catch (err: any) {
    if (!emailResult.success) {
      return { success: false, error: emailResult.error || err?.message || "Submission error" };
    }
    return { success: true };
  }
}

// ==========================================
// Blogs API Interfaces & Methods
// ==========================================

export interface CmsBlogItem {
  id: string;
  _id?: string;
  slug: string;
  title: string;
  content?: string;
  excerpt?: string;
  coverImage?: string;
  uploadImage?: string;
  image?: string;
  category?: string;
  categories?: string[];
  tags?: string[];
  author?:
  | {
    name?: string;
    role?: string;
    avatar?: string;
  }
  | string
  | null;
  readTime?: number | string;
  views?: number;
  likes?: number;
  commentsCount?: number;
  isPublished?: boolean;
  publishedAt?: string;
  createdAt?: string;
  updatedAt?: string;
  metaTitle?: string;
  metaDescription?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

/**
 * Fetch blogs list from CMS
 */
export async function getCmsBlogs(): Promise<CmsBlogItem[]> {
  try {
    const response = await safeFetch(`${CMS_LOCATION_BASE_URL}/api/blogs`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!response || !response.ok) {
      return [];
    }

    const data = await response.json();
    if (Array.isArray(data)) {
      return data;
    } else if (data && Array.isArray(data.blogs)) {
      return data.blogs;
    } else if (data && Array.isArray(data.data)) {
      return data.data;
    }
    return [];
  } catch {
    return [];
  }
}

/**
 * Fetch single blog post by slug or ID from CMS
 */
export async function getCmsBlogBySlugOrId(
  slugOrId: string
): Promise<CmsBlogItem | null> {
  try {
    const response = await safeFetch(
      `${CMS_LOCATION_BASE_URL}/api/blogs/${slugOrId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );

    if (response && response.ok) {
      const data = await response.json();
      if (data && (data.id || data._id) && !data.message) {
        return data as CmsBlogItem;
      }
    }

    // If direct lookup by ID failed or returned "Blog not found", search list by slug/ID/title-slug
    const allBlogs = await getCmsBlogs();
    const found = allBlogs.find(
      (b) =>
        b.slug === slugOrId ||
        b.id === slugOrId ||
        b._id === slugOrId ||
        (b.title &&
          b.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "") === slugOrId)
    );

    return found || null;
  } catch {
    return null;
  }
}





