// TODO (launch): replace with the final production domain once it's live,
// e.g. "https://kneadtoknowbakery.com". Canonical URLs, OG tags, and the sitemap
// all read from this constant.
export const SITE_URL = "https://knead-to-know-preview.vercel.app";

export const BUSINESS = {
  name: "Knead To Know",
  owner: "[INSERT OWNER NAME]",
  shortOwner: "[INSERT SHORT NAME]",
  city: "Daniel Island, SC",
  serviceArea: "Daniel Island and Charleston area",
  email: "[INSERT EMAIL]",
  // TODO (launch): confirm with client before launch.
  instagramHandle: "[INSERT INSTAGRAM]",
  // TODO (launch): confirm with client before launch.
  instagramUrl: "[INSERT INSTAGRAM URL]",
} as const;

// Note: Original Spilled Milk press feature removed as part of brand conversion.
// Placeholder for future Knead To Know press if available.
export const PRESS_FEATURE = null as const;
