import { useState } from "react";
import type { MenuProduct } from "@/data/menu";
import { KTK_CATEGORY_ICONS, KTK_DECOR } from "@/lib/design-assets";
import { QuantityControl } from "@/components/menu/QuantityControl";
import { cn } from "@/lib/utils";

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
        "k2k-product-card k2k-hover-lift group flex h-full min-h-0 flex-col overflow-hidden p-4 transition duration-300 sm:p-5",
        justAdded && "k2k-tray-add-pulse",
      )}
    >
      <button
        type="button"
        onClick={onOpenDetail}
        className="flex flex-1 flex-col text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-k2k-blue focus-visible:ring-offset-2"
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-k2k-black bg-[#f8fafc]">
          <span className="absolute left-3 top-3 z-10 inline-flex items-center gap-1 rounded-full border border-k2k-black bg-white/95 px-2 py-1 text-xs font-medium uppercase tracking-[0.14em] text-k2k-navy">
            <img
              src={KTK_CATEGORY_ICONS[product.category]}
              alt=""
              className="h-3 w-3"
              aria-hidden
            />
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
            <div className="flex h-full items-center justify-center p-4">
              <img
                src={KTK_DECOR.productPlaceholderPrimary}
                alt=""
                className="h-full w-full object-contain"
                loading="lazy"
                aria-hidden
              />
            </div>
          )}
        </div>

        <div className="flex min-h-[7.5rem] flex-1 flex-col pt-4">
          <div className="flex items-start justify-between gap-3">
            <h3 className="min-w-0 flex-1 font-display text-lg leading-tight text-ink">
              {product.name}
            </h3>
            <span className="mt-0.5 shrink-0 self-start rounded-full border border-k2k-black bg-k2k-blue/8 px-2.5 py-1 text-xs font-medium leading-none tabular-nums text-k2k-navy">
              {product.priceLabel}
            </span>
          </div>
          <p className="mt-2 text-xs font-medium uppercase tracking-[0.14em] text-k2k-navy">
            Freshly baked to order
          </p>
          {product.description ? (
            <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-k2k-navy/90">
              {product.description}
            </p>
          ) : (
            <div className="mt-2 flex-1" aria-hidden />
          )}
        </div>
      </button>

      <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-k2k-black/10 pt-4">
        <QuantityControl value={qty} onChange={setQty} min={1} label={product.name} compact />
        <button
          type="button"
          onClick={() => onAdd(qty)}
          className="k2k-button k2k-button-primary !min-h-11 !px-4 !text-[10px] !tracking-[0.12em]"
        >
          Add to Pre-Order
        </button>
      </div>

      {trayQuantity > 0 && (
        <p className="pb-1 pt-2 text-center text-xs font-medium uppercase tracking-wider text-k2k-navy">
          {trayQuantity} in tray
        </p>
      )}
    </article>
  );
}