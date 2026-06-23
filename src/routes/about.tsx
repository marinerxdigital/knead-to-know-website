import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { Section, SectionHeading } from "@/components/sections/Section";
import { BUSINESS, SITE_URL } from "@/lib/business";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Knead To Know Sweet & Sour" },
      {
        name: "description",
        content:
          "Knead To Know Sweet & Sour is a small-batch bakery by Wendy Mercado on Daniel Island, South Carolina. Sourdough breads, cookies, and bagels by pre-order.",
      },
      { property: "og:title", content: "About | Knead To Know Sweet & Sour" },
      {
        property: "og:description",
        content:
          "Knead To Know Sweet & Sour — freshly baked sourdough breads, cookies, and bagels by pre-order on Daniel Island, SC.",
      },
      { property: "og:url", content: `${SITE_URL}/about` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/about` }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="bg-white pb-12 pt-16 sm:pt-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            as="h1"
            eyebrow="About"
            title="About Knead To Know Sweet & Sour"
            intro={`${BUSINESS.name} is a small-batch bakery by ${BUSINESS.owner}, offering freshly baked sourdough bread, sourdough cookies, and sourdough bagels by pre-order only.`}
          />
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-3xl bg-[#f8fafc] p-2 ring-1 ring-border/60">
            <div className="flex aspect-[4/5] w-full flex-col items-center justify-center gap-3 rounded-2xl bg-[#f8fafc] p-10 text-center">
              <div className="mx-auto h-12 w-12 rounded-full border border-k2k-blue/25" />
              <p className="font-display text-2xl text-ink">{BUSINESS.owner}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-k2k-blue/70">
                Founder &amp; Baker · Est. {BUSINESS.established}
              </p>
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="The bakery" title="Freshly baked to order" />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                {BUSINESS.name} is run by {BUSINESS.owner} on Daniel Island, South Carolina. Every
                loaf, cookie, and bagel is baked fresh to order — pre-orders only.
              </p>
              <p>
                Our menu features sourdough breads, sourdough cookies, and sourdough bagels. To
                place an order, call, text, DM, or submit an order request.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/custom-orders"
                className="inline-flex h-11 items-center rounded-full bg-k2k-blue px-7 text-sm font-medium text-white hover:bg-k2k-navy"
              >
                Request an Order <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
              <a
                href={BUSINESS.phoneTel}
                className="inline-flex h-11 items-center gap-2 rounded-full border border-k2k-blue/25 px-7 text-sm font-medium text-k2k-blue hover:border-k2k-blue/45"
              >
                <Phone className="h-4 w-4" />
                {BUSINESS.phone}
              </a>
            </div>
          </div>
        </div>
      </Section>

      <Section bg="beige">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading eyebrow="Daniel Island" title="Serving the Lowcountry" />
          <p className="mt-4 text-muted-foreground">
            Based on Daniel Island, {BUSINESS.name} serves the Charleston area with freshly baked
            sourdough by pre-order. Call or submit a request to place your order.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Link
              to="/menu"
              className="inline-flex h-11 items-center rounded-full border border-forest/20 px-7 text-sm font-medium text-forest hover:border-forest/40"
            >
              View Menu
            </Link>
            <Link
              to="/custom-orders"
              className="inline-flex h-11 items-center rounded-full bg-forest px-7 text-sm font-medium text-white hover:bg-forest-dark"
            >
              Request an Order <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
