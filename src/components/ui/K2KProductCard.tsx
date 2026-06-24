import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { KTK_CATEGORY_ICONS, KTK_DECOR, KTK_ICONS } from "@/lib/design-assets";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/products";

interface K2KProductCardProps {
  product: Product;
  className?: string;
  showCta?: boolean;
  selectable?: boolean;
  selected?: boolean;
  onSelect?: () => void;
  /** Tighter layout for carousel and dense grids */
  compact?: boolean;
}

const CATEGORY_LABELS: Record<Product["category"], string> = {
  bread: "Bread",
  cookies: "Cookies",
  bagels: "Bagels",
  pastries: "Pastries",
  "bakery-boxes": "Bakery Box",
  custom: "Custom",
};

function CategoryIconBadge({ product }: { product: Product }) {
  return (
    <span className="absolute left-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full border border-k2k-black bg-white/95 px-2.5 py-1 shadow-sm backdrop-blur-sm">
      <img
        src={KTK_CATEGORY_ICONS[product.category]}
        alt=""
        className="k2k-icon-hover h-4 w-4 object-contain"
        aria-hidden
      />
      <span className="text-xs font-medium uppercase tracking-[0.16em] text-k2k-navy">
        {CATEGORY_LABELS[product.category]}
      </span>
    </span>
  );
}

function ProductPhotoArea({ product }: { product: Product }) {
  if (product.photo) {
    return (
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-k2k-black bg-[#f8fafc]">
        <CategoryIconBadge product={product} />
        <img
          src={product.photo}
          alt={`${product.name} from Knead To Know home bakery`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className="k2k-product-photo relative aspect-square overflow-hidden rounded-2xl border border-k2k-black bg-gradient-to-br from-[#f8fafc] via-white to-[#f0f5fa]">
      <CategoryIconBadge product={product} />
      <div className="flex h-full items-center justify-center p-4">
        <img
          src={KTK_DECOR.productPlaceholderPrimary}
          alt=""
          className="h-full w-full object-contain"
          loading="lazy"
          aria-hidden
        />
      </div>
      <div className="absolute inset-x-0 bottom-4 flex flex-col items-center gap-1.5 text-center">
        <img
          src={KTK_ICONS.wheat}
          alt=""
          className="k2k-icon-hover h-4 w-4 opacity-40"
          aria-hidden
        />
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-k2k-navy/90">
          Photo coming soon
        </p>
      </div>
    </div>
  );
}

export function K2KProductCard({
  product,
  className,
  showCta = true,
  selectable = false,
  selected = false,
  onSelect,
  compact = false,
}: K2KProductCardProps) {
  const body = (
    <>
      <ProductPhotoArea product={product} />

      <div
        className={cn(
          "flex flex-1 flex-col px-1",
          compact ? "min-h-[5.5rem] pt-3" : "min-h-[7rem] pt-5",
        )}
      >
        <div className="flex items-start justify-between gap-2 sm:gap-3">
          <h3
            className={cn(
              "min-w-0 flex-1 font-display leading-[1.15] tracking-tight text-ink",
              compact ? "line-clamp-2 text-base" : "text-xl",
            )}
          >
            {product.name}
          </h3>
          {product.price ? (
            <span
              className={cn(
                "mt-0.5 shrink-0 self-start rounded-full border border-k2k-black bg-k2k-blue/8 font-medium leading-none tabular-nums text-k2k-navy",
                compact ? "px-2 py-0.5 text-xs" : "px-2.5 py-1 text-xs sm:px-3 sm:text-sm",
              )}
            >
              {product.price}
            </span>
          ) : (
            <span className="k2k-badge-wheat mt-0.5 shrink-0 self-start rounded-full border border-k2k-black px-2.5 py-1 text-xs font-medium uppercase tracking-wider">
              Ask for pricing
            </span>
          )}
        </div>

        {product.description && (
          <p
            className={cn(
              "line-clamp-2 leading-relaxed text-k2k-navy/90",
              compact ? "mt-2 text-xs" : "mt-3 text-sm",
            )}
          >
            {product.description}
          </p>
        )}

        {product.ingredients && !compact && (
          <p className="mt-2.5 line-clamp-2 text-xs leading-relaxed text-k2k-navy/90">
            <span className="font-medium uppercase tracking-[0.12em] text-k2k-navy">
              Ingredients:{" "}
            </span>
            {product.ingredients}
          </p>
        )}

        <div
          className={cn(
            "mt-auto flex items-center gap-2 border-t border-k2k-black/10",
            compact ? "pt-3" : "pt-5",
            selectable ? "justify-between" : "justify-end",
          )}
        >
          {selectable && selected && (
            <span className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-widest text-k2k-navy">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-k2k-blue text-white">
                <Check className="h-2.5 w-2.5" strokeWidth={3} />
              </span>
              Selected
            </span>
          )}

          {showCta && !selectable && (
            <Link
              to="/custom-orders"
              search={{ product: product.id }}
              className="k2k-button k2k-button-outline !min-h-9 !px-5 !py-1.5 !text-[10px]"
            >
              Pre-Order
            </Link>
          )}
        </div>
      </div>
    </>
  );

  const cardClass = cn(
    "k2k-product-card k2k-hover-lift group flex flex-col p-5 transition-all duration-300 ease-out",
    className,
  );

  if (selectable) {
    return (
      <button
        type="button"
        onClick={onSelect}
        className={cn(cardClass, "w-full text-left", selected && "k2k-product-card-selected")}
      >
        {body}
      </button>
    );
  }

  return <article className={cardClass}>{body}</article>;
}

export default K2KProductCard;
