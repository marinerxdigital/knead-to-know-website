import type { ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/sections/Section";
import { SectionDivider } from "@/components/sections/SectionDivider";
import { CTASection } from "@/components/sections/CTASection";
import { Product3DCarousel } from "@/components/products/Product3DCarousel";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { BAKERY_PHOTOS, HOME_FEATURED_PRODUCTS } from "@/lib/products";
import { BUSINESS, SITE_URL } from "@/lib/business";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { BrandLogo } from "@/components/brand/BrandLogo";

const ICONS = {
  wheat: "/assets/knead-to-know/icons/Knead_To_Know_Wheat_Icon.png",
  bread: "/assets/knead-to-know/icons/Knead_To_Know_Bread_Icon.png",
  cookie: "/assets/knead-to-know/icons/Knead_To_Know_Cookie_Icon.png",
  calendar: "/assets/knead-to-know/icons/Knead_To_Know_Calendar_Preorder_Icon.png",
  location: "/assets/knead-to-know/icons/Knead_To_Know_Location_Pin_Icon.png",
  dough: "/assets/knead-to-know/icons/Knead_To_Know_Dough_Swirl_Icon.png",
  pickup: "/assets/knead-to-know/icons/Knead_To_Know_Pickup_Bag_Icon.png",
  gift: "/assets/knead-to-know/icons/Knead_To_Know_Gift_Box_Icon.png",
  heart: "/assets/knead-to-know/icons/Knead_To_Know_Heart_Favorite_Icon.png",
  contact: "/assets/knead-to-know/icons/Knead_To_Know_Contact_Envelope_Icon.png",
} as const;

const TRUST_ITEMS = [
  { icon: ICONS.location, label: BUSINESS.city },
  { icon: ICONS.wheat, label: BUSINESS.fulfillment },
  { icon: ICONS.bread, label: "Artisan Sourdough" },
  { icon: ICONS.calendar, label: BUSINESS.orderingModel },
];

const ORDER_STEPS = [
  {
    step: "01",
    title: "Choose",
    description: "Browse the menu and note your items and quantities.",
    icon: ICONS.cookie,
  },
  {
    step: "02",
    title: "Request",
    description: `${BUSINESS.customerAction} with your preferred pickup timing.`,
    icon: ICONS.contact,
  },
  {
    step: "03",
    title: `${BUSINESS.shortOwner} Bakes Fresh`,
    description: `Everything is baked to order in small batches — never pulled from a shelf.`,
    icon: ICONS.dough,
  },
  {
    step: "04",
    title: "Pickup",
    description: `Collect on Daniel Island at your confirmed pickup time — warm, fresh, and ready.`,
    icon: ICONS.pickup,
  },
];

const PAGE_TEASERS = [
  {
    to: "/menu" as const,
    eyebrow: "The menu",
    title: "Signature sourdough bakes",
    text: "Breads, cookies, and bagels with verified pricing — all pre-order.",
    icon: ICONS.bread,
  },
  {
    to: "/about" as const,
    eyebrow: "Our story",
    title: `Meet ${BUSINESS.owner}`,
    text: `Small-batch baking rooted on ${BUSINESS.city}.`,
    icon: ICONS.dough,
  },
  {
    to: "/faq" as const,
    eyebrow: "Questions",
    title: "Ordering made clear",
    text: "Pickup, timing, allergies, and catering — answered.",
    icon: ICONS.contact,
  },
];

const HOME_FAQS = [
  {
    q: "How do I place a pre-order?",
    a: "Call, text, DM, or submit an order request with your items, quantities, and preferred pickup timing. Wendy confirms availability and next steps.",
  },
  {
    q: "Where is pickup located?",
    a: "Pickup is on Daniel Island, South Carolina. Exact pickup details are confirmed after your order request.",
  },
  {
    q: "When are fresh bakes available?",
    a: "Everything is freshly baked to order. Pre-order availability varies — call or submit a request to check timing.",
  },
  {
    q: "Do you offer catering or event orders?",
    a: "Yes. Visit our Catering page for cookie trays, bread baskets, brunch spreads, and event boxes.",
  },
];

function WheatScoringMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 48" fill="none" aria-hidden className={cn("text-wheat/45", className)}>
      <path
        d="M4 38 C28 6 52 6 60 28 C68 6 92 6 116 38"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <path
        d="M18 32 C34 14 46 14 60 26 C74 14 86 14 102 32"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path d="M60 28 V8" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" />
    </svg>
  );
}

