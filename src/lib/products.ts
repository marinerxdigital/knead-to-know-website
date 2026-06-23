// src/lib/products.ts
// Official Knead To Know product catalog — verified from Wendy's physical menu.

import { PRODUCT_COPY } from "./product-copy";

export type ProductCategory =
  | "bread"
  | "cookies"
  | "bagels"
  | "pastries"
  | "bakery-boxes"
  | "custom";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  ingredients?: string;
  price: string | null;
  cardAsset: string;
  photo?: string;
  featured?: boolean;
  preorderAvailable?: boolean;
}

function withCopy(
  product: Omit<Product, "description" | "ingredients"> & {
    description?: string;
    ingredients?: string;
  },
): Product {
  const copy = PRODUCT_COPY[product.id];
  return {
    ...product,
    description: product.description ?? copy?.description ?? "",
    ingredients: product.ingredients ?? copy?.ingredients,
  };
}

const CARD_BASE = "/assets/knead-to-know/product-cards";
const PHOTO_BASE = "/assets/knead-to-know/photos";

export const BAKERY_PHOTOS = {
  hero: `${PHOTO_BASE}/hero-bakery-spread.jpg`,
  plainSourdough: `${PHOTO_BASE}/plain-sourdough-bread.jpg`,
  rosemarySourdough: `${PHOTO_BASE}/rosemary-sourdough-bread.jpg`,
  cranberryWalnut: `${PHOTO_BASE}/cranberry-walnut-bread.jpg`,
  chocolateChipCookies: `${PHOTO_BASE}/chocolate-chip-cookies.jpg`,
  mangoMacadamiaCookies: `${PHOTO_BASE}/mango-macadamia-cookies.jpg`,
  everythingBagel: `${PHOTO_BASE}/everything-bagel.jpg`,
  sesameBagel: `${PHOTO_BASE}/sesame-bagel.jpg`,
} as const;

export const CATEGORY_PRICING: Record<"bread" | "cookies" | "bagels", string | null> = {
  bread: null,
  cookies: "2 for $5",
  bagels: "$3 each",
};

