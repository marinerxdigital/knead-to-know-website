import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Section, SectionHeading } from "@/components/sections/Section";
import { K2KProductCard } from "@/components/ui/K2KProductCard";
import { ALL_BREADS, ALL_COOKIES, ALL_BAGELS, CATEGORY_PRICING, PRODUCTS } from "@/lib/products";
import { BUSINESS, SITE_URL } from "@/lib/business";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu | Knead To Know Sweet & Sour | Daniel Island Bakery" },
      {
        name: "description",
        content:
          "Browse our menu of sourdough breads, sourdough cookies, and sourdough bagels with verified pricing. Pre-order fresh bakes from Knead To Know Sweet & Sour on Daniel Island.",
      },
      { property: "og:title", content: "Menu | Knead To Know Sweet & Sour" },
      {
        property: "og:description",
        content:
          "Our full menu: sourdough breads, cookies, and bagels — freshly baked to order on Daniel Island, SC.",
      },
      { property: "og:url", content: `${SITE_URL}/menu` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/menu` }],
  }),
  component: MenuPage,
});

const BANNER_PATH = "/assets/knead-to-know/banners/Knead_To_Know_Promo_Banner_Strip.png";
const BADGE_PATH = "/assets/knead-to-know/badges/Knead_To_Know_Badge_Label_Tag.png";

type CategoryFilter = "all" | "bread" | "cookies" | "bagels";

const CARD_SECTIONS = [
  {
    id: "bread",
    title: "Sourdough Breads",
    items: ALL_BREADS,
    categoryPricing: CATEGORY_PRICING.bread,
  },
  {
    id: "cookies",
    title: "Sourdough Cookies",
    items: ALL_COOKIES,
    categoryPricing: CATEGORY_PRICING.cookies,
  },
  {
    id: "bagels",
    title: "Sourdough Bagels",
    items: ALL_BAGELS,
    categoryPricing: CATEGORY_PRICING.bagels,
  },
] as const;

const NAV_ITEMS = CARD_SECTIONS.map((s) => ({ id: s.id, label: s.title }));

const FILTER_OPTIONS: { id: CategoryFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "bread", label: "Breads" },
  { id: "cookies", label: "Cookies" },
  { id: "bagels", label: "Bagels" },
];

function matchesQuery(product: (typeof PRODUCTS)[number], query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  return (
    product.name.toLowerCase().includes(q) ||
    product.description.toLowerCase().includes(q) ||
    (product.ingredients?.toLowerCase().includes(q) ?? false) ||
    product.category.includes(q)
  );
}

function MenuPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("all");

  const filteredSections = useMemo(() => {
    return CARD_SECTIONS.map((section) => ({
      ...section,
      items: section.items.filter(
        (p) => matchesQuery(p, query) && (category === "all" || p.category === category),
      ),
    })).filter((s) => s.items.length > 0);
  }, [query, category]);

  const totalResults = filteredSections.reduce((n, s) => n + s.items.length, 0);

  return (
    <>
      <section className="relative overflow-hidden border-b border-border/40 bg-[#f8f4ed] pb-14 pt-16 sm:pt-24">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(127,167,199,0.14),transparent_55%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-k2k-blue">
              Daniel Island, SC
            </p>
            <h1 className="mt-3 font-display text-5xl leading-[1.02] text-ink sm:text-6xl">
              Our Menu
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Sourdough breads, cookies, and bagels — freshly baked to order. Pre-orders only.
            </p>
            <p className="mt-3 inline-flex rounded-full bg-k2k-blue/8 px-4 py-1.5 text-sm font-medium text-k2k-navy ring-1 ring-k2k-blue/15">
              {BUSINESS.orderingModel} — everything baked fresh for you
            </p>
          </div>
        </div>
      </section>

      <div className="border-b border-border/30 bg-white">
        <img
          src={BANNER_PATH}
          alt="Knead To Know bakery announcement and pre-order information"
          className="mx-auto h-auto w-full max-w-7xl"
        />
      </div>

      {/* Search + filters */}
      <div className="border-b border-k2k-blue/10 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="relative max-w-md flex-1">
            <Search
              className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-k2k-blue/50"
              aria-hidden
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search breads, cookies, bagels…"
              aria-label="Search menu"
              className="h-12 w-full rounded-full border border-k2k-blue/15 bg-[#f8f4ed]/50 pl-11 pr-4 text-sm shadow-sm transition focus:border-k2k-blue focus:outline-none focus:ring-2 focus:ring-k2k-blue/15"
            />
          </div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
            {FILTER_OPTIONS.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setCategory(opt.id)}
                className={cn(
                  "rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.12em] transition",
                  category === opt.id
                    ? "border-k2k-blue bg-k2k-blue text-white"
                    : "border-k2k-blue/15 text-k2k-navy hover:border-k2k-blue/35",
                )}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
        {query && (
          <p className="mx-auto max-w-7xl px-5 pb-4 text-sm text-muted-foreground sm:px-8">
            {totalResults} result{totalResults === 1 ? "" : "s"} for &ldquo;{query}&rdquo;
          </p>
        )}
      </div>

      <nav
        aria-label="Menu categories"
        className="sticky top-[4.25rem] z-20 border-b border-k2k-blue/10 bg-white/95 backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 py-4 sm:px-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="shrink-0 rounded-full border border-k2k-blue/15 px-5 py-2 text-xs font-medium uppercase tracking-[0.14em] text-k2k-navy transition hover:border-k2k-blue/35 hover:bg-k2k-blue/5"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <Section bg="white" className="!pt-16">
        {filteredSections.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-k2k-blue/25 bg-[#f8f4ed]/50 px-8 py-16 text-center">
            <p className="font-display text-2xl text-ink">No bakes match your search</p>
            <p className="mt-2 text-muted-foreground">Try a different term or clear filters.</p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setCategory("all");
              }}
              className="k2k-button k2k-button-outline mt-6 inline-flex"
            >
              Clear search
            </button>
          </div>
        ) : (
          <div className="space-y-24">
            {filteredSections.map((section) => (
              <div key={section.title} id={section.id} className="scroll-mt-32">
                <div className="mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-k2k-blue/10 pb-6">
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-k2k-blue/70">
                      Category
                    </p>
                    <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl">
                      {section.title}
                    </h2>
                    {section.categoryPricing && (
                      <p className="mt-2 text-sm text-k2k-navy/70">{section.categoryPricing}</p>
                    )}
                  </div>
                  <img src={BADGE_PATH} alt="" className="h-12 w-auto opacity-80" aria-hidden />
                </div>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {section.items.map((product) => (
                    <K2KProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </Section>

      <Section bg="beige">
        <div className="k2k-surface mx-auto max-w-3xl rounded-[2rem] p-10 text-center">
          <SectionHeading
            align="center"
            eyebrow="Ready to order"
            title="Pre-order your favorites"
            intro="Call, text, or submit a request — Wendy confirms availability and bakes fresh for your pickup."
          />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/custom-orders" className="k2k-button k2k-button-primary inline-flex">
              Pre-Order Now
            </Link>
            <a href={BUSINESS.phoneTel} className="k2k-button k2k-button-outline inline-flex">
              {BUSINESS.phone}
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
