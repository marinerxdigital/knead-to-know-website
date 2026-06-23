import { useCallback, useMemo, useReducer, useState } from "react";
import { Phone, Search } from "lucide-react";
import { MENU_CATEGORIES, MENU_PRODUCTS, type MenuCategory } from "@/data/menu";
import { MenuBuilderCard } from "@/components/menu/MenuBuilderCard";
import { ProductDetailDialog } from "@/components/menu/ProductDetailDialog";
import { PreOrderTrayMobile, PreOrderTraySidebar } from "@/components/menu/PreOrderTray";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { trayReducer, type TrayLine } from "@/lib/preorder-tray";
import { BUSINESS } from "@/lib/business";
import { cn } from "@/lib/utils";
import type { MenuProduct } from "@/data/menu";

type CategoryFilter = MenuCategory | "all";

function matchesQuery(product: MenuProduct, query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  return (
    product.name.toLowerCase().includes(q) ||
    product.displayCategory.toLowerCase().includes(q) ||
    product.description.toLowerCase().includes(q) ||
    (product.ingredients?.toLowerCase().includes(q) ?? false)
  );
}

export function InteractiveMenuBuilder() {
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [query, setQuery] = useState("");
  const [trayLines, dispatch] = useReducer(trayReducer, [] as TrayLine[]);
  const [detailProduct, setDetailProduct] = useState<MenuProduct | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);
  const [mobileTrayOpen, setMobileTrayOpen] = useState(false);
  const [lastAddedId, setLastAddedId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return MENU_PRODUCTS.filter(
      (p) => matchesQuery(p, query) && (category === "all" || p.category === category),
    );
  }, [query, category]);

  const trayQtyMap = useMemo(() => {
    const map: Record<string, number> = {};
    for (const line of trayLines) {
      map[line.productId] = line.quantity;
    }
    return map;
  }, [trayLines]);

  const handleAdd = useCallback((productId: string, quantity: number) => {
    dispatch({ type: "ADD", productId, quantity });
    setLastAddedId(productId);
    window.setTimeout(() => setLastAddedId(null), 600);
    setMobileTrayOpen(false);
  }, []);

  const handleSetQty = useCallback((productId: string, quantity: number) => {
    dispatch({ type: "SET", productId, quantity });
  }, []);

  const handleRemove = useCallback((productId: string) => {
    dispatch({ type: "REMOVE", productId });
  }, []);

  const handleClear = useCallback(() => {
    dispatch({ type: "CLEAR" });
    setMobileTrayOpen(false);
  }, []);

  const openDetail = (product: MenuProduct) => {
    setDetailProduct(product);
    setDetailOpen(true);
  };

  return (
    <>
      {/* Top call bar */}
      <div className="border-b border-k2k-black/10 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 py-3 sm:px-8">
          <p className="text-sm text-ink">
            <span className="font-medium">{BUSINESS.orderingModel}</span>
            <span className="text-muted-foreground"> · Tap items to build your tray</span>
          </p>
          <a
            href={BUSINESS.phoneTel}
            className="k2k-button k2k-button-primary inline-flex !min-h-11 items-center gap-2 !px-5 !text-xs"
          >
            <Phone className="h-4 w-4" aria-hidden />
            Call Wendy
          </a>
        </div>
      </div>

      {/* Search + category */}
      <div className="border-b border-k2k-black/10 bg-k2k-cream">
        <div className="mx-auto max-w-7xl px-5 py-6 sm:px-8">
          <div className="k2k-surface k2k-accent-rail rounded-[1.75rem] border-t-2 border-t-k2k-blue/30 p-5 sm:p-6">
            <div className="relative mb-5 max-w-md">
              <Search
                className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-k2k-navy/50"
                aria-hidden
              />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search breads, cookies, bagels…"
                aria-label="Search menu"
                className="h-11 min-h-[44px] w-full rounded-full border border-k2k-black bg-white pl-11 pr-4 text-sm text-ink placeholder:text-muted-foreground/70 transition focus:border-k2k-blue focus:outline-none focus:ring-2 focus:ring-k2k-blue/25 focus-visible:border-k2k-blue focus-visible:ring-2 focus-visible:ring-k2k-blue/30"
              />
            </div>

            <div
              className="flex min-w-0 flex-wrap gap-1.5 sm:gap-2"
              role="tablist"
              aria-label="Menu categories"
            >
              {MENU_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={category === cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={cn(
                    "group inline-flex min-h-[44px] shrink-0 items-center gap-1.5 rounded-full border px-3 py-2 text-[10px] font-medium uppercase tracking-[0.1em] transition duration-300 sm:px-4 sm:text-xs",
                    category === cat.id
                      ? "border-k2k-black bg-k2k-blue text-white shadow-sm"
                      : "border-k2k-black bg-white text-k2k-navy hover:bg-k2k-blue/5",
                  )}
                >
                  <img
                    src={cat.icon}
                    alt=""
                    className="h-3.5 w-3.5 object-contain transition group-hover:scale-110"
                    aria-hidden
                  />
                  {cat.label}
                </button>
              ))}
            </div>

            {query && (
              <p className="mt-4 border-t border-k2k-black/10 pt-4 text-sm text-ink">
                {filtered.length} result{filtered.length === 1 ? "" : "s"} for &ldquo;{query}
                &rdquo;
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Menu grid + tray */}
      <div className="bg-white pb-[calc(5.5rem+env(safe-area-inset-bottom))] lg:pb-16">
        <div className="mx-auto grid max-w-7xl items-start gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,320px)] lg:gap-10 xl:grid-cols-[minmax(0,1fr)_minmax(300px,340px)]">
          <div>
            {filtered.length === 0 ? (
              <div className="k2k-surface rounded-[2rem] border-dashed px-8 py-16 text-center">
                <p className="font-display text-2xl text-ink">No bakes match your search</p>
                <p className="mt-2 text-muted-foreground">Try a different term or category.</p>
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    setCategory("all");
                  }}
                  className="k2k-button k2k-button-outline mt-6 inline-flex"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div
                className="grid auto-rows-fr items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-3"
                role="tabpanel"
              >
                {filtered.map((product, index) => (
                  <ScrollReveal
                    key={product.id}
                    delay={Math.min(index % 4, 3) as 0 | 1 | 2 | 3}
                    className="h-full"
                  >
                    <MenuBuilderCard
                      product={product}
                      onOpenDetail={() => openDetail(product)}
                      onAdd={(qty) => handleAdd(product.id, qty)}
                      trayQuantity={trayQtyMap[product.id] ?? 0}
                      justAdded={lastAddedId === product.id}
                    />
                  </ScrollReveal>
                ))}
              </div>
            )}
          </div>

          <PreOrderTraySidebar
            lines={trayLines}
            onSetQty={handleSetQty}
            onRemove={handleRemove}
            onClear={handleClear}
          />
        </div>
      </div>

      <PreOrderTrayMobile
        lines={trayLines}
        onSetQty={handleSetQty}
        onRemove={handleRemove}
        onClear={handleClear}
        expanded={mobileTrayOpen}
        onToggle={() => setMobileTrayOpen((v) => !v)}
      />

      <ProductDetailDialog
        product={detailProduct}
        open={detailOpen}
        onOpenChange={setDetailOpen}
        onAdd={(qty) => {
          if (detailProduct) handleAdd(detailProduct.id, qty);
        }}
      />
    </>
  );
}