const PRODUCTS_RAW = [
  // Sourdough Breads (7)
  {
    id: "plain-sourdough",
    name: "Plain",
    category: "bread",
    description: "",
    price: "$12",
    cardAsset: `${CARD_BASE}/KTK_Product_Card_01_Plain_Sourdough_Bread.png`,
    photo: BAKERY_PHOTOS.plainSourdough,
    featured: true,
    preorderAvailable: true,
  },
  {
    id: "rosemary-sourdough",
    name: "Rosemary",
    category: "bread",
    description: "",
    price: "$15",
    cardAsset: `${CARD_BASE}/KTK_Product_Card_02_Rosemary_Sourdough_Bread.png`,
    photo: BAKERY_PHOTOS.rosemarySourdough,
    featured: true,
    preorderAvailable: true,
  },
  {
    id: "rosemary-garlic-sourdough",
    name: "Rosemary & Roasted Garlic",
    category: "bread",
    description: "",
    price: "$15",
    cardAsset: `${CARD_BASE}/KTK_Product_Card_03_Rosemary_Roasted_Garlic_Sourdough_Bread.png`,
    photo: BAKERY_PHOTOS.rosemarySourdough,
    featured: true,
    preorderAvailable: true,
  },
  {
    id: "cheese-jalapeno",
    name: "Cheese & Jalapeño",
    category: "bread",
    description: "",
    price: "$15",
    cardAsset: `${CARD_BASE}/KTK_Product_Card_04_Cheese_Jalapeno_Sourdough_Bread.png`,
    preorderAvailable: true,
  },
  {
    id: "chocolate-nutella",
    name: "Chocolate Chip Nutella",
    category: "bread",
    description: "",
    price: "$20",
    cardAsset: `${CARD_BASE}/KTK_Product_Card_05_Chocolate_Chip_Nutella_Sourdough_Bread.png`,
    preorderAvailable: true,
  },
  {
    id: "cranberry-walnut",
    name: "Cranberry & Walnut",
    category: "bread",
    description: "",
    price: "$15",
    cardAsset: `${CARD_BASE}/KTK_Product_Card_06_Cranberry_Walnut_Sourdough_Bread.png`,
    photo: BAKERY_PHOTOS.cranberryWalnut,
    preorderAvailable: true,
  },
  {
    id: "olive-sourdough",
    name: "Olive",
    category: "bread",
    description: "",
    price: "$15",
    cardAsset: `${CARD_BASE}/KTK_Product_Card_07_Olive_Sourdough_Bread.png`,
    preorderAvailable: true,
  },
  // Sourdough Cookies (5)
  {
    id: "chocolate-chip-cookies",
    name: "Chocolate Chip",
    category: "cookies",
    description: "",
    price: "2 for $5",
    cardAsset: `${CARD_BASE}/KTK_Product_Card_08_Chocolate_Chip_Cookies.png`,
    photo: BAKERY_PHOTOS.chocolateChipCookies,
    featured: true,
    preorderAvailable: true,
  },
  {
    id: "cranberry-choc-chip-cookies",
    name: "Cranberry & Chocolate Chip",
    category: "cookies",
    description: "",
    price: "2 for $5",
    cardAsset: `${CARD_BASE}/KTK_Product_Card_09_Cranberry_Chocolate_Chip_Cookies.png`,
    photo: BAKERY_PHOTOS.chocolateChipCookies,
    preorderAvailable: true,
  },
  {
    id: "cranberry-walnut-cookies",
    name: "Cranberry & Walnut",
    category: "cookies",
    description: "",
    price: "2 for $5",
    cardAsset: `${CARD_BASE}/KTK_Product_Card_10_Cranberry_Walnut_Cookies.png`,
    photo: BAKERY_PHOTOS.chocolateChipCookies,
    preorderAvailable: true,
  },
  {
    id: "mango-macadamia-cookies",
    name: "Mango & Macadamia",
    category: "cookies",
    description: "",
    price: "2 for $5",
    cardAsset: `${CARD_BASE}/KTK_Product_Card_11_Mango_Macadamia_Cookies.png`,
    photo: BAKERY_PHOTOS.mangoMacadamiaCookies,
    featured: true,
    preorderAvailable: true,
  },
  {
    id: "apricot-mango-cookies",
    name: "Apricot & Mango",
    category: "cookies",
    description: "",
    price: "2 for $5",
    cardAsset: `${CARD_BASE}/KTK_Product_Card_12_Apricot_Mango_Cookies.png`,
    photo: BAKERY_PHOTOS.mangoMacadamiaCookies,
    preorderAvailable: true,
  },
  // Sourdough Bagels (4)
  {
    id: "plain-bagel",
    name: "Plain",
    category: "bagels",
    description: "",
    price: "$3",
    cardAsset: `${CARD_BASE}/KTK_Product_Card_13_Plain_Bagel.png`,
    photo: BAKERY_PHOTOS.sesameBagel,
    preorderAvailable: true,
  },
  {
    id: "everything-bagel",
    name: "Everything",
    category: "bagels",
    description: "",
    price: "$3",
    cardAsset: `${CARD_BASE}/KTK_Product_Card_14_Everything_Bagel.png`,
    photo: BAKERY_PHOTOS.everythingBagel,
    featured: true,
    preorderAvailable: true,
  },
  {
    id: "sesame-bagel",
    name: "Sesame",
    category: "bagels",
    description: "",
    price: "$3",
    cardAsset: `${CARD_BASE}/KTK_Product_Card_15_Sesame_Bagel.png`,
    photo: BAKERY_PHOTOS.sesameBagel,
    preorderAvailable: true,
  },
  {
    id: "poppy-bagel",
    name: "Poppy",
    category: "bagels",
    description: "",
    price: "$3",
    cardAsset: `${CARD_BASE}/KTK_Product_Card_16_Poppy_Bagel.png`,
    preorderAvailable: true,
  },
];

export const PRODUCTS: Product[] = PRODUCTS_RAW.map(withCopy);

export const FEATURED_BREADS = PRODUCTS.filter((p) => p.category === "bread" && p.featured);
export const FEATURED_COOKIES = PRODUCTS.filter((p) => p.category === "cookies" && p.featured);
export const FEATURED_BAGELS = PRODUCTS.filter((p) => p.category === "bagels" && p.featured);

/** Homepage featured: 3 breads, 2 cookies, 2 bagels per brand spec */
export const HOME_FEATURED_PRODUCTS = [
  ...FEATURED_BREADS,
  ...FEATURED_COOKIES,
  PRODUCTS.find((p) => p.id === "everything-bagel")!,
  PRODUCTS.find((p) => p.id === "sesame-bagel")!,
];

export const ALL_BREADS = PRODUCTS.filter((p) => p.category === "bread");
export const ALL_COOKIES = PRODUCTS.filter((p) => p.category === "cookies");
export const ALL_BAGELS = PRODUCTS.filter((p) => p.category === "bagels");
