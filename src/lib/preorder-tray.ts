import { MENU_BY_ID, type MenuProduct } from "@/data/menu";
import { BUSINESS } from "@/lib/business";

export type TrayLine = {
  productId: string;
  quantity: number;
};

export type TrayLineDetail = TrayLine & {
  product: MenuProduct;
  lineTotal: number;
};

export function lineTotal(product: MenuProduct, quantity: number): number {
  return product.price * quantity;
}

export function formatMoney(amount: number): string {
  return `$${amount.toFixed(amount % 1 === 0 ? 0 : 2)}`;
}

export function trayDetails(lines: TrayLine[]): TrayLineDetail[] {
  return lines
    .filter((l) => l.quantity > 0)
    .map((line) => {
      const product = MENU_BY_ID[line.productId];
      if (!product) return null;
      return {
        ...line,
        product,
        lineTotal: lineTotal(product, line.quantity),
      };
    })
    .filter((l): l is TrayLineDetail => l !== null);
}

export function estimatedTotal(lines: TrayLine[]): number {
  return trayDetails(lines).reduce((sum, l) => sum + l.lineTotal, 0);
}

export function itemCount(lines: TrayLine[]): number {
  return lines.reduce((sum, l) => sum + l.quantity, 0);
}

export function orderDisplayName(product: MenuProduct): string {
  if (product.category === "bread") return `${product.name} Sourdough Bread`;
  if (product.category === "cookies") return `${product.name} Cookies`;
  return `${product.name} Bagel`;
}

export function orderLineLabel(detail: TrayLineDetail): string {
  const { product, quantity, lineTotal: total } = detail;
  if (product.category === "cookies") {
    const cookieCount = quantity * 2;
    return `- ${orderDisplayName(product)} x${quantity} order / ${cookieCount} cookies — ${formatMoney(total)}`;
  }
  return `- ${orderDisplayName(product)} x${quantity} — ${formatMoney(total)}`;
}

export function buildSmsBody(lines: TrayLine[]): string {
  const details = trayDetails(lines);
  const total = estimatedTotal(lines);

  const orderLines = details.map((d) => orderLineLabel(d)).join("\n");

  return [
    `Hi Wendy, I would like to place a pre-order with ${BUSINESS.name}.`,
    "",
    "Order:",
    orderLines,
    "",
    `Estimated Total: ${formatMoney(total)}`,
    "",
    "Name:",
    "Preferred pickup/order timing:",
    "Notes:",
  ].join("\n");
}

export function buildSmsHref(lines: TrayLine[]): string {
  const body = buildSmsBody(lines);
  return `${BUSINESS.phoneSms}?body=${encodeURIComponent(body)}`;
}

export type TrayAction =
  | { type: "ADD"; productId: string; quantity?: number }
  | { type: "SET"; productId: string; quantity: number }
  | { type: "REMOVE"; productId: string }
  | { type: "CLEAR" };

export function trayReducer(state: TrayLine[], action: TrayAction): TrayLine[] {
  switch (action.type) {
    case "ADD": {
      const addQty = Math.max(1, action.quantity ?? 1);
      const existing = state.find((l) => l.productId === action.productId);
      if (existing) {
        return state.map((l) =>
          l.productId === action.productId ? { ...l, quantity: l.quantity + addQty } : l,
        );
      }
      return [...state, { productId: action.productId, quantity: addQty }];
    }
    case "SET": {
      if (action.quantity <= 0) {
        return state.filter((l) => l.productId !== action.productId);
      }
      const existing = state.find((l) => l.productId === action.productId);
      if (existing) {
        return state.map((l) =>
          l.productId === action.productId ? { ...l, quantity: action.quantity } : l,
        );
      }
      return [...state, { productId: action.productId, quantity: action.quantity }];
    }
    case "REMOVE":
      return state.filter((l) => l.productId !== action.productId);
    case "CLEAR":
      return [];
    default:
      return state;
  }
}
