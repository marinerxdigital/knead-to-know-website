// TODO (launch): replace with the final production domain once it's live,
// e.g. "https://kneadtoknowbakery.com". Canonical URLs, OG tags, and the sitemap
// all read from this constant.
export const SITE_URL = "https://knead-to-know-website-v2.pages.dev";

export const BUSINESS = {
  name: "Knead To Know Sweet & Sour",
  owner: "Wendy Mercado",
  shortOwner: "Wendy",
  established: 2026,
  address: "Pickup by appointment — Daniel Island, SC",
  city: "Daniel Island, SC",
  serviceArea: "Daniel Island and Charleston area",
  phone: "(843) 973-0309",
  phoneTel: "tel:8439730309",
  phoneSms: "sms:8439730309",
  email: null as string | null,
  hours: null as string | null,
  orderingModel: "Pre-orders only",
  fulfillment: "Freshly baked to order",
  customerAction: "DM or call to place your order",
  instagramHandle: null as string | null,
  instagramUrl: null as string | null,
  facebookUrl: null as string | null,
  mapsUrl: null as string | null,
  orderingUrl: null as string | null,
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
