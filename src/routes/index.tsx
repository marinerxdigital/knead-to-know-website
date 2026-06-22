import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "@/components/sections/Section";
import { SectionDivider } from "@/components/sections/SectionDivider";
import { CTASection } from "@/components/sections/CTASection";
import { CakeImage } from "@/components/media/CakeImage";
import { OCCASIONS } from "@/lib/site-data";
import { PRESS_FEATURE, SITE_URL } from "@/lib/business";
import {
  HOME_GALLERY_PREVIEW,
  HOME_HERO_IMAGE,
  OCCASION_PORTFOLIO_PHOTOS,
  PORTFOLIO_IMAGES,
} from "@/lib/cake-photos";
import alexandraChef from "@/assets/alexandra-chef.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Knead To Know | Daniel Island Bakery for Bread, Cookies & Pastries" },
      {
        name: "description",
        content:
          "Knead To Know is a Daniel Island bakery serving fresh breads, cookies, pastries, seasonal baked goods, bakery boxes, and custom orders in the Charleston area.",
      },
      { property: "og:title", content: "Knead To Know | Daniel Island Bakery for Bread, Cookies & Pastries" },
      {
        property: "og:description",
        content:
          "Knead To Know is a Daniel Island bakery serving fresh breads, cookies, pastries, seasonal baked goods, bakery boxes, and custom orders in the Charleston area.",
      },
      { property: "og:url", content: `${SITE_URL}/` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-blush">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16 lg:pb-28">
          <div>
            <Eyebrow>Daniel Island, SC</Eyebrow>
            <h1 className="mt-4 font-display text-5xl leading-[1.02] text-ink sm:text-6xl lg:text-7xl">
              Fresh Bread, Cookies, and Bakes Worth Knowing
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Knead To Know is a small-batch bakery on Daniel Island serving fresh breads, cookies, pastries, seasonal baked goods, bakery boxes, and custom orders for everyday treats, gatherings, and special occasions.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/menu"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-forest px-7 text-sm font-medium text-primary-foreground hover:bg-forest-dark"
              >
                View Menu
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full border border-forest/20 bg-cream px-7 text-sm font-medium text-forest transition hover:border-forest/40 hover:bg-cream/70"
              >
                Request an Order
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] bg-cream/40 p-2 ring-1 ring-forest/10 shadow-[0_30px_60px_-40px_rgba(31,77,54,0.35)]">
              <img
                src={HOME_HERO_IMAGE.url}
                alt={HOME_HERO_IMAGE.alt}
                className="aspect-[4/5] w-full rounded-[1.6rem] object-cover"
                width={1125}
                height={1398}
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden w-40 sm:block">
              <CakeImage
                src={PORTFOLIO_IMAGES.engagedHeart.url}
                alt={PORTFOLIO_IMAGES.engagedHeart.alt}
                aspect="square"
              />
            </div>
          </div>
        </div>
      </section>

      <SectionDivider bg="cream" />

      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Eyebrow>A little about us</Eyebrow>
          <p className="mt-5 font-display text-3xl leading-snug text-ink sm:text-4xl">
            Thoughtfully designed, beautifully made. From wedding cakes to custom birthday designs,
            every cake begins with your event, your style, and the details that make it yours.
          </p>
        </div>
      </section>

      <Section bg="blush">
        <SectionHeading
          eyebrow="Signature style"
          title={<>Alexandra&apos;s <em className="font-display italic text-forest">signature style.</em></>}
          intro="Alexandra's cakes are designed to feel simple, modern, and personal to each celebration. Every detail is considered, from the flavor and finish to the color palette, piping, and final presentation."
          align="center"
        />
        <div className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-3">
          {[
            {
              title: "Soft Modern Design",
              text: "Clean shapes, soft colors, refined piping, and details that feel elegant without being overdone.",
            },
            {
              title: "Personal Details",
              text: "Each cake begins with the event, the inspiration, and the small touches that make the celebration feel like yours.",
            },
            {
              title: "Beautiful Flavor",
              text: "Thoughtful flavor combinations and quality ingredients create cakes that are made to be enjoyed, not just photographed.",
            },
          ].map((card) => (
            <article
              key={card.title}
              className="rounded-3xl bg-cream p-7 ring-1 ring-forest/10 transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-30px_rgba(31,77,54,0.3)]"
            >
              <div className="h-px w-10 bg-forest/40" />
              <h3 className="mt-5 font-display text-2xl text-ink">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <SectionDivider bg="beige" />

      <Section bg="beige">
        <SectionHeading
          eyebrow="What we make"
          title={<>Cake ideas for every kind of <em className="font-display not-italic text-forest">celebration.</em></>}
          intro="From quietly elegant to softly playful — designs for the celebrations that matter most."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {OCCASIONS.map((occasion, index) => {
            const photo = OCCASION_PORTFOLIO_PHOTOS[index % OCCASION_PORTFOLIO_PHOTOS.length];
            return (
              <article
                key={occasion.title}
                className="group overflow-hidden rounded-3xl bg-white ring-1 ring-border/60 transition hover:-translate-y-1 hover:shadow-[0_20px_40px_-25px_rgba(31,77,54,0.25)]"
              >
                <CakeImage
                  src={photo.url}
                  alt={photo.alt}
                  aspect="landscape"
                  className="rounded-none rounded-t-3xl ring-0"
                />
                <div className="p-6">
                  <h3 className="font-display text-2xl text-ink">{occasion.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{occasion.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      <Section>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Gallery"
            title="Recent Cake Inspiration"
            intro="Browse custom cakes for weddings, birthdays, engagements, and special celebrations."
          />
          <Link
            to="/gallery"
            className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full border border-forest/20 px-6 text-sm font-medium text-forest hover:border-forest/40"
          >
            View the Gallery <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
          {HOME_GALLERY_PREVIEW.map((photo) => (
            <CakeImage
              key={photo.id}
              src={photo.url}
              alt={photo.alt}
              aspect="tall"
            />
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-2xl text-center">
          <h3 className="font-display text-3xl text-ink sm:text-4xl">Have a cake idea in mind?</h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Share your event date, guest count, flavor ideas, and inspiration. Alexandra will
            review the details and follow up with availability and next steps.
          </p>
          <Link
            to="/inquiry"
            className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-forest px-7 text-sm font-medium text-primary-foreground hover:bg-forest-dark"
          >
            Start an Inquiry
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      <Section bg="blush">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <CakeImage
            src={PORTFOLIO_IMAGES.holidayMini.url}
            alt={PORTFOLIO_IMAGES.holidayMini.alt}
            aspect="landscape"
          />
          <div>
            <SectionHeading
              eyebrow="Flavors"
              title="Flavors, fillings, and frosting options."
              intro="Explore cake flavors, fillings, frostings, and popular pairings before submitting your inquiry. Every cake is custom planned around your event details."
            />
            <Link
              to="/flavors"
              className="mt-7 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-forest px-6 text-sm font-medium text-primary-foreground hover:bg-forest-dark"
            >
              Explore Flavors <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <SectionHeading
              eyebrow="Meet the baker"
              title="Meet Alexandra."
              intro="Knead To Know is led by Alexandra Kowaleski, a Charleston custom cake baker creating simple, modern cakes with thoughtful details, local upscale ingredients, and a personal ordering experience."
            />
            <Link
              to="/about"
              className="mt-7 inline-flex h-11 items-center justify-center gap-2 rounded-full border border-forest/20 px-6 text-sm font-medium text-forest hover:border-forest/40"
            >
              Meet Alexandra <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="order-1 lg:order-2">
            <div className="overflow-hidden rounded-3xl bg-blush p-2 ring-1 ring-border/60">
              <img
                src={alexandraChef.url}
                alt="Alexandra Kowaleski, owner and baker of Knead To Know"
                className="aspect-[4/5] w-full rounded-2xl object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </Section>

      {PRESS_FEATURE && (
        <section className="border-y border-border/60 bg-beige/60 py-16">
          <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-forest">
              Featured in {PRESS_FEATURE.publication}
            </p>
            <p className="mt-5 font-display text-2xl leading-snug text-ink sm:text-3xl">
              Read Alexandra&apos;s interview about her path from bakery and restaurant kitchens to
              launching Knead To Know in Charleston.
            </p>
            <div className="mt-8">
              <Link
                to="/featured"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-forest px-6 text-sm font-medium text-primary-foreground hover:bg-forest-dark"
              >
                Read the Feature <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      <CTASection
        eyebrow="Ready to begin"
        title="Ready to plan your cake?"
        text="Tell us about your event, guest count, inspiration, flavor ideas, and date. Alexandra will review the details and follow up with availability and next steps."
      />
    </>
  );
}
