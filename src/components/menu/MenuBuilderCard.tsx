import { useState } from "react";
import type { MenuProduct } from "@/data/menu";
import { QuantityControl } from "@/components/menu/QuantityControl";
import { cn } from "@/lib/utils";

const CATEGORY_ICONS: Record<MenuProduct["category"], string> = {
  bread: "/assets/knead-to-know/icons/Knead_To_Know_Bread_Icon.png",
  cookies: "/assets/knead-to-know/icons/Knead_To_Know_Cookie_Icon.png",
  bagels: "/assets/knead-to-know/icons/Knead_To_Know_Dough_Swirl_Icon.png",
};

export function MenuBuilderCard({
  product,
  onOpenDetail,
  onAdd,
  trayQuantity = 0,
  justAdded = false,
}: {
  product: MenuProduct;
  onOpenDetail: () => void;
  onAdd: (quantity: number) => void;
  trayQuantity?: number;
  justAdded?: boolean;
}) {
  const [qty, setQty] = useState(1);

  return (
    <article
      className={cn(
        "k2k-product-card k2k-hover-lift group flex h-full flex-col overflow-hidden transition duration-300",
        justAdded && "k2k-tray-add-pulse",
      )}
    >
      <button
        type="button"
        onClick={onOpenDetail}
        className="flex flex-1 flex-col text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-k2k-blue focus-visible:ring-offset-2"
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-k2k-black bg-[#f8fafc]">
          <span className="absolute left-3 top-3 z-10 inline-flex items-center gap-1 rounded-full border border-k2k-black bg-white/95 px-2 py-1 text-[8px] font-medium uppercase tracking-[0.14em] text-k2k-navy">
            <img src={CATEGORY_ICONS[product.category]} alt="" className="h-3 w-3" aria-hidden />
            {product.displayCategory}
          </span>
          {product.image ? (
            <img
              src={product.image}
              alt={`${product.name} from Knead To Know`}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              loading="lazy"
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <img
                src={CATEGORY_ICONS[product.category]}
                alt=""
                className="h-12 w-12 opacity-50"
                aria-hidden
              />
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col px-1 pt-4">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-display text-lg leading-tight text-ink">{product.name}</h3>
            <span className="shrink-0 rounded-full border border-k2k-black bg-k2k-blue/8 px-2.5 py-0.5 text-xs font-medium tabular-nums text-k2k-navy">
              {product.priceLabel}
            </span>
          </div>
          <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.14em] text-k2k-blue/80">
            Freshly baked to order
          </p>
          {product.description && (
            <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{product.description}</p>
          )}
        </div>
      </button>

      <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-k2k-black/10 px-1 pb-1 pt-4">
        <QuantityControl value={qty} onChange={setQty} min={1} label={product.name} compact />
        <button
          type="button"
          onClick={() => onAdd(qty)}
          className="k2k-button k2k-button-primary !min-h-9 !px-4 !text-[9px] !tracking-[0.14em]"
        >
          Add to Pre-Order
        </button>
      </div>

      {trayQuantity > 0 && (
        <p className="px-1 pb-3 text-center text-[10px] font-medium uppercase tracking-wider text-k2k-blue">
          {trayQuantity} in tray
        </p>
      )}
    </article>
  );
}
