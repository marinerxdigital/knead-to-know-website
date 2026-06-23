import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Search, Sparkles } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/sections/Section";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { K2KProductCard } from "@/components/ui/K2KProductCard";
import { ALL_BREADS, ALL_COOKIES, ALL_BAGELS, BAKERY_PHOTOS, CATEGORY_PRICING, PRODUCTS } from "@/lib/products";
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
const WHEAT_ICON = "/assets/knead-to-know/icons/Knead_To_Know_Wheat_Icon.png";

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

function WheatAccent() {
  return (
    <svg width="22" height="10" viewBox="0 0 22 10" fill="none" className="text-wheat/80" aria-hidden>
      <path
        d="M1 7c4-7 9-7 11-2 2-5 7-5 9 1"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

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
  const [activeSection, setActiveSection] = useState<string>(CARD_SECTIONS[0].id);

  const filteredSections = useMemo(() => {
    return CARD_SECTIONS.map((section) => ({
      ...section,
      items: section.items.filter(
        (p) => matchesQuery(p, query) && (category === "all" || p.category === category),
      ),
    })).filter((s) => s.items.length > 0);
  }, [query, category]);

  const totalResults = filteredSections.reduce((n, s) => n + s.items.length, 0);

  useEffect(() => {
    const sectionIds = filteredSections.map((s) => s.id);
    if (sectionIds.length === 0) return;

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-18% 0px -58% 0px", threshold: [0, 0.15, 0.35, 0.6] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [filteredSections]);

  return (
    <>
      <PageHero
        eyebrow="Daniel Island, SC"
        title="Our Menu"
        intro="Sourdough breads, cookies, and bagels — every bake made fresh to order in small batches by Wendy Mercado."
        image={BAKERY_PHOTOS.chocolateChipCookies}
        imageAlt="Chocolate chip sourdough cookies from Knead To Know"
      >
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-k2k-blue px-5 py-2.5 text-sm font-medium text-white shadow-[0_12px_28px_-10px_rgba(79,126,168,0.55)] ring-1 ring-k2k-navy/20">
            <Sparkles className="h-4 w-4 text-wheat" aria-hidden />
            {BUSINESS.orderingModel}
          </span>
          <span className="inline-flex rounded-full border border-k2k-blue/20 bg-white/80 px-4 py-2 text-sm text-k2k-navy/80 ring-1 ring-k2k-blue/8 backdrop-blur-sm">
            {BUSINESS.fulfillment}
          </span>
        </div>
      </PageHero>

      <div className="border-b border-border/30 bg-white">
        <img
          src={BANNER_PATH}
          alt="Knead To Know bakery announcement and pre-order information"
          className="mx-auto h-auto w-full max-w-7xl"
        />
      </div>

      <div className="border-b border-k2k-blue/10 bg-[#f8f4ed]">
        <div className="mx-auto max-w-7xl px-5 py-6 sm:px-8 sm:py-8">
          <div className="k2k-surface rounded-[1.75rem] p-5 sm:p-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
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
                  className="h-12 w-full rounded-full border border-k2k-blue/15 bg-[#f8f4ed]/60 pl-11 pr-4 text-sm shadow-sm transition focus:border-k2k-blue focus:outline-none focus:ring-2 focus:ring-k2k-blue/15"
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
                        ? "border-k2k-blue bg-k2k-blue text-white shadow-sm"
                        : "border-k2k-blue/15 bg-white text-k2k-navy hover:border-k2k-blue/35",
                    )}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
            {query && (
              <p className="mt-4 border-t border-k2k-blue/8 pt-4 text-sm text-muted-foreground">
                {totalResults} result{totalResults === 1 ? "" : "s"} for &ldquo;{query}&rdquo;
              </p>
            )}
          </div>
        </div>
      </div>

      {filteredSections.length > 0 && (
        <nav
          aria-label="Menu categories"
          className="sticky top-[4.25rem] z-20 border-b border-k2k-blue/10 bg-white/95 backdrop-blur-md"
        >
          <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 py-4 sm:px-8">
            {NAV_ITEMS.filter((item) => filteredSections.some((s) => s.id === item.id)).map(
              (item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-current={activeSection === item.id ? "true" : undefined}
                  className={cn(
                    "shrink-0 rounded-full border px-5 py-2 text-xs font-medium uppercase tracking-[0.14em] transition",
                    activeSection === item.id
                      ? "border-k2k-blue bg-k2k-blue text-white shadow-sm"
                      : "border-k2k-blue/15 text-k2k-navy hover:border-k2k-blue/35 hover:bg-k2k-blue/5",
                  )}
                >
                  {item.label}
                </a>
              ),
            )}
          </div>
        </nav>
      )}

      <Section bg="white" className="!pt-16" reveal={false}>
        {filteredSections.length === 0 ? (
          <div className="k2k-surface rounded-[2rem] border border-dashed border-k2k-blue/25 bg-[#f8f4ed]/50 px-8 py-16 text-center">
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
            {filteredSections.map((section, sectionIndex) => (
              <ScrollReveal key={section.title} id={section.id} className="scroll-mt-32">
                <header className="mb-10 flex flex-wrap items-end justify-between gap-6 border-b border-k2k-blue/10 pb-6">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-3">
                      <img
                        src={WHEAT_ICON}
                        alt=""
                        className="h-5 w-5 object-contain opacity-70"
                        aria-hidden
                      />
                      <p className="k2k-editorial-eyebrow">Category</p>
                      <WheatAccent />
                    </div>
                    <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl lg:text-[2.75rem]">
                      {section.title}
                    </h2>
                    {section.categoryPricing && (
                      <p className="mt-2 text-sm font-medium text-k2k-navy/70">
                        {section.categoryPricing}
                      </p>
                    )}
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-k2k-blue/8 px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-k2k-navy ring-1 ring-k2k-blue/12">
                    <span className="h-1.5 w-1.5 rounded-full bg-wheat" aria-hidden />
                    {section.items.length} {section.items.length === 1 ? "bake" : "bakes"}
                  </span>
                </header>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {section.items.map((product, index) => (
                    <ScrollReveal
                      key={product.id}
                      delay={Math.min(index % 4, 4) as 0 | 1 | 2 | 3 | 4}
                      className={cn(
                        sectionIndex === 0 && index === 0 && "sm:col-span-2 lg:col-span-2",
                      )}
                    >
                      <K2KProductCard
                        product={product}
                        className="transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-36px_rgba(31,52,71,0.35)]"
                      />
                    </ScrollReveal>
                  ))}
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}
      </Section>

      <Section bg="beige" variant="editorial">
        <div className="k2k-surface relative mx-auto max-w-4xl overflow-hidden rounded-[2.25rem] p-10 sm:p-14">
          <div
            className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border border-k2k-blue/10"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-16 -left-10 h-32 w-32 rounded-full bg-k2k-harbor/10"
            aria-hidden
          />

          <div className="relative text-center">
            <div className="mx-auto mb-6 flex items-center justify-center gap-3" aria-hidden>
              <span className="h-px w-10 bg-k2k-blue/20" />
              <WheatAccent />
              <span className="h-px w-10 bg-k2k-blue/20" />
            </div>
            <SectionHeading
              align="center"
              decorative
              eyebrow="Ready to order"
              title="Pre-order your favorites"
              intro="Call, text, or submit a request — Wendy confirms availability and bakes fresh for your pickup on Daniel Island."
            />
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link
                to="/custom-orders"
                className="k2k-button k2k-button-primary inline-flex items-center gap-2 px-8 shadow-[0_16px_40px_-12px_rgba(79,126,168,0.55)]"
              >
                Pre-Order Now
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={BUSINESS.phoneTel}
                className="k2k-button k2k-button-outline inline-flex px-8"
              >
                {BUSINESS.phone}
              </a>
              <Link to="/catering" className="k2k-button k2k-button-outline inline-flex px-8">
                Catering &amp; Events
              </Link>
            </div>
            <p className="mt-6 text-xs font-medium uppercase tracking-[0.18em] text-k2k-blue/70">
              {BUSINESS.orderingModel} · {BUSINESS.fulfillment}
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}