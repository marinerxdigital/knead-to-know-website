import type { MenuProduct } from "@/data/menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { QuantityControl } from "@/components/menu/QuantityControl";
import { useState } from "react";

export function ProductDetailDialog({
  product,
  open,
  onOpenChange,
  onAdd,
}: {
  product: MenuProduct | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAdd: (quantity: number) => void;
}) {
  const [qty, setQty] = useState(1);

  if (!product) return null;

  const handleAdd = () => {
    onAdd(qty);
    setQty(1);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] max-w-lg overflow-y-auto rounded-[1.75rem] border border-k2k-black p-0">
        {product.image && (
          <div className="aspect-[16/10] overflow-hidden rounded-t-[1.65rem] border-b border-k2k-black/10">
            <img
              src={product.image}
              alt={`${product.name} from Knead To Know`}
              className="h-full w-full object-cover"
            />
          </div>
        )}
        <div className="p-6 sm:p-8">
          <DialogHeader>
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-k2k-blue">
              {product.displayCategory}
            </p>
            <DialogTitle className="font-display text-2xl text-ink">{product.name}</DialogTitle>
            <DialogDescription className="text-base text-muted-foreground">
              {product.description || `${product.priceLabel} · ${product.unitLabel}`}
            </DialogDescription>
          </DialogHeader>

          {product.ingredients && (
            <p className="mt-4 text-sm leading-relaxed text-k2k-navy/75">
              <span className="font-medium uppercase tracking-[0.1em] text-k2k-navy">
                Ingredients:{" "}
              </span>
              {product.ingredients}
            </p>
          )}

          <div className="mt-6 flex items-center justify-between rounded-2xl border border-k2k-black bg-k2k-cream/50 px-4 py-3">
            <span className="font-display text-xl tabular-nums text-ink">{product.priceLabel}</span>
            <span className="text-xs uppercase tracking-wider text-muted-foreground">
              per {product.unitLabel}
            </span>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <QuantityControl value={qty} onChange={setQty} min={1} label={product.name} />
            <button
              type="button"
              onClick={handleAdd}
              className="k2k-button k2k-button-primary !min-h-11 flex-1 sm:flex-none sm:!px-8"
            >
              Add to Pre-Order
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
