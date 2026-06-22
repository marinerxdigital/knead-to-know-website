import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/products";

interface K2KProductCardProps {
  product: Product;
  className?: string;
  showCta?: boolean;
}

const CATEGORY_LABELS: Record<Product["category"], string> = {
  bread: "Sourdough Bread",
  cookies: "Sourdough Cookies",
  bagels: "Sourdough Bagels",
  pastries: "Pastries",
  "bakery-boxes": "Bakery Boxes",
  custom: "Custom Orders",
};

export function K2KProductCard({ product, className, showCta = true }: K2KProductCardProps) {
  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-3xl border border-border/40 bg-white p-3 shadow-sm transition hover:shadow-md",
        className,
      )}
    >
      <div className="relative overflow-hidden rounded-2xl bg-[#f8fafc]">
        <img
          src={product.cardAsset}
          alt={`${product.name} - Knead To Know product card`}
          className="h-auto w-full object-contain"
          loading="lazy"
        />
      </div>

      <div className="mt-4 flex flex-1 flex-col px-1 pb-1">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-display text-xl leading-tight text-ink">{product.name}</h3>
            <p className="mt-0.5 text-xs uppercase tracking-[0.12em] text-ink/60">
              {CATEGORY_LABELS[product.category]}
            </p>
          </div>
          <div className="text-right">
            <p className="font-medium tabular-nums text-k2k-blue">{product.price}</p>
          </div>
        </div>

        {product.description && (
          <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {product.description}
          </p>
        )}

        <div className="mt-auto flex items-center justify-between pt-4">
          {product.preorderAvailable && (
            <span className="inline-block rounded-full bg-k2k-blue/10 px-3 py-0.5 text-[10px] font-medium uppercase tracking-widest text-k2k-blue">
              Pre-Order
            </span>
          )}

          {showCta && (
            <Link
              to="/custom-orders"
              search={{ product: product.id }}
              className="k2k-button k2k-button-outline min-h-9 px-4 py-1.5 text-xs text-k2k-blue hover:bg-k2k-blue/5"
            >
              Pre-Order
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

export default K2KProductCard;