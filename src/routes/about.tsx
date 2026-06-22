import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/sections/Section";
import { PRESS_FEATURE, SITE_URL } from "@/lib/business";
import alexandraChef from "@/assets/alexandra-chef.jpg.asset.json";
import alexandraApron from "@/assets/alexandra-apron.jpg.asset.json";
import alexandraDecorating from "@/assets/alexandra-decorating-outdoor.jpg.asset.json";
import alexandraHoldingCake from "@/assets/alexandra-holding-cake-outdoor.jpg.asset.json";
import signature from "@/assets/alexandra-signature.png.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Alexandra Kowaleski | Knead To Know" },
      {
        name: "description",
        content:
          "Meet Alexandra Kowaleski, the Charleston baker behind Knead To Know, a custom cake studio specializing in simple, modern wedding and birthday cakes.",
      },
      { property: "og:title", content: "About Alexandra Kowaleski | Knead To Know" },
      {
        property: "og:description",
        content:
          "Meet Alexandra Kowaleski, the Charleston baker behind Knead To Know.",
      },
      { property: "og:url", content: `${SITE_URL}/about` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/about` }],
  }),
  component: AboutPage,
});

const VALUES = [
  { title: "Thoughtful design", text: "Simple, modern details — nothing overdone." },
  { title: "Beautiful flavor", text: "Tested recipes, balanced sweetness, and house-made extracts." },
  { title: "Local, upscale ingredients", text: "Quality ingredients sourced with care." },
  { title: "Modern details", text: "Soft palettes, sculptural finishes, and fresh florals." },
  { title: "Personal ordering experience", text: "A calm, friendly process from first inquiry to final pickup or delivery." },
  { title: "Custom celebrations", text: "Designed around you, your event, and your story." },
];

function AboutPage() {
  return (
    <>
      <section className="bg-blush pb-12 pt-16 sm:pt-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            as="h1"
            eyebrow="About"
            title="Meet Alexandra Kowaleski."
            intro="Behind Knead To Know is Alexandra Kowaleski, a Charleston custom cake baker creating simple, modern cakes for weddings, birthdays, engagements, showers, and beautiful celebrations."
          />
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-3xl bg-blush p-2 ring-1 ring-border/60">
            <img
              src={alexandraChef.url}
              alt="Alexandra Kowaleski in the kitchen at Knead To Know"
              className="aspect-[4/5] w-full rounded-2xl object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="The story"
              title="A Charleston cake studio, made personal."
            />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Alexandra grew up in the kitchen and started working in a bakery while she was
                still in high school. After moving to Charleston, she continued building experience
                across restaurant, pastry, bakery, and hospitality environments before launching
                Knead To Know in January 2024.
              </p>
              <p>
                Today, Knead To Know focuses on wedding cakes, birthday cakes, and
                custom celebration cakes made with local, upscale ingredients and thoughtful
                details. Alexandra keeps her designs simple and modern while creating a personal
                ordering experience for every client — from the smallest details, like
                customizable sprinkles, to the house-made extracts in every recipe.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section bg="beige">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Meet the baker"
              title="Calm, personal, and detail-driven."
              intro="Whether she is designing a wedding cake, birthday cake, or custom celebration cake, Alexandra wants the process to feel approachable from the first inquiry to the final pickup or delivery."
            />
          </div>
          <div className="overflow-hidden rounded-3xl bg-cream p-2 ring-1 ring-border/60">
            <img
              src={alexandraApron.url}
              alt="Alexandra Kowaleski with a custom celebration cake at Knead To Know"
              className="aspect-[4/5] w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <figure className="overflow-hidden rounded-3xl bg-cream p-2 ring-1 ring-border/60">
            <img
              src={alexandraDecorating.url}
              alt="Alexandra Kowaleski finishing a custom cake outdoors"
              className="aspect-[3/4] w-full rounded-2xl object-cover shadow-sm"
              loading="lazy"
            />
          </figure>
          <div>
            <SectionHeading
              eyebrow="Process"
              title="A hands-on, thoughtful process."
              intro="From the first inquiry to the final details, Alexandra approaches each cake with care, intention, and a focus on the celebration it is being made for. Every design is finished by hand and planned around the client's event, style, and flavor preferences."
            />
          </div>
        </div>
      </Section>

      <Section bg="blush">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <SectionHeading
              eyebrow="Charleston roots"
              title="Created with Charleston celebrations in mind."
              intro="Based in Charleston, Knead To Know creates simple, modern cakes for weddings, birthdays, engagements, showers, and meaningful celebrations throughout the area."
            />
          </div>
          <figure className="order-1 overflow-hidden rounded-3xl bg-cream p-2 ring-1 ring-border/60 lg:order-2">
            <img
              src={alexandraHoldingCake.url}
              alt="Alexandra Kowaleski holding a finished cake in Charleston"
              className="aspect-[3/4] w-full rounded-2xl object-cover shadow-sm"
              loading="lazy"
            />
          </figure>
        </div>
      </Section>

      <Section bg="beige" className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-3xl bg-cream p-8 sm:p-12 md:p-16 shadow-sm ring-1 ring-border/30">
            <div className="flex items-center gap-4">
              <span className="h-px flex-1 bg-forest/20" />
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-forest">A note from Alexandra</p>
              <span className="h-px flex-1 bg-forest/20" />
            </div>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                My goal with Knead To Know is to create cakes that feel personal, beautiful, and genuinely enjoyable. Every cake is planned with care, from the flavor and design inspiration to the final details that make each celebration feel special.
              </p>
              <p>
                Whether it&rsquo;s a wedding, birthday, engagement, shower, or intimate gathering, I want the process to feel approachable, thoughtful, and custom to you.
              </p>
            </div>
            <img
              src={signature.url}
              alt="Alexandra Kowaleski signature"
              className="mt-10 block h-auto w-56 sm:w-72"
              loading="lazy"
            />
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Values" title="What guides every cake." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((v) => (
            <div key={v.title} className="rounded-3xl bg-beige/70 p-7">
              <h3 className="font-display text-xl text-ink">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {PRESS_FEATURE && (
        <Section bg="blush">
          <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-end">
            <SectionHeading
              eyebrow="Featured"
              title={`Featured in ${PRESS_FEATURE.publication}.`}
              intro="Read Alexandra's interview about her path from growing up in the kitchen to launching Knead To Know in Charleston."
            />
            <Link
              to="/featured"
              className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-forest px-6 text-sm font-medium text-primary-foreground hover:bg-forest-dark"
            >
              Read the Feature <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Section>
      )}

      <Section>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/gallery"
            className="inline-flex h-12 items-center justify-center rounded-full border border-forest/20 px-7 text-sm font-medium text-forest hover:border-forest/40"
          >
            View the Gallery
          </Link>
          <Link
            to="/inquiry"
            className="inline-flex h-12 items-center justify-center rounded-full bg-forest px-7 text-sm font-medium text-primary-foreground hover:bg-forest-dark"
          >
            Start an Inquiry
          </Link>
        </div>
      </Section>
    </>
  );
}
