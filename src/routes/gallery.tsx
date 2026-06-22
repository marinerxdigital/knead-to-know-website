import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Play } from "lucide-react";
import { Section, SectionHeading } from "@/components/sections/Section";
import { CTASection } from "@/components/sections/CTASection";
import { Lightbox } from "@/components/media/Lightbox";
import { GALLERY_MEDIA, GALLERY_CAPTIONS, type GalleryMediaItem } from "@/lib/cake-photos";
import { SITE_URL } from "@/lib/business";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Cake Portfolio | Spilled Milk Cake Boutique" },
      {
        name: "description",
        content:
          "A curated portfolio of custom cakes by Spilled Milk Cake Boutique — weddings, birthdays, engagements, showers, and special celebrations in Charleston.",
      },
      { property: "og:title", content: "Cake Portfolio | Spilled Milk Cake Boutique" },
      {
        property: "og:description",
        content: "A curated look at custom cakes by Spilled Milk Cake Boutique.",
      },
      { property: "og:url", content: `${SITE_URL}/gallery` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/gallery` }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  const slides = GALLERY_MEDIA.map((item) => ({
    id: item.id,
    url: item.url,
    alt: item.alt,
    caption:
      item.kind === "image"
        ? GALLERY_CAPTIONS[item.id] ?? item.caption
        : item.caption,
    kind: item.kind,
    poster: item.kind === "video" ? item.poster : undefined,
  }));


  return (
    <>
      <section className="bg-blush pb-12 pt-16 sm:pt-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <SectionHeading
            as="h1"
            eyebrow="Portfolio"
            title="Cake Portfolio"
            intro="A curated look at custom cakes by Spilled Milk Cake Boutique, from weddings and birthdays to engagements, showers, and special celebrations. Browse recent designs for inspiration, then submit an inquiry to start planning a cake for your own celebration."
          />
        </div>
      </section>

      <Section bg="cream">
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5 [&>*]:break-inside-avoid">
          {GALLERY_MEDIA.map((item, index) => (
            <GalleryTile
              key={item.id}
              item={item}
              onOpen={() => setOpenIndex(index)}
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}
        </div>
      </Section>

      <CTASection
        eyebrow="Start the process"
        title="Have a cake idea in mind?"
        text="Share your event date, guest count, flavor ideas, and inspiration. Alexandra will review the details and follow up with availability and next steps."
        primaryLabel="Start an Inquiry"
      />

      {openIndex !== null && (
        <Lightbox
          slides={slides}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onIndexChange={setOpenIndex}
        />
      )}
    </>
  );
}

function GalleryTile({
  item,
  onOpen,
  prefersReducedMotion,
}: {
  item: GalleryMediaItem;
  onOpen: () => void;
  prefersReducedMotion: boolean;
}) {
  const isVideo = item.kind === "video";
  return (
    <figure className="group relative overflow-hidden rounded-3xl bg-white ring-1 ring-border/60 transition hover:-translate-y-1 hover:shadow-[0_20px_40px_-25px_rgba(31,77,54,0.25)]">
      <button
        type="button"
        onClick={onOpen}
        aria-label={
          isVideo ? `Play 360° rotating cake video` : `View ${item.caption} larger`
        }
        className="block w-full overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-forest"
      >
        {isVideo ? (
          <>
            {prefersReducedMotion ? (
              <img
                src={item.poster}
                alt={item.alt}
                loading="lazy"
                className="block h-auto w-full object-cover transition duration-300 group-hover:scale-[1.02]"
              />
            ) : (
              <video
                src={item.url}
                poster={item.poster}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                aria-label={item.alt}
                className="block h-auto w-full object-cover transition duration-300 group-hover:scale-[1.02]"
              />
            )}
            <span className="pointer-events-none absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-ink/70 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-white">
              <Play className="h-3 w-3" /> {prefersReducedMotion ? "360°" : "360°"}
            </span>
          </>
        ) : (
          <img
            src={item.url}
            alt={item.alt}
            loading="lazy"
            className="block h-auto w-full object-cover transition duration-300 group-hover:scale-[1.02]"
          />
        )}
      </button>
    </figure>
  );
}
