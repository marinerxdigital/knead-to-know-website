/**
 * Verified menu catalog for Interactive Menu Builder.
 * Sourced from src/lib/products.ts — do not invent items or prices.
 */

import { ALL_BAGELS, ALL_BREADS, ALL_COOKIES, type Product } from "@/lib/products";

export type MenuCategory = "bread" | "cookies" | "bagels";

export type MenuProduct = {
  id: string;
  name: string;
  category: MenuCategory;
  displayCategory: string;
  price: number;
  priceLabel: string;
  unitLabel: string;
  description: string;
  ingredients?: string;
  image?: string;
  cardAsset: string;
};

const DISPLAY_CATEGORY: Record<MenuCategory, string> = {
  bread: "Sourdough Bread",
  cookies: "Sourdough Cookies",
  bagels: "Sourdough Bagels",
};

const UNIT_LABEL: Record<MenuCategory, string> = {
  bread: "loaf",
  cookies: "order of 2 cookies",
  bagels: "bagel",
};

function parsePrice(product: Product): number {
  if (product.category === "cookies") return 5;
  if (product.category === "bagels") return 3;
  const match = product.price?.match(/\$(\d+)/);
  return match ? Number(match[1]) : 0;
}

function toMenuProduct(product: Product): MenuProduct | null {
  if (
    product.category !== "bread" &&
    product.category !== "cookies" &&
    product.category !== "bagels"
  ) {
    return null;
  }
  const category = product.category;
  return {
    id: product.id,
    name: product.name,
    category,
    displayCategory: DISPLAY_CATEGORY[category],
    price: parsePrice(product),
    priceLabel: product.price ?? "",
    unitLabel: UNIT_LABEL[category],
    description: product.description,
    ingredients: product.ingredients,
    image: product.photo,
    cardAsset: product.cardAsset,
  };
}

export const MENU_PRODUCTS: MenuProduct[] = [...ALL_BREADS, ...ALL_COOKIES, ...ALL_BAGELS]
  .map(toMenuProduct)
  .filter((p): p is MenuProduct => p !== null);

export const MENU_BY_ID = Object.fromEntries(MENU_PRODUCTS.map((p) => [p.id, p])) as Record<
  string,
  MenuProduct
>;

export const MENU_CATEGORIES: { id: MenuCategory | "all"; label: string; icon: string }[] = [
  { id: "all", label: "All", icon: "/assets/knead-to-know/icons/Knead_To_Know_Wheat_Icon.png" },
  {
    id: "bread",
    label: "Sourdough Bread",
    icon: "/assets/knead-to-know/icons/Knead_To_Know_Bread_Icon.png",
  },
  {
    id: "cookies",
    label: "Sourdough Cookies",
    icon: "/assets/knead-to-know/icons/Knead_To_Know_Cookie_Icon.png",
  },
  {
    id: "bagels",
    label: "Sourdough Bagels",
    icon: "/assets/knead-to-know/icons/Knead_To_Know_Dough_Swirl_Icon.png",
  },
];
