// TODO (launch): replace with the final production domain once it's live,
// e.g. "https://kneadtoknowbakery.com". Canonical URLs, OG tags, and the sitemap
// all read from this constant.
export const SITE_URL = "https://knead-to-know-website-v2.pages.dev";

export const BUSINESS = {
  name: "Knead To Know",
  owner: "[INSERT OWNER NAME]",
  shortOwner: "[INSERT SHORT NAME]",
  address: "[INSERT ADDRESS]",
  city: "Daniel Island, SC",
  serviceArea: "Daniel Island and Charleston area",
  phone: "[INSERT PHONE]",
  email: "[INSERT EMAIL]",
  hours: "[INSERT HOURS]",
  instagramHandle: "[INSERT INSTAGRAM]",
  instagramUrl: "[INSERT INSTAGRAM URL]",
  facebookUrl: "[INSERT FACEBOOK]",
  mapsUrl: "[INSERT GOOGLE MAPS LINK]",
  orderingUrl: "[INSERT ORDERING LINK]",
} as const;

// Legacy press feature removed during brand conversion to Knead To Know.
// Set to null; all consuming pages have had the references removed to prevent
// any unsafe access to .publication or other fields.
export interface PressFeature {
  publication: string;
  title: string;
  description: string;
  url: string;
}

export const PRESS_FEATURE: PressFeature | null = null;
