/**
 * Knead To Know official product data derived from PRODUCT_CARD_MANIFEST.md
 * in 00_BRAND_ASSETS/Knead_To_Know_Product_Cards_Package/
 *
 * All 16 product cards reference the official PNG assets in:
 * /public/assets/knead-to-know/product-cards/KTK_Product_Card_XX_....png
 *
 * These are branded transparent PNG card frames (preserve decorative borders).
 */

export type K2KProductCategory = "Sourdough Bread" | "Sourdough Cookies" | "Sourdough Bagels";

export interface K2KProduct {
  id: string;
  name: string;
  category: K2KProductCategory;
  price: string;
  cardAsset: string; // filename only
  description?: string;
  badge?: string;
}

export const K2K_PRODUCTS: K2KProduct[] = [
  // Sourdough Breads (7)
  {
    id: "01",
    name: "Plain Sourdough Bread",
    category: "Sourdough Bread",
    price: "$12",
    cardAsset: "KTK_Product_Card_01_Plain_Sourdough_Bread.png",
    description: "Classic artisan sourdough with a crisp crust and chewy crumb.",
    badge: "Small Batch",
  },
  {
    id: "02",
    name: "Rosemary Sourdough Bread",
    category: "Sourdough Bread",
    price: "$15",
    cardAsset: "KTK_Product_Card_02_Rosemary_Sourdough_Bread.png",
    description: "Fresh rosemary folded into our signature sourdough.",
    badge: "Small Batch",
  },
  {
    id: "03",
    name: "Rosemary & Roasted Garlic Sourdough Bread",
    category: "Sourdough Bread",
    price: "$15",
    cardAsset: "KTK_Product_Card_03_Rosemary_Roasted_Garlic_Sourdough_Bread.png",
    description: "Aromatic rosemary with mellow roasted garlic.",
    badge: "Pre-Order",
  },
  {
    id: "04",
    name: "Cheese & Jalapeño Sourdough Bread",
    category: "Sourdough Bread",
    price: "$15",
    cardAsset: "KTK_Product_Card_04_Cheese_Jalapeno_Sourdough_Bread.png",
    description: "Sharp cheddar and spicy jalapeño in every bite.",
    badge: "Small Batch",
  },
  {
    id: "05",
    name: "Chocolate Chip Nutella Sourdough Bread",
    category: "Sourdough Bread",
    price: "$20",
    cardAsset: "KTK_Product_Card_05_Chocolate_Chip_Nutella_Sourdough_Bread.png",
    description: "Indulgent chocolate chips with rich Nutella swirl.",
    badge: "Pre-Order",
  },
  {
    id: "06",
    name: "Cranberry & Walnut Sourdough Bread",
    category: "Sourdough Bread",
    price: "$15",
    cardAsset: "KTK_Product_Card_06_Cranberry_Walnut_Sourdough_Bread.png",
    description: "Sweet-tart cranberries and toasted walnuts.",
    badge: "Small Batch",
  },
  {
    id: "07",
    name: "Olive Sourdough Bread",
    category: "Sourdough Bread",
    price: "$15",
    cardAsset: "KTK_Product_Card_07_Olive_Sourdough_Bread.png",
    description: "Kalamata olives throughout our classic sourdough.",
    badge: "Small Batch",
  },
  // Sourdough Cookies (5)
  {
    id: "08",
    name: "Chocolate Chip Sourdough Cookies",
    category: "Sourdough Cookies",
    price: "2 for $5",
    cardAsset: "KTK_Product_Card_08_Chocolate_Chip_Cookies.png",
    description: "Classic chocolate chip cookies made with sourdough discard.",
    badge: "Small Batch",
  },
  {
    id: "09",
    name: "Cranberry & Chocolate Chip Sourdough Cookies",
    category: "Sourdough Cookies",
    price: "2 for $5",
    cardAsset: "KTK_Product_Card_09_Cranberry_Chocolate_Chip_Cookies.png",
    description: "Cranberries and chocolate chips in a chewy cookie.",
    badge: "Small Batch",
  },
  {
    id: "10",
    name: "Cranberry & Walnut Sourdough Cookies",
    category: "Sourdough Cookies",
    price: "2 for $5",
    cardAsset: "KTK_Product_Card_10_Cranberry_Walnut_Cookies.png",
    description: "Tart cranberries and crunchy walnuts.",
    badge: "Small Batch",
  },
  {
    id: "11",
    name: "Mango & Macadamia Sourdough Cookies",
    category: "Sourdough Cookies",
    price: "2 for $5",
    cardAsset: "KTK_Product_Card_11_Mango_Macadamia_Cookies.png",
    description: "Tropical mango with rich macadamia nuts.",
    badge: "Pre-Order",
  },
  {
    id: "12",
    name: "Apricot & Mango Sourdough Cookies",
    category: "Sourdough Cookies",
    price: "2 for $5",
    cardAsset: "KTK_Product_Card_12_Apricot_Mango_Cookies.png",
    description: "Sweet apricots and mango in a buttery cookie.",
    badge: "Small Batch",
  },
  // Sourdough Bagels (4)
  {
    id: "13",
    name: "Plain Sourdough Bagel",
    category: "Sourdough Bagels",
    price: "$3 each",
    cardAsset: "KTK_Product_Card_13_Plain_Bagel.png",
    description: "Traditional sourdough bagel, boiled and baked.",
    badge: "Small Batch",
  },
  {
    id: "14",
    name: "Everything Sourdough Bagel",
    category: "Sourdough Bagels",
    price: "$3 each",
    cardAsset: "KTK_Product_Card_14_Everything_Bagel.png",
    description: "Sesame, poppy, garlic, onion and salt blend.",
    badge: "Small Batch",
  },
  {
    id: "15",
    name: "Sesame Sourdough Bagel",
    category: "Sourdough Bagels",
    price: "$3 each",
    cardAsset: "KTK_Product_Card_15_Sesame_Bagel.png",
    description: "Toasted sesame seeds on a chewy sourdough bagel.",
    badge: "Small Batch",
  },
  {
    id: "16",
    name: "Poppy Sourdough Bagel",
    category: "Sourdough Bagels",
    price: "$3 each",
    cardAsset: "KTK_Product_Card_16_Poppy_Bagel.png",
    description: "Classic poppy seed sourdough bagel.",
    badge: "Small Batch",
  },
];

export const K2K_CATEGORIES: K2KProductCategory[] = [
  "Sourdough Bread",
  "Sourdough Cookies",
  "Sourdough Bagels",
];

export function getProductsByCategory(category: K2KProductCategory) {
  return K2K_PRODUCTS.filter((p) => p.category === category);
}
