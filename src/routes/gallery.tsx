import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Eye } from "lucide-react";
import { Section } from "@/components/sections/Section";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Lightbox } from "@/components/media/Lightbox";
import { ALL_BREADS, ALL_COOKIES, ALL_BAGELS, BAKERY_PHOTOS } from "@/lib/products";
import { SITE_URL } from "@/lib/business";
import { cn } from "@/lib/utils";
import { KTK_ICONS } from "@/lib/design-assets";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Knead To Know" },
      {
        name: "description",
        content:
          "A visual collection of Knead To Know breads, cookies, bagels, pastries, bakery boxes, and seasonal bakes on Daniel Island.",
      },
      { property: "og:title", content: "Gallery | Knead To Know" },
      {
        property: "og:description",
        content: "Fresh sourdough bakes and custom orders from Knead To Know bakery.",
      },
      { property: "og:url", content: `${SITE_URL}/gallery` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/gallery` }],
  }),
  component: GalleryPage,
});

const GALLERY_CATEGORIES = ["Breads", "Cookies", "Bagels"] as const;

type Category = (typeof GALLERY_CATEGORIES)[number];

type RevealDelay = 0 | 1 | 2 | 3 | 4;

const CATEGORY_ICONS: Record<Category, string> = {
  Breads: KTK_ICONS.bread,
  Cookies: KTK_ICONS.cookie,
  Bagels: KTK_ICONS.dough,
};

function HarborLine({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 180 12"
      fill="none"
      aria-hidden
      className={cn("text-k2k-harbor/60", className)}
    >
      <path
        d="M2 8 C30 2 60 2 90 7 C120 2 150 2 178 8"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

const MASONRY_ASPECTS = [
  "aspect-[4/5]",
  "aspect-[3/4]",
  "aspect-[4/5]",
  "aspect-square",
  "aspect-[5/4]",
] as const;

function getItemsForCategory(cat: Category) {
  if (cat === "Breads") return ALL_BREADS;
  if (cat === "Cookies") return ALL_COOKIES;
  return ALL_BAGELS;
}

function getMasonryAspect(index: number) {
  return MASONRY_ASPECTS[index % MASONRY_ASPECTS.length];
}

function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("Breads");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const currentItems = getItemsForCategory(activeCategory);
  const slides = currentItems
    .filter((p) => p.photo)
    .map((p) => ({
      id: p.id,
      url: p.photo as string,
      alt: `${p.name} from Knead To Know home bakery`,
      caption: p.name,
      category: activeCategory,
    }));

  const photoCount = currentItems.filter((p) => p.photo).length;

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Fresh from the bakery"
        intro="A visual collection of our small-batch sourdough breads, cookies, and bagels — captured fresh from the kitchen. More categories will be added as photos are taken."
        image={BAKERY_PHOTOS.hero}
        imageAlt="Assortment of Knead To Know sourdough breads, cookies, and bagels"
        imagePosition="right"
      />

      <Section bg="beige" reveal={false}>
        <ScrollReveal className="mb-12">
          <div className="k2k-accent-rail k2k-surface rounded-[1.75rem] border-t-2 border-t-k2k-blue/25 pl-5 p-6 sm:pl-7 sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="group flex items-center gap-2.5">
                  <img
                    src={CATEGORY_ICONS[activeCategory]}
                    alt=""
                    className="k2k-breathe h-6 w-6 object-contain transition duration-300 group-hover:scale-110 group-hover:animate-none"
                    loading="lazy"
                    decoding="async"
                    aria-hidden
                  />
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.22em] text-k2k-blue">
                      Browse by category
                    </p>
                    <HarborLine className="mt-2 h-2 w-24" />
                  </div>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-k2k-navy/90">
                  {photoCount} of {currentItems.length} items photographed
                </p>
              </div>
              <div
                className="flex flex-wrap gap-2.5"
                role="tablist"
                aria-label="Gallery categories"
              >
                {GALLERY_CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    role="tab"
                    aria-selected={activeCategory === cat}
                    onClick={() => setActiveCategory(cat)}
                    className={cn(
                      "group k2k-button !min-h-11 !gap-2 !px-5 !py-2 !text-[0.68rem] transition-all duration-300",
                      activeCategory === cat ? "k2k-button-primary" : "k2k-button-outline",
                    )}
                  >
                    <img
                      src={CATEGORY_ICONS[cat]}
                      alt=""
                      className="h-4 w-4 object-contain transition duration-300 group-hover:scale-110"
                      loading="lazy"
                      decoding="async"
                      aria-hidden
                    />
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div
          key={activeCategory}
          className="k2k-menu-filter-results columns-1 gap-4 sm:columns-2 sm:gap-5 lg:columns-3 lg:gap-6 xl:columns-4"
          role="tabpanel"
          aria-label={`${activeCategory} gallery`}
        >
          {currentItems.map((product, i) => {
            const hasPhoto = Boolean(product.photo);
            const revealDelay = (i % 5) as RevealDelay;
            const aspectClass = getMasonryAspect(i);

            return (
              <ScrollReveal
                key={product.id}
                delay={revealDelay}
                className="k2k-product-reveal mb-4 break-inside-avoid sm:mb-5 lg:mb-6"
              >
                <button
                  type="button"
                  onClick={() =>
                    hasPhoto && setLightboxIndex(slides.findIndex((s) => s.id === product.id))
                  }
                  disabled={!hasPhoto}
                  className={cn(
                    "group relative w-full text-left transition duration-300",
                    hasPhoto ? "cursor-zoom-in hover:-translate-y-1" : "cursor-default",
                  )}
                  aria-label={
                    hasPhoto
                      ? `View photo of ${product.name}`
                      : `${product.name} — photo coming soon`
                  }
                >
                  <div
                    className={cn(
                      "k2k-surface overflow-visible rounded-[1.5rem] p-2.5 transition duration-300 sm:p-3",
                      hasPhoto && "group-hover:shadow-[0_28px_60px_-32px_rgba(17,17,17,0.25)]",
                      !hasPhoto && "border-dashed opacity-90",
                    )}
                  >
                    <div
                      className={cn(
                        "relative overflow-hidden rounded-xl border border-[#111] bg-[#f8fafc]",
                        hasPhoto
                          ? cn(aspectClass, "min-h-[12rem]")
                          : "aspect-[4/5] sm:aspect-[4/3]",
                      )}
                    >
                      {hasPhoto ? (
                        <>
                          <img
                            src={product.photo}
                            alt={`${product.name} from Knead To Know home bakery`}
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                            loading="lazy"
                          />
                          <div
                            className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#111]/0 opacity-0 transition-all duration-300 group-hover:bg-[#111]/40 group-hover:opacity-100"
                            aria-hidden
                          >
                            <span className="inline-flex items-center gap-2 rounded-full border border-[#111] bg-white px-5 py-2.5 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-k2k-navy shadow-lg transition duration-300 group-hover:scale-105">
                              <Eye className="h-3.5 w-3.5 transition duration-300 group-hover:scale-110" />
                              View
                            </span>
                          </div>
                        </>
                      ) : (
                        <div className="flex h-full flex-col items-center justify-center gap-3 px-4 py-8 text-center">
                          <span className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#111] bg-[#f8f4ed]">
                            <img
                              src={CATEGORY_ICONS[activeCategory]}
                              alt=""
                              className="k2k-breathe h-8 w-8 object-contain opacity-50"
                              loading="lazy"
                              decoding="async"
                              aria-hidden
                            />
                          </span>
                          <p className="text-xs font-medium uppercase tracking-[0.2em] text-k2k-navy/90">
                            Photo coming soon
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="mt-3 px-1 pb-1">
                      <h3 className="font-display text-lg leading-tight text-ink">
                        {product.name}
                      </h3>
                      {product.price && (
                        <p className="mt-1 text-xs font-medium tabular-nums text-k2k-navy sm:text-sm">
                          {product.price}
                        </p>
                      )}
                      {product.description && (
                        <p className="mt-1.5 text-sm leading-relaxed text-k2k-navy/90 line-clamp-2">
                          {product.description}
                        </p>
                      )}
                    </div>
                  </div>
                </button>
              </ScrollReveal>
            );
          })}
        </div>

        {photoCount === 0 && (
          <ScrollReveal delay={1} className="mt-10">
            <div className="k2k-surface group mx-auto max-w-lg rounded-[1.75rem] border-t-2 border-t-k2k-blue/15 p-10 text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-[#111] bg-[#f8f4ed] transition duration-300 group-hover:scale-105">
                <img
                  src={KTK_ICONS.wheat}
                  alt=""
                  className="k2k-breathe h-7 w-7 opacity-40 transition duration-300 group-hover:scale-110 group-hover:animate-none"
                  loading="lazy"
                  decoding="async"
                  aria-hidden
                />
              </span>
              <p className="mt-4 font-display text-xl text-ink">Photos coming soon</p>
              <p className="mt-2 text-sm leading-relaxed text-k2k-navy/90">
                We&apos;re capturing this category next. In the meantime, explore our menu or
                request a custom order.
              </p>
            </div>
          </ScrollReveal>
        )}
      </Section>

      <CTASection
        eyebrow="See something you love?"
        title="Order from the gallery"
        text="Interested in ordering or recreating something you see? Browse our full menu or tell us what caught your eye on a custom order request."
        primaryLabel="View Menu"
        primaryTo="/menu"
        secondaryLabel="Request Custom"
        secondaryTo="/custom-orders"
      />

      {lightboxIndex !== null && slides.length > 0 && (
        <Lightbox
          slides={slides}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onIndexChange={setLightboxIndex}
        />
      )}
    </>
  );
}
