import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/products";

interface K2KProductCardProps {
  product: Product;
  className?: string;
  showCta?: boolean;
  selectable?: boolean;
  selected?: boolean;
  onSelect?: () => void;
}

const CATEGORY_LABELS: Record<Product["category"], string> = {
  bread: "Bread",
  cookies: "Cookies",
  bagels: "Bagels",
  pastries: "Pastries",
  "bakery-boxes": "Bakery Box",
  custom: "Custom",
};

const CATEGORY_ICONS: Record<Product["category"], string> = {
  bread: "/assets/knead-to-know/icons/Knead_To_Know_Bread_Icon.png",
  cookies: "/assets/knead-to-know/icons/Knead_To_Know_Cookie_Icon.png",
  bagels: "/assets/knead-to-know/icons/Knead_To_Know_Dough_Swirl_Icon.png",
  pastries: "/assets/knead-to-know/icons/Knead_To_Know_Dough_Swirl_Icon.png",
  "bakery-boxes": "/assets/knead-to-know/icons/Knead_To_Know_Gift_Box_Icon.png",
  custom: "/assets/knead-to-know/icons/Knead_To_Know_Calendar_Preorder_Icon.png",
};

const WHEAT_ICON = "/assets/knead-to-know/icons/Knead_To_Know_Wheat_Icon.png";

function CategoryIconBadge({ product }: { product: Product }) {
  return (
    <span className="absolute left-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full border border-k2k-black bg-white/95 px-2.5 py-1 shadow-sm backdrop-blur-sm">
      <img
        src={CATEGORY_ICONS[product.category]}
        alt=""
        className="k2k-icon-hover h-4 w-4 object-contain"
        aria-hidden
      />
      <span className="text-[8px] font-medium uppercase tracking-[0.16em] text-k2k-navy">
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
    <div className="k2k-product-photo relative aspect-[4/3] overflow-hidden rounded-2xl border border-k2k-black bg-gradient-to-br from-[#f8fafc] via-white to-[#f0f5fa]">
      <CategoryIconBadge product={product} />
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-wheat/50 to-transparent"
        aria-hidden
      />
      <div className="flex h-full flex-col items-center justify-center gap-4 px-6 py-8 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-k2k-black bg-white shadow-[0_8px_24px_-12px_rgba(17,17,17,0.2)]">
          <img
            src={CATEGORY_ICONS[product.category]}
            alt=""
            className="k2k-icon-hover h-8 w-8 object-contain opacity-80"
            aria-hidden
          />
        </div>
        <div className="space-y-1.5">
          <img
            src={WHEAT_ICON}
            alt=""
            className="k2k-icon-hover mx-auto h-4 w-4 opacity-40"
            aria-hidden
          />
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-k2k-blue/55">
            Photo coming soon
          </p>
        </div>
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
}: K2KProductCardProps) {
  const body = (
    <>
      <ProductPhotoArea product={product} />

      <div className="flex flex-1 flex-col px-1 pt-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="min-w-0 font-display text-xl leading-[1.15] tracking-tight text-ink">
            {product.name}
          </h3>
          {product.price ? (
            <span className="shrink-0 rounded-full border border-k2k-black bg-k2k-blue/8 px-3 py-1 text-sm font-medium tabular-nums text-k2k-navy">
              {product.price}
            </span>
          ) : (
            <span className="k2k-badge-wheat shrink-0 rounded-full border border-k2k-black px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider">
              Ask for pricing
            </span>
          )}
        </div>

        {product.description && (
          <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {product.description}
          </p>
        )}

        {product.ingredients && (
          <p className="mt-2.5 text-[11px] leading-relaxed text-k2k-navy/60">
            <span className="font-medium uppercase tracking-[0.12em] text-k2k-navy/75">
              Ingredients:{" "}
            </span>
            {product.ingredients}
          </p>
        )}

        <div
          className={cn(
            "mt-auto flex items-center gap-2 border-t border-k2k-black/10 pt-5",
            selectable ? "justify-between" : "justify-end",
          )}
        >
          {selectable && selected && (
            <span className="flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-widest text-k2k-blue">
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
