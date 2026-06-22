import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/sections/Section";
import { SITE_URL } from "@/lib/business";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Knead To Know" },
      {
        name: "description",
        content:
          "Knead To Know is a small-batch boutique bakery on Daniel Island, South Carolina, established 2026. Artisan sourdough breads, cookies, bagels, pastries and custom orders.",
      },
      { property: "og:title", content: "About | Knead To Know" },
      {
        property: "og:description",
        content:
          "Knead To Know — a Daniel Island bakery crafting fresh sourdough breads, cookies, and small-batch bakes since 2026.",
      },
      { property: "og:url", content: `${SITE_URL}/about` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/about` }],
  }),
  component: AboutPage,
});

const VALUES = [
  {
    title: "Small-batch sourdough",
    text: "Long-fermented doughs for superior flavor, texture, and digestibility.",
  },
  {
    title: "Thoughtful inclusions",
    text: "Rosemary, olives, cranberries, chocolate — every add-in chosen to complement the bread.",
  },
  {
    title: "Local & seasonal",
    text: "Ingredients sourced with care. Limited runs highlight what is fresh in the Lowcountry.",
  },
  {
    title: "Handcrafted quality",
    text: "Every loaf, cookie, and bagel is shaped and baked by hand in small quantities.",
  },
  {
    title: "Community focus",
    text: "Serving Daniel Island and the greater Charleston area with reliable, delicious bakes.",
  },
  {
    title: "Custom & approachable",
    text: "From simple loaves to full custom orders and catering — we make it easy to order.",
  },
];

function AboutPage() {
  return (
    <>
      <section className="bg-white pb-12 pt-16 sm:pt-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            as="h1"
            eyebrow="About"
            title="A small-batch bakery on Daniel Island."
            intro="Knead To Know was established in 2026 to bring exceptional sourdough breads, cookies, bagels, and fresh baked goods to the Lowcountry community."
          />
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-3xl bg-white p-2 ring-1 ring-border/60">
            <div className="aspect-[4/5] w-full rounded-2xl bg-white flex items-center justify-center p-10 text-center">
              <div>
                <div className="font-display text-5xl text-ink mb-2">K2K</div>
                <p className="uppercase tracking-[3px] text-xs text-forest">
                  EST. 2026 • DANIEL ISLAND
                </p>
              </div>
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="The bakery" title="Handcrafted in small batches." />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Knead To Know is a boutique home bakery focused on artisan sourdough products. We
                bake in limited quantities each day using traditional methods and high-quality
                ingredients.
              </p>
              <p>
                Our lineup centers on naturally leavened breads in classic and thoughtfully flavored
                varieties, chewy sourdough cookies, and boiled sourdough bagels — alongside seasonal
                pastries and curated bakery boxes.
              </p>
              <p>
                We serve neighbors on Daniel Island and the Charleston area with reliable daily
                offerings and personal custom orders.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section bg="beige">
        <SectionHeading
          eyebrow="Our approach"
          title="Time, temperature, and care."
          intro="Great bread takes patience. We give our doughs the time they need for flavor development and a beautiful open crumb."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {[
            "Naturally leavened sourdough",
            "Freshly milled and quality flours",
            "Hand-shaped and scored loaves",
          ].map((item, idx) => (
            <div key={idx} className="rounded-2xl bg-white p-7 text-sm ring-1 ring-border/50">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="What we believe" title="Values that guide every bake" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((v) => (
            <div key={v.title} className="rounded-3xl bg-[#f8fafc]/70 p-7">
              <h3 className="font-display text-xl text-ink">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="blush">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading eyebrow="Daniel Island roots" title="Baking for our community." />
          <p className="mt-4 text-muted-foreground">
            Based on Daniel Island, we are proud to serve the Charleston Lowcountry with fresh,
            honest baked goods. Whether you are stopping by for a morning bagel, ordering a weekly
            loaf, or planning a larger gathering, we are here to make it special.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Link
              to="/menu"
              className="inline-flex h-11 items-center rounded-full border border-forest/20 px-7 text-sm font-medium text-forest hover:border-forest/40"
            >
              Browse the Menu
            </Link>
            <Link
              to="/custom-orders"
              className="inline-flex h-11 items-center rounded-full bg-forest px-7 text-sm font-medium text-white hover:bg-forest-dark"
            >
              Place a Custom Order <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
