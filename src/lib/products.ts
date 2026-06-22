// src/lib/products.ts
// Official Knead To Know product catalog — 16 signature sourdough items.
// Prices use placeholders per project rules. cardAsset reserved for future product photography paths.

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
  price: string | null;
  cardAsset: string;
  photo?: string;
  featured?: boolean;
  preorderAvailable?: boolean;
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

export const PRODUCTS: Product[] = [
  // Sourdough Breads (7)
  {
    id: "plain-sourdough",
    name: "Plain Sourdough Bread",
    category: "bread",
    description:
      "Classic artisan sourdough with a crisp crust and open crumb. Small batch, naturally leavened.",
    price: null,
    cardAsset: `${CARD_BASE}/KTK_Product_Card_01_Plain_Sourdough_Bread.png`,
    photo: BAKERY_PHOTOS.plainSourdough,
    featured: true,
    preorderAvailable: true,
  },
  {
    id: "rosemary-sourdough",
    name: "Rosemary Sourdough Bread",
    category: "bread",
    description: "Fragrant rosemary folded into the dough for an herbal aroma and delicate flavor.",
    price: null,
    cardAsset: `${CARD_BASE}/KTK_Product_Card_02_Rosemary_Sourdough_Bread.png`,
    photo: BAKERY_PHOTOS.rosemarySourdough,
    featured: true,
    preorderAvailable: true,
  },
  {
    id: "rosemary-garlic-sourdough",
    name: "Rosemary & Roasted Garlic Sourdough Bread",
    category: "bread",
    description:
      "Roasted garlic and fresh rosemary bring warm, savory depth to our signature sourdough.",
    price: null,
    cardAsset: `${CARD_BASE}/KTK_Product_Card_03_Rosemary_Roasted_Garlic_Sourdough_Bread.png`,
    photo: BAKERY_PHOTOS.rosemarySourdough,
    featured: true,
    preorderAvailable: true,
  },
  {
    id: "cheese-jalapeno",
    name: "Cheese & Jalapeño Sourdough Bread",
    category: "bread",
    description: "Sharp cheddar and pickled jalapeño for a bold, savory loaf with a subtle kick.",
    price: null,
    cardAsset: `${CARD_BASE}/KTK_Product_Card_04_Cheese_Jalapeno_Sourdough_Bread.png`,
    preorderAvailable: true,
  },
  {
    id: "chocolate-nutella",
    name: "Chocolate Chip Nutella Sourdough Bread",
    category: "bread",
    description:
      "Sweet and rich with dark chocolate chips and swirls of Nutella in a sourdough base.",
    price: null,
    cardAsset: `${CARD_BASE}/KTK_Product_Card_05_Chocolate_Chip_Nutella_Sourdough_Bread.png`,
    preorderAvailable: true,
  },
  {
    id: "cranberry-walnut",
    name: "Cranberry & Walnut Sourdough Bread",
    category: "bread",
    description: "Tart cranberries and toasted walnuts for a perfect balance of sweet and nutty.",
    price: null,
    cardAsset: `${CARD_BASE}/KTK_Product_Card_06_Cranberry_Walnut_Sourdough_Bread.png`,
    photo: BAKERY_PHOTOS.cranberryWalnut,
    preorderAvailable: true,
  },
  {
    id: "olive-sourdough",
    name: "Olive Sourdough Bread",
    category: "bread",
    description:
      "Briny olives baked into a savory sourdough. Excellent with cheese or charcuterie.",
    price: null,
    cardAsset: `${CARD_BASE}/KTK_Product_Card_07_Olive_Sourdough_Bread.png`,
    preorderAvailable: true,
  },
  // Sourdough Cookies (5)
  {
    id: "chocolate-chip-cookies",
    name: "Chocolate Chip Sourdough Cookies",
    category: "cookies",
    description: "Crisp edges, chewy centers. Made with our sourdough starter for subtle tang.",
    price: null,
    cardAsset: `${CARD_BASE}/KTK_Product_Card_08_Chocolate_Chip_Cookies.png`,
    photo: BAKERY_PHOTOS.chocolateChipCookies,
    featured: true,
    preorderAvailable: true,
  },
  {
    id: "cranberry-choc-chip-cookies",
    name: "Cranberry & Chocolate Chip Sourdough Cookies",
    category: "cookies",
    description: "Tart dried cranberries with rich chocolate chips in a sourdough cookie base.",
    price: null,
    cardAsset: `${CARD_BASE}/KTK_Product_Card_09_Cranberry_Chocolate_Chip_Cookies.png`,
    photo: BAKERY_PHOTOS.chocolateChipCookies,
    preorderAvailable: true,
  },
  {
    id: "cranberry-walnut-cookies",
    name: "Cranberry & Walnut Sourdough Cookies",
    category: "cookies",
    description: "Chewy sourdough cookies studded with cranberries and toasted walnuts.",
    price: null,
    cardAsset: `${CARD_BASE}/KTK_Product_Card_10_Cranberry_Walnut_Cookies.png`,
    photo: BAKERY_PHOTOS.chocolateChipCookies,
    preorderAvailable: true,
  },
  {
    id: "mango-macadamia-cookies",
    name: "Mango & Macadamia Sourdough Cookies",
    category: "cookies",
    description:
      "Tropical dried mango and buttery macadamia nuts in our signature sourdough cookie.",
    price: null,
    cardAsset: `${CARD_BASE}/KTK_Product_Card_11_Mango_Macadamia_Cookies.png`,
    photo: BAKERY_PHOTOS.mangoMacadamiaCookies,
    featured: true,
    preorderAvailable: true,
  },
  {
    id: "apricot-mango-cookies",
    name: "Apricot & Mango Sourdough Cookies",
    category: "cookies",
    description: "Bright dried apricots and mango for a naturally sweet, small-batch treat.",
    price: null,
    cardAsset: `${CARD_BASE}/KTK_Product_Card_12_Apricot_Mango_Cookies.png`,
    photo: BAKERY_PHOTOS.mangoMacadamiaCookies,
    preorderAvailable: true,
  },
  // Sourdough Bagels (4)
  {
    id: "plain-bagel",
    name: "Plain Sourdough Bagel",
    category: "bagels",
    description: "Classic boiled and baked sourdough bagel with a chewy crust and tender interior.",
    price: null,
    cardAsset: `${CARD_BASE}/KTK_Product_Card_13_Plain_Bagel.png`,
    photo: BAKERY_PHOTOS.sesameBagel,
    preorderAvailable: true,
  },
  {
    id: "everything-bagel",
    name: "Everything Sourdough Bagel",
    category: "bagels",
    description: "Classic everything seasoning on our house sourdough bagel. Perfect toasted.",
    price: null,
    cardAsset: `${CARD_BASE}/KTK_Product_Card_14_Everything_Bagel.png`,
    photo: BAKERY_PHOTOS.everythingBagel,
    featured: true,
    preorderAvailable: true,
  },
  {
    id: "sesame-bagel",
    name: "Sesame Sourdough Bagel",
    category: "bagels",
    description: "Toasted sesame seeds baked onto a naturally leavened sourdough bagel.",
    price: null,
    cardAsset: `${CARD_BASE}/KTK_Product_Card_15_Sesame_Bagel.png`,
    photo: BAKERY_PHOTOS.sesameBagel,
    preorderAvailable: true,
  },
  {
    id: "poppy-bagel",
    name: "Poppy Sourdough Bagel",
    category: "bagels",
    description: "Poppy seeds give subtle crunch and visual appeal on our artisanal bagel.",
    price: null,
    cardAsset: `${CARD_BASE}/KTK_Product_Card_16_Poppy_Bagel.png`,
    preorderAvailable: true,
  },
];

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

// Broader categories for menu display (non-card or supplemental)
export const BROADER_MENU = {
  breads: ["Sourdough Loaf", "Country Loaf", "Focaccia", "Dinner Rolls", "Seasonal Bread"],
  cookies: [
    "Chocolate Chip Cookies",
    "Brown Butter Sugar Cookies",
    "Oatmeal Cookies",
    "Seasonal Cookies",
    "Cookie Boxes",
  ],
  pastries: ["Croissants", "Morning Buns", "Muffins", "Scones", "Seasonal Pastries"],
  bakeryBoxes: ["Cookie Box", "Breakfast Box", "Mixed Pastry Box", "Event Box"],
  custom: [
    "Bread Orders",
    "Cookie Trays",
    "Brunch Platters",
    "Custom Bakery Requests",
    "Seasonal Specials",
  ],
};
