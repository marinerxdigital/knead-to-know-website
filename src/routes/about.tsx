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

const WHEAT_ICON = "/assets/knead-to-know/icons/Knead_To_Know_Wheat_Icon.png";

const VALUES = [
  {
    icon: "/assets/knead-to-know/icons/Knead_To_Know_Bread_Icon.png",
    title: "Small-batch sourdough",
    desc: "Every loaf, cookie, and bagel is crafted in limited batches for consistent quality.",
  },
  {
    icon: "/assets/knead-to-know/icons/Knead_To_Know_Calendar_Preorder_Icon.png",
    title: "Baked to order",
    desc: BUSINESS.orderingModel + " — nothing sits on a shelf waiting for you.",
  },
  {
    icon: "/assets/knead-to-know/icons/Knead_To_Know_Location_Pin_Icon.png",
    title: "Daniel Island roots",
    desc: `Based on Daniel Island, serving the ${BUSINESS.serviceArea}.`,
  },
];

function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white pb-14 pt-16 sm:pt-24">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(194,168,120,0.08),transparent_50%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            as="h1"
            eyebrow="About"
            title="About Knead To Know Sweet & Sour"
            intro={`${BUSINESS.name} is a small-batch bakery by ${BUSINESS.owner}, offering freshly baked sourdough bread, sourdough cookies, and sourdough bagels by pre-order only.`}
          />
        </div>
      </section>

      <Section>
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#f8fafc] to-white p-3 shadow-[0_24px_60px_-32px_rgba(79,126,168,0.25)] ring-1 ring-k2k-blue/12">
              <div className="relative flex aspect-[4/5] w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-[1.5rem] bg-[#f8fafc] p-10 text-center">
                <div
                  className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-wheat/60 to-transparent"
                  aria-hidden
                />
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-k2k-blue/20 bg-white shadow-sm">
                  <img src={WHEAT_ICON} alt="" className="h-9 w-9 opacity-50" aria-hidden />
                </div>
                <div className="mx-auto h-24 w-24 rounded-full border-2 border-dashed border-k2k-blue/20 bg-white/80" />
                <p className="font-display text-2xl text-ink">{BUSINESS.owner}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-k2k-blue/70">
                  Founder &amp; Baker · Est. {BUSINESS.established}
                </p>
                <p className="max-w-[14rem] text-[10px] uppercase tracking-[0.18em] text-muted-foreground/80">
                  Founder photo coming soon
                </p>
              </div>
            </div>
          </div>

          <div className="lg:pt-4">
            <SectionHeading eyebrow="The bakery" title="Freshly baked to order" />
            <div className="mt-8 space-y-6 border-l-2 border-wheat/40 pl-6 text-base leading-[1.75] text-muted-foreground">
              <p>
                {BUSINESS.name} is run by {BUSINESS.owner} on Daniel Island, South Carolina. Every
                loaf, cookie, and bagel is baked fresh to order — pre-orders only.
              </p>
              <p>
                Our menu features sourdough breads, sourdough cookies, and sourdough bagels. To
                place an order, call, text, DM, or submit an order request.
              </p>
              <p className="text-sm text-k2k-navy/80">{BUSINESS.fulfillment}.</p>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/custom-orders" className="inline-flex k2k-button k2k-button-primary">
                Request an Order <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
              <a href={BUSINESS.phoneTel} className="inline-flex k2k-button k2k-button-outline">
                <Phone className="h-4 w-4" />
                {BUSINESS.phone}
              </a>
            </div>
          </div>
        </div>
      </Section>

      <Section bg="beige">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Our philosophy" title="Small-batch, never rushed" />
            <p className="mt-6 text-base leading-[1.8] text-muted-foreground">
              {BUSINESS.name} believes great sourdough takes time — long ferments, attentive
              shaping, and baking in limited batches so every order gets the care it deserves.
              Pre-orders only, because freshness is non-negotiable.
            </p>
          </div>
          <div>
            <SectionHeading eyebrow="The process" title="From starter to your door" />
            <ol className="mt-6 space-y-4">
              {[
                "You choose from our menu and submit a request with timing and quantities.",
                "Wendy confirms availability and schedules your bake.",
                "Everything is mixed, shaped, and baked fresh — never held overnight on a shelf.",
                "Pickup on Daniel Island at your confirmed time, warm and ready.",
              ].map((step, i) => (
                <li key={step} className="flex gap-4 text-sm leading-relaxed text-muted-foreground">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-k2k-blue/10 text-xs font-medium text-k2k-blue">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <Section bg="white">
        <SectionHeading align="center" eyebrow="What we stand for" title="Values you can taste" />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {VALUES.map((item) => (
            <div key={item.title} className="k2k-card rounded-2xl p-7 text-center">
              <img
                src={item.icon}
                alt=""
                className="mx-auto h-10 w-10 object-contain opacity-80"
                aria-hidden
              />
              <h3 className="mt-4 font-display text-xl text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="white">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading eyebrow="Daniel Island" title="Serving the Lowcountry" />
          <p className="mt-4 text-muted-foreground">
            Based on Daniel Island, {BUSINESS.name} serves the Charleston area with freshly baked
            sourdough by pre-order. Call or submit a request to place your order.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/menu" className="inline-flex k2k-button k2k-button-outline">
              View Menu
            </Link>
            <Link to="/custom-orders" className="inline-flex k2k-button k2k-button-primary">
              Request an Order <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
