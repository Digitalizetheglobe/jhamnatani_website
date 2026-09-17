/**
 * Centralized API Service for Jhamtani Website
 * All API calls and domain base configuration are managed in this single file.
 * To change the domain, update CMS_BASE_URL here or set NEXT_PUBLIC_CMS_URL in .env.
 */

export const CMS_BASE_URL =
  process.env.NEXT_PUBLIC_CMS_URL || "http://localhost:5173";

export const CMS_LOCATION_BASE_URL =
  process.env.NEXT_PUBLIC_LOCATION_API_URL || "http://localhost:5000";

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

async function safeFetch(url: string, options: RequestInit = {}, timeoutMs = 1500): Promise<Response | null> {
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

export interface FormSubmissionPayload {
  name: string;
  email: string;
  phone: string;
  project?: string;
  message?: string;
  consent?: boolean;
}

export async function submitMainEnquiryForm(
  data: FormSubmissionPayload,
  formId = "254715a5-1571-4ccb-ab30-5a3428cfd4a0"
): Promise<{ success: boolean; data?: any; fallback?: boolean; error?: string }> {
  const targetUrl = `${CMS_BASE_URL}/api/forms/forms/${formId}/submit`;

  const payload = {
    data: {
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
    const res = await safeFetch(targetUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

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

/**
 * Submit career application (FormData with file upload) to CMS /api/careers
 */
export async function submitCareerApplication(
  payload: CareerApplicationData | FormData
): Promise<{ success: boolean; data?: any; error?: string }> {
  const url = `${CMS_LOCATION_BASE_URL}/api/careers`;

  try {
    let bodyData: FormData;
    if (payload instanceof FormData) {
      bodyData = payload;
    } else {
      bodyData = new FormData();
      bodyData.append("positionApplyingFor", payload.positionApplyingFor);
      bodyData.append("fullName", payload.fullName);
      bodyData.append("email", payload.email);
      bodyData.append("phone", payload.phone);
      bodyData.append("experienceYears", payload.experienceYears);
      if (payload.linkedinUrl) bodyData.append("linkedinUrl", payload.linkedinUrl);
      if (payload.briefNote) bodyData.append("briefNote", payload.briefNote);
      bodyData.append("consent", String(payload.consent ?? true));
      if (payload.resume) {
        bodyData.append("resume", payload.resume);
      }
    }

    const response = await fetch(url, {
      method: "POST",
      body: bodyData,
    });

    if (response.ok) {
      const resData = await response.json().catch(() => ({}));
      return { success: true, data: resData };
    }

    return { success: false, error: `HTTP ${response.status}` };
  } catch (err: any) {
    return { success: false, error: err?.message || "Submission error" };
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





