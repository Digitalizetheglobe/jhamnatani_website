/**
 * Centralized API Service for Jhamtani Website
 * All API calls and domain base configuration are managed in this single file.
 * To change the domain, update CMS_BASE_URL here or set NEXT_PUBLIC_CMS_URL in .env.
 */

export const CMS_BASE_URL =
  process.env.NEXT_PUBLIC_CMS_URL || "http://localhost:5174";

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
// API Methods
// ==========================================

/**
 * Fetch brochures list from CMS
 */
export async function getCmsBrochures(limit = 100): Promise<CmsBrochureItem[]> {
  try {
    const response = await fetch(`${CMS_BASE_URL}/api/brochures?limit=${limit}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      console.warn(`[CMS API] Failed to fetch brochures. Status: ${response.status}`);
      return [];
    }

    const data: CmsBrochuresResponse = await response.json();
    return data.brochures || [];
  } catch (error) {
    console.error("[CMS API] Error fetching brochures:", error);
    return [];
  }
}

/**
 * Fetch project locations list from CMS
 */
export async function getCmsProjectLocations(): Promise<CmsProjectLocationItem[]> {
  try {
    const response = await fetch(`${CMS_LOCATION_BASE_URL}/api/project-locations`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      console.warn(`[CMS API] Failed to fetch project locations. Status: ${response.status}`);
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
  } catch (error) {
    console.error("[CMS API] Error fetching project locations:", error);
    return [];
  }
}

/**
 * Fetch MahaRERA list from CMS
 */
export async function getCmsMahaReras(): Promise<CmsMahaReraItem[]> {
  try {
    const response = await fetch(`${CMS_LOCATION_BASE_URL}/api/mahareras`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      console.warn(`[CMS API] Failed to fetch MahaRERA items. Status: ${response.status}`);
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
  } catch (error) {
    console.error("[CMS API] Error fetching MahaRERA items:", error);
    return [];
  }
}

/**
 * Fetch site updates list from CMS
 */
export async function getCmsSiteUpdates(limit = 100): Promise<CmsSiteUpdateItem[]> {
  try {
    const response = await fetch(`${CMS_BASE_URL}/api/site-updates?limit=${limit}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      console.warn(`[CMS API] Failed to fetch site updates. Status: ${response.status}`);
      return [];
    }

    const data: CmsSiteUpdatesResponse = await response.json();
    return data.siteUpdates || [];
  } catch (error) {
    console.error("[CMS API] Error fetching site updates:", error);
    return [];
  }
}

/**
 * Fetch media publications list from CMS
 */
export async function getCmsMediaPublications(limit = 100): Promise<CmsMediaArticleItem[]> {
  try {
    const response = await fetch(`${CMS_BASE_URL}/api/media-publications?limit=${limit}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      console.warn(`[CMS API] Failed to fetch media publications. Status: ${response.status}`);
      return [];
    }

    const data: CmsMediaPublicationsResponse = await response.json();
    return data.mediaArticles || [];
  } catch (error) {
    console.error("[CMS API] Error fetching media publications:", error);
    return [];
  }
}

/**
 * Fetch monthly newsletters list from CMS
 */
export async function getCmsNewsletters(limit = 100): Promise<CmsNewsletterItem[]> {
  try {
    const response = await fetch(`${CMS_BASE_URL}/api/newsletters?limit=${limit}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      console.warn(`[CMS API] Failed to fetch newsletters. Status: ${response.status}`);
      return [];
    }

    const data: CmsNewslettersResponse = await response.json();
    return data.newsletters || [];
  } catch (error) {
    console.error("[CMS API] Error fetching newsletters:", error);
    return [];
  }
}
