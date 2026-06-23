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
  bread: "Sourdough Bread",
  cookies: "Sourdough Cookies",
  bagels: "Sourdough Bagels",
  pastries: "Pastries",
  "bakery-boxes": "Bakery Boxes",
  custom: "Custom Orders",
};

const CATEGORY_ICONS: Record<Product["category"], string> = {
  bread: "/assets/knead-to-know/icons/Knead_To_Know_Bread_Icon.png",
  cookies: "/assets/knead-to-know/icons/Knead_To_Know_Cookie_Icon.png",
  bagels: "/assets/knead-to-know/icons/Knead_To_Know_Dough_Swirl_Icon.png",
  pastries: "/assets/knead-to-know/icons/Knead_To_Know_Dough_Swirl_Icon.png",
  "bakery-boxes": "/assets/knead-to-know/icons/Knead_To_Know_Gift_Box_Icon.png",
  custom: "/assets/knead-to-know/icons/Knead_To_Know_Calendar_Preorder_Icon.png",
};

function ProductPhotoArea({ product }: { product: Product }) {
  if (product.photo) {
    return (
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#f8fafc]">
        <img
          src={product.photo}
          alt={`${product.name} from Knead To Know home bakery`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div
          className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-k2k-blue/10"
          aria-hidden
        />
      </div>
    );
  }

  return (
    <div className="k2k-product-photo relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#f8fafc]">
      <div className="absolute inset-0 rounded-2xl border border-k2k-blue/10" aria-hidden />
      <div className="flex h-full flex-col items-center justify-center gap-3 px-6 py-8 text-center">
        <img
          src={CATEGORY_ICONS[product.category]}
          alt=""
          className="h-10 w-10 object-contain opacity-70"
          aria-hidden
        />
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-k2k-blue/60">
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
}: K2KProductCardProps) {
  const body = (
    <>
      <ProductPhotoArea product={product} />

      <div className="flex flex-1 flex-col px-1 pt-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="font-display text-xl leading-tight text-ink">{product.name}</h3>
            <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.16em] text-k2k-blue/80">
              {CATEGORY_LABELS[product.category]}
            </p>
          </div>
          {product.price ? (
            <p className="shrink-0 text-sm font-medium tabular-nums text-k2k-navy">
              {product.price}
            </p>
          ) : (
            <span className="k2k-badge-wheat shrink-0 rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider">
              Ask for pricing
            </span>
          )}
        </div>

        {product.description && (
          <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {product.description}
          </p>
        )}

        <div
          className={cn(
            "mt-auto flex items-center gap-2 pt-5",
            selectable ? "justify-between" : "justify-end",
          )}
        >
          {selectable && selected && (
            <span className="flex items-center gap-1 text-[10px] font-medium uppercase tracking-widest text-k2k-blue">
              <Check className="h-3 w-3" /> Selected
            </span>
          )}

          {showCta && !selectable && (
            <Link
              to="/custom-orders"
              search={{ product: product.id }}
              className="k2k-button k2k-button-outline min-h-9 px-4 py-1.5 text-[10px] text-k2k-blue hover:bg-k2k-blue/5"
            >
              Pre-Order
            </Link>
          )}
        </div>
      </div>
    </>
  );

  if (selectable) {
    return (
      <button
        type="button"
        onClick={onSelect}
        className={cn(
          "k2k-product-card group flex w-full flex-col p-4 text-left transition",
          selected && "k2k-product-card-selected",
          className,
        )}
      >
        {body}
      </button>
    );
  }

  return (
    <article className={cn("k2k-product-card group flex flex-col p-4 transition", className)}>
      {body}
    </article>
  );
}

export default K2KProductCard;
