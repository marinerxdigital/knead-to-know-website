import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/sections/Section";
import { CTASection } from "@/components/sections/CTASection";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { BUSINESS, SITE_URL } from "@/lib/business";
import { BAKERY_PHOTOS } from "@/lib/products";

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

const PROCESS_STEPS = [
  "You choose from our menu and submit a request with timing and quantities.",
  "Wendy confirms availability and schedules your bake.",
  "Everything is mixed, shaped, and baked fresh — never held overnight on a shelf.",
  "Pickup on Daniel Island at your confirmed time, warm and ready.",
] as const;

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            Small-batch sourdough by{" "}
            <span className="text-k2k-blue">{BUSINESS.shortOwner}</span>
          </>
        }
        intro={`${BUSINESS.name} is a small-batch bakery by ${BUSINESS.owner}, offering freshly baked sourdough bread, sourdough cookies, and sourdough bagels by pre-order only.`}
        image={BAKERY_PHOTOS.rosemarySourdough}
        imageAlt="Rosemary sourdough loaf from Knead To Know"
        imagePosition="right"
      />

      <Section variant="editorial">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <ScrollReveal className="relative">
            <div className="k2k-hero-frame overflow-hidden rounded-[2rem] p-2">
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
          </ScrollReveal>

          <div className="lg:pt-4">
            <SectionHeading eyebrow="The bakery" title="Freshly baked to order" decorative />
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

      <Section bg="beige" variant="editorial">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Our philosophy" title="Small-batch, never rushed" decorative />
            <p className="mt-6 text-base leading-[1.8] text-muted-foreground">
              {BUSINESS.name} believes great sourdough takes time — long ferments, attentive
              shaping, and baking in limited batches so every order gets the care it deserves.
              Pre-orders only, because freshness is non-negotiable.
            </p>
          </div>
          <div>
            <SectionHeading eyebrow="The process" title="From starter to your door" decorative />
            <ol className="mt-6 space-y-4">
              {PROCESS_STEPS.map((step, i) => (
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
        <SectionHeading
          align="center"
          eyebrow="What we stand for"
          title="Values you can taste"
          decorative
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {VALUES.map((item, i) => (
            <ScrollReveal key={item.title} delay={(i % 3) as 0 | 1 | 2}>
              <div className="k2k-surface k2k-hover-lift rounded-2xl p-7 text-center">
                <img
                  src={item.icon}
                  alt=""
                  className="mx-auto h-10 w-10 object-contain opacity-80"
                  aria-hidden
                />
                <h3 className="mt-4 font-display text-xl text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Full-width Lowcountry band */}
      <section className="relative overflow-hidden bg-k2k-navy py-20 sm:py-28">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(194,168,120,0.12),transparent_55%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <ScrollReveal>
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-wheat/80">
                Daniel Island &amp; Lowcountry
              </p>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] text-white sm:text-5xl">
                Serving the Lowcountry
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-white/75">
                Based on Daniel Island, {BUSINESS.name} serves the Charleston area with freshly
                baked sourdough by pre-order. Call or submit a request to place your order.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/menu"
                  className="inline-flex k2k-button k2k-button-outline border-white/35 text-white hover:border-white/60 hover:bg-white/5"
                >
                  View Menu
                </Link>
                <Link to="/custom-orders" className="inline-flex k2k-button k2k-button-primary">
                  Request an Order <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_32px_80px_-40px_rgba(0,0,0,0.5)]">
                <div className="flex items-center gap-3 border-b border-white/10 px-6 py-4">
                  <MapPin className="h-4 w-4 text-wheat/70" />
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/60">
                    Pickup area · Daniel Island, SC
                  </p>
                </div>
                <div className="relative flex aspect-[16/10] flex-col items-center justify-center gap-3 p-8 text-center">
                  <div
                    className="absolute inset-5 rounded-2xl border border-dashed border-white/20 bg-white/[0.03]"
                    aria-hidden
                  />
                  {/* Map-style grid placeholder */}
                  <div
                    className="absolute inset-5 overflow-hidden rounded-2xl opacity-30"
                    aria-hidden
                  >
                    <svg
                      viewBox="0 0 400 250"
                      fill="none"
                      className="h-full w-full text-white/40"
                      preserveAspectRatio="xMidYMid slice"
                    >
                      <path
                        d="M0 80h400M0 160h400M80 0v250M160 0v250M240 0v250M320 0v250"
                        stroke="currentColor"
                        strokeWidth="0.5"
                      />
                      <path
                        d="M60 200c40-60 100-80 160-40s120 20 180-60"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeDasharray="6 4"
                      />
                      <circle cx="200" cy="130" r="8" fill="currentColor" className="text-wheat" />
                    </svg>
                  </div>
                  <MapPin className="relative h-10 w-10 text-wheat/60" />
                  <p className="relative font-display text-xl text-white">{BUSINESS.city}</p>
                  <p className="relative max-w-xs text-sm text-white/60">
                    {BUSINESS.address}. Exact pickup details confirmed after your order.
                  </p>
                  {BUSINESS.mapsUrl && (
                    <a
                      href={BUSINESS.mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="relative mt-1 text-xs font-medium uppercase tracking-wider text-wheat/80 hover:text-wheat"
                    >
                      Open in maps
                    </a>
                  )}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Ready to order"
        title="Ready for fresh bakes?"
        text="Call, text, DM, or submit an order request. Everything is freshly baked to order."
        primaryLabel="Request an Order"
        primaryTo="/custom-orders"
        secondaryLabel="Call Wendy"
        secondaryTo={BUSINESS.phoneTel}
        secondaryIsPhone
        tertiaryLabel="View Menu"
        tertiaryTo="/menu"
      />
    </>
  );
}