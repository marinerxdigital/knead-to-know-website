import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/sections/Section";
import { K2KProductCard } from "@/components/ui/K2KProductCard";
import { ALL_BREADS, ALL_COOKIES, ALL_BAGELS } from "@/lib/products";
import { SITE_URL } from "@/lib/business";

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
      { property: "og:description", content: "Fresh sourdough bakes and custom orders from Knead To Know bakery." },
      { property: "og:url", content: `${SITE_URL}/gallery` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/gallery` }],
  }),
  component: GalleryPage,
});

const GALLERY_CATEGORIES = [
  "Breads",
  "Cookies",
  "Bagels",
  "Pastries",
  "Seasonal Bakes",
  "Bakery Boxes",
  "Catering / Events",
  "Custom Orders",
] as const;

type Category = (typeof GALLERY_CATEGORIES)[number];

const PLACEHOLDER_LABELS: Record<Category, string> = {
  Breads: "Artisan Sourdough Loaves",
  Cookies: "Fresh Sourdough Cookies",
  Bagels: "Boiled & Baked Bagels",
  Pastries: "Seasonal Pastries",
  "Seasonal Bakes": "Limited Seasonal Items",
  "Bakery Boxes": "Curated Gift & Brunch Boxes",
  "Catering / Events": "Platters & Spreads",
  "Custom Orders": "Bespoke Requests",
};

function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("Breads");

  const getItemsForCategory = (cat: Category) => {
    if (cat === "Breads") return ALL_BREADS;
    if (cat === "Cookies") return ALL_COOKIES;
    if (cat === "Bagels") return ALL_BAGELS;
    return [];
  };

  const currentItems = getItemsForCategory(activeCategory);
  const isPlaceholderCategory = currentItems.length === 0;

  return (
    <>
      <section className="bg-white pb-12 pt-16 sm:pt-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <SectionHeading
            as="h1"
            eyebrow="Gallery"
            title="Fresh from the bakery"
            intro="A look at our breads, cookies, bagels, boxes, and seasonal offerings. Product photos will be added as they are captured."
          />
        </div>
      </section>

      <Section>
        <div className="mb-10 flex flex-wrap gap-2">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full border px-5 py-2 text-sm transition ${
                activeCategory === cat
                  ? "border-k2k-blue bg-k2k-blue text-white"
                  : "border-border/60 bg-white text-ink/70 hover:border-k2k-blue/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {isPlaceholderCategory ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div
                key={n}
                className="k2k-product-card flex aspect-[4/3] items-center justify-center p-8"
              >
                <div className="text-center">
                  <div className="mx-auto mb-3 h-12 w-12 rounded-full border border-k2k-blue/25" />
                  <p className="text-sm font-medium text-ink">{PLACEHOLDER_LABELS[activeCategory]}</p>
                  <p className="mt-1 text-xs text-muted-foreground">Photo coming soon</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {currentItems.map((product) => (
              <K2KProductCard key={product.id} product={product} showCta={false} />
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <p className="mx-auto max-w-md text-sm text-muted-foreground">
            Interested in ordering or recreating something you see? Head to our menu or custom orders page.
          </p>
          <div className="mt-5 flex justify-center gap-3">
            <Link to="/menu" className="inline-flex h-10 items-center rounded-full border px-6 text-sm">
              View Menu
            </Link>
            <Link
              to="/custom-orders"
              className="inline-flex h-10 items-center rounded-full bg-k2k-blue px-6 text-sm text-white"
            >
              Request Custom
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}