import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Eye } from "lucide-react";
import { Section } from "@/components/sections/Section";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { K2KProductCard } from "@/components/ui/K2KProductCard";
import { Lightbox } from "@/components/media/Lightbox";
import { ALL_BREADS, ALL_COOKIES, ALL_BAGELS, BAKERY_PHOTOS } from "@/lib/products";
import { SITE_URL } from "@/lib/business";
import { cn } from "@/lib/utils";

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

function getItemsForCategory(cat: Category) {
  if (cat === "Breads") return ALL_BREADS;
  if (cat === "Cookies") return ALL_COOKIES;
  return ALL_BAGELS;
}

function getGridSpan(index: number, hasPhoto: boolean) {
  if (index === 0 && hasPhoto) {
    return "sm:col-span-2 lg:col-span-2";
  }
  return "";
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
        {/* Category tabs */}
        <ScrollReveal className="mb-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-k2k-blue">
                Browse by category
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
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
                    "k2k-button !min-h-10 !px-6 !py-2 !text-[0.68rem] transition-all duration-300",
                    activeCategory === cat ? "k2k-button-primary" : "k2k-button-outline",
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Masonry-feel grid */}
        <div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          role="tabpanel"
          aria-label={`${activeCategory} gallery`}
        >
          {currentItems.map((product, i) => {
            const hasPhoto = Boolean(product.photo);
            const revealDelay = (i % 5) as RevealDelay;

            return (
              <ScrollReveal
                key={product.id}
                delay={revealDelay}
                className={cn(getGridSpan(i, hasPhoto), i === 0 && hasPhoto && "lg:row-span-1")}
              >
                <button
                  type="button"
                  onClick={() =>
                    hasPhoto &&
                    setLightboxIndex(slides.findIndex((s) => s.id === product.id))
                  }
                  disabled={!hasPhoto}
                  className={cn(
                    "group relative w-full text-left transition duration-300",
                    hasPhoto
                      ? "cursor-zoom-in hover:-translate-y-1"
                      : "cursor-default",
                  )}
                  aria-label={
                    hasPhoto ? `View photo of ${product.name}` : `${product.name} — photo coming soon`
                  }
                >
                  {/* View overlay — photo items only */}
                  {hasPhoto && (
                    <div
                      className="pointer-events-none absolute inset-x-5 top-5 z-20 flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-k2k-navy/0 opacity-0 transition-all duration-300 group-hover:bg-k2k-navy/45 group-hover:opacity-100"
                      aria-hidden
                    >
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/95 px-5 py-2.5 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-k2k-navy shadow-lg backdrop-blur-sm">
                        <Eye className="h-3.5 w-3.5" />
                        View
                      </span>
                    </div>
                  )}

                  <K2KProductCard
                    product={product}
                    showCta={false}
                    className={cn(
                      "h-full",
                      hasPhoto && "group-hover:shadow-[0_28px_60px_-32px_rgba(79,126,168,0.35)]",
                      !hasPhoto &&
                        "border border-dashed border-k2k-blue/15 bg-white/60 opacity-90",
                    )}
                  />
                </button>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Empty category note */}
        {photoCount === 0 && (
          <ScrollReveal delay={1} className="mt-10">
            <div className="k2k-surface mx-auto max-w-lg rounded-[1.75rem] p-10 text-center">
              <img
                src="/assets/knead-to-know/icons/Knead_To_Know_Wheat_Icon.png"
                alt=""
                className="mx-auto h-8 w-8 opacity-40"
                aria-hidden
              />
              <p className="mt-4 font-display text-xl text-ink">Photos coming soon</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
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