function HarborLine({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 180 12"
      fill="none"
      aria-hidden
      className={cn("text-k2k-harbor/60", className)}
    >
      <path
        d="M2 8 C30 2 60 2 90 7 C120 2 150 2 178 8"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HeroIconAccent({
  src,
  className,
  delay,
}: {
  src: string;
  className?: string;
  delay?: string;
}) {
  return (
    <div
      className={cn(
        "k2k-float-gentle pointer-events-none absolute flex h-12 w-12 items-center justify-center rounded-full border border-k2k-black bg-white/92 shadow-[var(--k2k-shadow-sm)] backdrop-blur-sm",
        className,
      )}
      style={delay ? { animationDelay: delay } : undefined}
      aria-hidden
    >
      <img src={src} alt="" className="k2k-icon-hover h-5 w-5 object-contain opacity-80" />
    </div>
  );
}

function StaggerFade({
  delay,
  className,
  children,
}: {
  delay: number;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn("opacity-0", className)}
      style={{
        animation: `k2k-fade-up var(--k2k-duration-slow) var(--k2k-ease-out) ${delay}ms forwards`,
      }}
    >
      {children}
    </div>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Knead To Know Sweet & Sour | Fresh Sourdough Baked To Order on Daniel Island",
      },
      {
        name: "description",
        content:
          "Knead To Know Sweet & Sour offers freshly baked sourdough bread, sourdough cookies, and sourdough bagels by pre-order only. Call or submit a request to place your order on Daniel Island, SC.",
      },
      {
        property: "og:title",
        content: "Knead To Know Bakery | Boutique Sourdough & Small-Batch Bakes on Daniel Island",
      },
      {
        property: "og:description",
        content:
          "Knead To Know Sweet & Sour offers freshly baked sourdough bread, sourdough cookies, and sourdough bagels by pre-order only. Call or submit a request to place your order on Daniel Island, SC.",
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
      {/* 1. Hero — full-bleed artisan spread */}
      <section className="relative min-h-[90vh] overflow-hidden border-b border-k2k-black/[0.06]">
        <div className="absolute inset-0 overflow-hidden" aria-hidden>
          <img
            src={BAKERY_PHOTOS.hero}
            alt=""
            className="k2k-hero-kenburns h-full w-full object-cover object-[68%_center] sm:object-[72%_center]"
          />
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-r from-k2k-cream/98 via-k2k-cream/92 to-k2k-cream/15 sm:from-k2k-cream/96 sm:via-k2k-cream/72 sm:to-transparent"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-k2k-navy/20 via-transparent to-k2k-cream/10"
          aria-hidden
        />

        <WheatScoringMark className="k2k-float-gentle absolute left-4 top-28 hidden w-24 opacity-35 lg:block xl:left-12" />
        <WheatScoringMark className="k2k-float-gentle absolute right-6 top-24 hidden w-28 opacity-40 lg:block xl:right-16 [animation-delay:1.5s]" />
        <HeroIconAccent src={ICONS.bread} className="right-[10%] top-[20%] hidden lg:flex" />
        <HeroIconAccent
          src={ICONS.cookie}
          className="left-[6%] top-[42%] hidden opacity-90 lg:flex"
          delay="2s"
        />
        <HeroIconAccent
          src={ICONS.dough}
          className="right-[18%] bottom-[28%] hidden lg:flex"
          delay="3s"
        />

        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-5 py-20 sm:px-8 lg:max-w-[54rem] lg:py-28">
          <div className="k2k-stagger-1 mb-8 flex items-center gap-4">
            <BrandLogo variant="hero" />
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-6 bg-k2k-black/15" aria-hidden="true" />
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-ink text-balance">
                  {BUSINESS.city}
                </p>
                <span className="h-1 w-1 shrink-0 rounded-full bg-wheat" aria-hidden="true" />
              </div>
              <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.22em] text-ink">
                Serving {BUSINESS.serviceArea}
              </p>
            </div>
          </div>

          <h1 className="k2k-stagger-2 max-w-[16ch] font-display text-[clamp(2.5rem,6.5vw,4.75rem)] leading-[1.02] tracking-[-0.02em] text-ink">
            Fresh Sourdough Baked to Order on Daniel Island
          </h1>

          <p className="k2k-stagger-3 mt-6 max-w-xl text-lg leading-relaxed text-ink/75 sm:text-xl">
            Artisan sourdough breads, cookies, and bagels — {BUSINESS.orderingModel.toLowerCase()},
            baked fresh by {BUSINESS.owner}.
          </p>

          <div className="k2k-stagger-4 mt-10 flex flex-wrap items-center gap-3">
            <Link
              to="/custom-orders"
              className="k2k-button k2k-button-primary inline-flex h-14 items-center justify-center gap-2 px-10 text-[0.75rem] shadow-[0_16px_40px_-12px_rgba(79,126,168,0.55)] hover:bg-k2k-navy"
            >
              Pre-Order Your Bakes
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/menu"
              className="k2k-button k2k-button-outline inline-flex h-14 items-center justify-center px-8"
            >
              View Menu
            </Link>
          </div>

          <StaggerFade delay={400} className="mt-5">
            <a
              href={BUSINESS.phoneTel}
              className="group inline-flex items-center gap-2 rounded-full border border-k2k-black/10 bg-white/60 px-4 py-2 text-sm font-medium text-k2k-navy underline-offset-4 backdrop-blur-sm transition hover:border-k2k-black hover:text-k2k-blue hover:underline"
            >
              <img
                src={ICONS.contact}
                alt=""
                className="k2k-icon-hover h-4 w-4 opacity-70"
                aria-hidden
              />
              {BUSINESS.phone}
            </a>
          </StaggerFade>
        </div>

        <HarborLine className="pointer-events-none absolute bottom-8 left-1/2 w-44 -translate-x-1/2 opacity-70 sm:w-56" />
      </section>

      {/* 2. Local trust strip — black-bordered containers */}
      <section className="relative bg-k2k-cream py-8 sm:py-10">
        <div className="mx-auto grid max-w-7xl gap-3 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:gap-4">
          {TRUST_ITEMS.map((item, index) => (
            <ScrollReveal
              key={item.label}
              delay={Math.min(index, 3) as 0 | 1 | 2 | 3}
              className="h-full"
            >
              <div className="k2k-surface k2k-hover-lift group flex h-full flex-col items-center justify-center gap-3 rounded-2xl px-5 py-6 text-center transition sm:flex-row sm:gap-3.5 sm:px-6 sm:text-left">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-k2k-black bg-k2k-cream transition duration-300 group-hover:scale-105">
                  <img
                    src={item.icon}
                    alt=""
                    className="k2k-breathe k2k-icon-hover h-5 w-5 object-contain transition duration-300 group-hover:animate-none"
                    aria-hidden
                  />
                </span>
                <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink/75 transition-colors duration-300 group-hover:text-k2k-navy">
                  {item.label}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <HarborLine className="mx-auto mt-7 w-40 opacity-50" />
      </section>

      <SectionDivider bg="cream" accent="wheat" />

      {/* 3. Featured products */}
      <Section bg="white" variant="editorial">
        <div className="relative">
          <WheatScoringMark className="k2k-float-gentle absolute -left-2 top-0 w-20 opacity-60 sm:w-24" />
          <img
            src={ICONS.wheat}
            alt=""
            className="k2k-float-gentle pointer-events-none absolute right-0 top-4 hidden h-8 w-8 opacity-25 sm:block"
            style={{ animationDelay: "1.2s" }}
            aria-hidden
          />
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] lg:items-end lg:gap-12">
            <ScrollReveal delay={0}>
              <div className="lg:pb-2">
                <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-k2k-harbor">
                  What we bake
                </p>
                <p className="mt-6 max-w-[12rem] font-display text-2xl leading-snug text-k2k-navy/70 sm:text-3xl">
                  From the oven, by request
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
                <SectionHeading
                  id="featured-products-heading"
                  title="Small-Batch Favorites"
                  intro="Artisan breads, cookies, and bagels from our official product collection — made in small batches on Daniel Island."
                />
              </div>
            </ScrollReveal>
          </div>
        </div>

        <ScrollReveal delay={2} className="mt-14">
          <Product3DCarousel
            products={HOME_FEATURED_PRODUCTS}
            headingId="featured-products-heading"
          />
        </ScrollReveal>
      </Section>

      <SectionDivider bg="beige" accent="blue" />

      {/* 4. How it works */}
      <Section bg="beige" variant="editorial">
        <SectionHeading
          eyebrow="How it works"
          title={`${BUSINESS.orderingModel} — Baked Fresh for You`}
          align="center"
          decorative
          intro="Four simple steps from craving to pickup. Call, text, DM, or submit an order request anytime."
        />
        <ScrollReveal delay={0}>
          <div className="k2k-surface mx-auto mt-8 max-w-xl rounded-2xl px-6 py-4 text-center">
            <p className="text-sm text-muted-foreground">
              Phone:{" "}
              <a href={BUSINESS.phoneTel} className="font-medium text-k2k-blue hover:text-k2k-navy">
                {BUSINESS.phone}
              </a>
            </p>
          </div>
        </ScrollReveal>

        <div className="relative mx-auto mt-16 max-w-5xl">
          <HarborLine className="pointer-events-none absolute left-[8%] right-[8%] top-9 hidden opacity-40 sm:block" />
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ORDER_STEPS.map((step, index) => (
              <ScrollReveal key={step.title} delay={Math.min(index, 3) as 0 | 1 | 2 | 3}>
                <li className="k2k-surface k2k-hover-lift group relative h-full rounded-2xl p-6 text-center transition sm:text-left">
                  <div className="relative mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-k2k-black bg-k2k-cream sm:mx-0">
                    <img
                      src={step.icon}
                      alt=""
                      className="k2k-icon-hover h-7 w-7 object-contain opacity-85"
                      aria-hidden
                    />
                    <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full border border-k2k-black bg-k2k-blue text-[10px] font-medium text-white">
                      {step.step.replace("0", "")}
                    </span>
                  </div>
                  <h3 className="font-display text-xl text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </li>
              </ScrollReveal>
            ))}
          </ol>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <Link
            to="/custom-orders"
            className="k2k-button k2k-button-primary inline-flex h-11 items-center justify-center gap-2 px-6 hover:bg-k2k-navy"
          >
            Request an Order <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={BUSINESS.phoneTel}
            className="k2k-button k2k-button-outline inline-flex h-11 items-center justify-center gap-2 px-6 hover:border-k2k-blue/45"
          >
            Call {BUSINESS.shortOwner}
          </a>
          <Link
            to="/menu"
            className="k2k-button k2k-button-outline inline-flex h-11 items-center justify-center gap-2 px-6 hover:border-k2k-blue/45"
          >
            View Menu
          </Link>
        </div>
      </Section>

      <SectionDivider bg="white" accent="wheat" />

      {/* 5. About teaser */}
      <Section bg="white">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
          <ScrollReveal delay={0}>
            <div className="relative">
              <WheatScoringMark className="k2k-float-gentle absolute -right-4 -top-6 w-16 opacity-30 sm:w-20" />
              <div className="k2k-surface rounded-[2rem] p-8 sm:p-10">
                <blockquote className="relative border-l-2 border-wheat/70 py-2 pl-8 sm:pl-10">
                  <span
                    className="absolute -left-0.5 -top-3 font-display text-5xl leading-none text-wheat/35"
                    aria-hidden
                  >
                    &ldquo;
                  </span>
                  <p className="font-display text-2xl leading-snug text-k2k-navy sm:text-[1.75rem]">
                    {BUSINESS.name} is a small-batch bakery by {BUSINESS.owner}, offering freshly
                    baked sourdough bread, sourdough cookies, and sourdough bagels by pre-order
                    only.
                  </p>
                </blockquote>
              </div>

              <div className="mt-10">
                <SectionHeading eyebrow="About" title={`About ${BUSINESS.name}`} />
                <Link
                  to="/about"
                  className="k2k-button k2k-button-outline mt-7 inline-flex h-11 items-center justify-center gap-2 px-6 hover:border-k2k-blue/45"
                >
                  About Knead To Know <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <div className="k2k-surface group relative overflow-hidden rounded-[2rem] bg-k2k-cream px-8 py-12 text-center">
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-k2k-harbor/8 to-transparent"
                aria-hidden
              />
              <img
                src={ICONS.wheat}
                alt=""
                className="k2k-float-gentle pointer-events-none absolute left-6 top-8 h-6 w-6 opacity-30"
                style={{ animationDelay: "0.8s" }}
                aria-hidden
              />
              <div className="relative mx-auto mb-7 h-36 w-36">
                <svg
                  viewBox="0 0 144 144"
                  fill="none"
                  className="absolute inset-0 h-full w-full text-wheat/55"
                  aria-hidden
                >
                  <circle
                    cx="72"
                    cy="72"
                    r="66"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeDasharray="5 7"
                  />
                  <circle
                    cx="72"
                    cy="72"
                    r="58"
                    stroke="currentColor"
                    strokeWidth="0.75"
                    opacity="0.45"
                  />
                </svg>
                <div className="absolute inset-5 flex flex-col items-center justify-center gap-2 rounded-full border border-k2k-black bg-white">
                  <img
                    src={ICONS.heart}
                    alt=""
                    className="k2k-icon-hover h-9 w-9 object-contain opacity-80"
                    aria-hidden
                  />
                  <p className="text-[9px] font-medium uppercase tracking-[0.22em] text-k2k-blue/55">
                    Photo coming soon
                  </p>
                </div>
              </div>
              <p className="font-display text-2xl text-ink">{BUSINESS.owner}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-k2k-blue/70">
                Founder &amp; Baker · Est. {BUSINESS.established}
              </p>
              <HarborLine className="mx-auto mt-8 w-36" />
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Page teasers */}
      <Section bg="cream">
        <SectionHeading
          eyebrow="Explore"
          title="Discover more"
          align="center"
          decorative
          intro="Menu, story, and answers — everything you need before your first order."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {PAGE_TEASERS.map((item, index) => (
            <ScrollReveal key={item.to} delay={Math.min(index, 2) as 0 | 1 | 2}>
              <Link
                to={item.to}
                className="k2k-surface k2k-hover-lift group flex h-full flex-col rounded-2xl p-8 transition"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-k2k-black bg-k2k-cream transition">
                  <img
                    src={item.icon}
                    alt=""
                    className="k2k-icon-hover h-5 w-5 opacity-80"
                    aria-hidden
                  />
                </div>
                <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-k2k-blue/70">
                  {item.eyebrow}
                </p>
                <h3 className="mt-3 font-display text-2xl text-ink transition group-hover:text-k2k-blue">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-k2k-blue">
                  Explore <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <SectionDivider bg="beige" accent="wheat" />

      {/* Neighbor stories — placeholder until Wendy provides testimonials */}
      <Section bg="beige" variant="editorial">
        <SectionHeading
          eyebrow="Community"
          title="What our neighbors say"
          align="center"
          decorative
          intro={
            <span className="text-ink">
              {`We're gathering stories from ${BUSINESS.serviceArea} neighbors. Check back soon — or place an order and tell us what you think.`}
            </span>
          }
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            { n: 1, icon: ICONS.heart },
            { n: 2, icon: ICONS.wheat },
            { n: 3, icon: ICONS.gift },
          ].map((item, index) => (
            <ScrollReveal key={item.n} delay={Math.min(index, 2) as 0 | 1 | 2}>
              <div className="k2k-surface k2k-hover-lift group flex h-full flex-col rounded-2xl border-t-2 border-t-k2k-blue/15 p-8 text-center">
                <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-k2k-black bg-k2k-cream">
                  <img
                    src={item.icon}
                    alt=""
                    className="k2k-icon-black k2k-icon-hover h-5 w-5 object-contain"
                    aria-hidden
                  />
                </div>
                <WheatScoringMark className="k2k-float-gentle mx-auto mb-4 w-16 opacity-35" />
                <p className="font-display text-lg text-ink">Neighbor story #{item.n}</p>
                <p className="mt-2 flex-1 text-sm text-ink">
                  Testimonial coming soon — we're baking relationships one loaf at a time.
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <SectionDivider bg="white" accent="blue" />

      {/* FAQ teaser */}
      <Section bg="cream">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions"
            intro={`Quick answers about ordering, pickup, and catering from ${BUSINESS.name}.`}
            align="center"
            decorative
          />
          <ScrollReveal delay={1}>
            <div className="k2k-surface mt-12 overflow-hidden rounded-[2rem]">
              <div className="group flex items-center justify-between border-b border-k2k-black/8 bg-gradient-to-r from-k2k-blue/[0.04] via-white to-wheat/[0.06] px-6 py-4 sm:px-8">
                <div className="flex items-center gap-3">
                  <img
                    src={ICONS.calendar}
                    alt=""
                    className="k2k-icon-hover h-5 w-5 opacity-70"
                    aria-hidden
                  />
                  <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-k2k-blue/75">
                    Ordering &amp; pickup
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src={ICONS.wheat}
                    alt=""
                    className="k2k-float-gentle h-5 w-5 opacity-40"
                    style={{ animationDelay: "0.6s" }}
                    aria-hidden
                  />
                  <WheatScoringMark className="k2k-float-gentle w-14 text-wheat/50" />
                </div>
              </div>
              <div className="px-4 sm:px-6">
                <FAQAccordion items={HOME_FAQS} />
              </div>
            </div>
          </ScrollReveal>
          <div className="mt-8 text-center">
            <Link
              to="/faq"
              className="k2k-button k2k-button-outline inline-flex h-11 items-center justify-center gap-2 px-6"
            >
              View All FAQs <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      <CTASection
        eyebrow="Ready to order"
        title="Ready for fresh bakes?"
        text={`Call, text, DM, or submit an order request. ${BUSINESS.fulfillment}.`}
        primaryLabel="Request an Order"
        primaryTo="/custom-orders"
        secondaryLabel={`Call ${BUSINESS.shortOwner}`}
        secondaryTo={BUSINESS.phoneTel}
        secondaryIsPhone
        tertiaryLabel="View Menu"
        tertiaryTo="/menu"
      />
    </>
  );
}
