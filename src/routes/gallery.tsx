import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/sections/Section";
import { PRODUCTS } from "@/lib/products";
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
  "Catering & Events",
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
  "Catering & Events": "Platters & Spreads",
  "Custom Orders": "Bespoke Requests",
};

function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("Breads");

  // Use product cards for Breads / Cookies / Bagels
  const breads = PRODUCTS.filter((p) => p.category === "sourdoughBreads");
  const cookies = PRODUCTS.filter((p) => p.category === "cookies");
  const bagels = PRODUCTS.filter((p) => p.category === "bagels");

  const getItemsForCategory = (cat: Category) => {
    if (cat === "Breads") return breads;
    if (cat === "Cookies") return cookies;
    if (cat === "Bagels") return bagels;
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
            intro="A look at our breads, cookies, bagels, boxes, and seasonal offerings. Photos are representative; actual bakes vary with the season."
          />
        </div>
      </section>

      <Section>
        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm border transition ${
                activeCategory === cat
                  ? "bg-forest text-white border-forest"
                  : "bg-white text-ink/70 border-border/60 hover:border-forest/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {isPlaceholderCategory ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div
                key={n}
                className="aspect-[16/11] rounded-3xl bg-white ring-1 ring-border/40 flex items-center justify-center p-8"
              >
                <div className="text-center">
                  <div className="mx-auto mb-3 h-12 w-12 rounded-full border border-forest/30" />
                  <p className="text-sm font-medium text-ink">{PLACEHOLDER_LABELS[activeCategory]}</p>
                  <p className="text-xs mt-1 text-muted-foreground">Photo coming soon — representative of our fresh bakes</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentItems.map((product) => (
              <div key={product.id} className="overflow-hidden rounded-3xl bg-white ring-1 ring-border/60">
                <div className="bg-white p-8 flex items-center justify-center aspect-[5/4]">
                  <img
                    src={product.cardAsset}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="p-5 text-sm">
                  <div className="font-medium text-ink">{product.name}</div>
                  <div className="text-forest mt-0.5">{product.price}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            Interested in ordering or recreating something you see? Head to our menu or custom orders page.
          </p>
          <div className="mt-5 flex justify-center gap-3">
            <Link to="/menu" className="rounded-full border px-6 h-10 inline-flex items-center text-sm">View Menu</Link>
            <Link to="/custom-orders" className="rounded-full bg-forest text-white px-6 h-10 inline-flex items-center text-sm">Request Custom</Link>
          </div>
        </div>
      </Section>
    </>
  );
}
