import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/sections/Section";
import { K2KProductCard } from "@/components/ui/K2KProductCard";
import { Lightbox } from "@/components/media/Lightbox";
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

function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("Breads");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const getItemsForCategory = (cat: Category) => {
    if (cat === "Breads") return ALL_BREADS;
    if (cat === "Cookies") return ALL_COOKIES;
    return ALL_BAGELS;
  };

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

  return (
    <>
      <section className="bg-white pb-12 pt-16 sm:pt-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <SectionHeading
            as="h1"
            eyebrow="Gallery"
            title="Fresh from the bakery"
            intro="A look at our breads, cookies, and bagels. More categories will be added as photos are captured."
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

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {currentItems.map((product, i) => (
            <button
              key={product.id}
              type="button"
              onClick={() =>
                product.photo && setLightboxIndex(slides.findIndex((s) => s.id === product.id))
              }
              className="text-left"
              disabled={!product.photo}
            >
              <K2KProductCard product={product} showCta={false} />
            </button>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mx-auto max-w-md text-sm text-muted-foreground">
            Interested in ordering or recreating something you see? Head to our menu or custom
            orders page.
          </p>
          <div className="mt-5 flex justify-center gap-3">
            <Link
              to="/menu"
              className="inline-flex h-10 items-center rounded-full border px-6 text-sm"
            >
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
