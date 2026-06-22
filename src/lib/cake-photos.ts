// NOTE: Legacy cake-photos module has been cleaned for Knead To Know brand conversion.
// Old cake assets and data removed. This now exports safe bakery-focused
// product references using public K2K assets and placeholders. Gallery and hero sections
// in customer pages have been updated to use these or ImagePlaceholder.

import type { ReactNode } from "react";

export type PortfolioAspect = "square" | "portrait" | "landscape" | "wide" | "tall";

export interface PortfolioImage {
  id: string;
  url: string;
  alt: string;
  caption: string;
  tags: string[];
  aspect: PortfolioAspect;
}

// Direct public paths to K2K product card assets (safe, new brand).
const PRODUCT_BASE = "/assets/knead-to-know/product-cards";

export const PORTFOLIO_IMAGES = {
  plainSourdough: {
    id: "plain-sourdough",
    url: `${PRODUCT_BASE}/KTK_Product_Card_01_Plain_Sourdough_Bread.png`,
    alt: "Plain sourdough bread loaf from Knead To Know bakery",
    caption: "Classic plain sourdough",
    tags: ["Bread", "Sourdough"],
    aspect: "portrait" as const,
  },
  rosemarySourdough: {
    id: "rosemary-sourdough",
    url: `${PRODUCT_BASE}/KTK_Product_Card_02_Rosemary_Sourdough_Bread.png`,
    alt: "Rosemary sourdough bread",
    caption: "Rosemary sourdough loaf",
    tags: ["Bread", "Herb"],
    aspect: "portrait" as const,
  },
  cranberryWalnut: {
    id: "cranberry-walnut",
    url: `${PRODUCT_BASE}/KTK_Product_Card_06_Cranberry_Walnut_Sourdough_Bread.png`,
    alt: "Cranberry walnut sourdough bread",
    caption: "Cranberry walnut sourdough",
    tags: ["Bread", "Fruit & Nut"],
    aspect: "portrait" as const,
  },
  chocolateChipCookie: {
    id: "chocolate-chip-cookie",
    url: `${PRODUCT_BASE}/KTK_Product_Card_08_Chocolate_Chip_Cookies.png`,
    alt: "Fresh chocolate chip cookies",
    caption: "Classic chocolate chip cookies",
    tags: ["Cookies", "Sourdough"],
    aspect: "square" as const,
  },
  cranberryChocolateChip: {
    id: "cranberry-chocolate-chip",
    url: `${PRODUCT_BASE}/KTK_Product_Card_09_Cranberry_Chocolate_Chip_Cookies.png`,
    alt: "Cranberry chocolate chip cookies",
    caption: "Cranberry chocolate chip cookies",
    tags: ["Cookies"],
    aspect: "square" as const,
  },
  plainBagel: {
    id: "plain-bagel",
    url: `${PRODUCT_BASE}/KTK_Product_Card_13_Plain_Bagel.png`,
    alt: "Plain sourdough bagel",
    caption: "Plain bagel",
    tags: ["Bagels"],
    aspect: "square" as const,
  },
} as const satisfies Record<string, PortfolioImage>;

// Homepage hero uses one of the clean bread product images.
export const HOME_HERO_IMAGE = PORTFOLIO_IMAGES.plainSourdough;

// Gallery preview and main use safe product images.
export const HOME_GALLERY_PREVIEW: PortfolioImage[] = [
  PORTFOLIO_IMAGES.plainSourdough,
  PORTFOLIO_IMAGES.rosemarySourdough,
  PORTFOLIO_IMAGES.cranberryWalnut,
  PORTFOLIO_IMAGES.chocolateChipCookie,
  PORTFOLIO_IMAGES.cranberryChocolateChip,
];

export const GALLERY_IMAGES: PortfolioImage[] = [
  PORTFOLIO_IMAGES.plainSourdough,
  PORTFOLIO_IMAGES.rosemarySourdough,
  PORTFOLIO_IMAGES.cranberryWalnut,
  PORTFOLIO_IMAGES.chocolateChipCookie,
  PORTFOLIO_IMAGES.cranberryChocolateChip,
  PORTFOLIO_IMAGES.plainBagel,
];

export const GALLERY_CAPTIONS: Record<string, string> = {
  "plain-sourdough": "Fresh plain sourdough loaf",
  "rosemary-sourdough": "Rosemary sourdough bread",
  "cranberry-walnut": "Cranberry walnut sourdough",
  "chocolate-chip-cookie": "Chocolate chip cookies",
  "cranberry-chocolate-chip": "Cranberry chocolate chip cookies",
  "plain-bagel": "Freshly baked plain bagel",
};

// Back-compat exports for any remaining references (point to safe data).
export const OCCASION_PORTFOLIO_PHOTOS: PortfolioImage[] = [
  PORTFOLIO_IMAGES.plainSourdough,
  PORTFOLIO_IMAGES.rosemarySourdough,
  PORTFOLIO_IMAGES.cranberryWalnut,
  PORTFOLIO_IMAGES.chocolateChipCookie,
];

// Video support removed (old rotating videos were previous brand content).
export const GALLERY_VIDEOS: any[] = [];

// Mixed gallery now image-only using K2K products. Kept type for Lightbox compat.
export type GalleryMediaItem = ({ kind: "image" } & PortfolioImage) | any;

export const GALLERY_MEDIA: GalleryMediaItem[] = GALLERY_IMAGES.map((img) => ({
  kind: "image" as const,
  ...img,
}));
