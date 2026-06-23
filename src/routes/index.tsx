import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "@/components/sections/Section";
import { SectionDivider } from "@/components/sections/SectionDivider";
import { CTASection } from "@/components/sections/CTASection";
import { K2KProductCard } from "@/components/ui/K2KProductCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { BAKERY_PHOTOS, HOME_FEATURED_PRODUCTS } from "@/lib/products";
import { BUSINESS, SITE_URL } from "@/lib/business";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { BrandLogo } from "@/components/brand/BrandLogo";

const WHEAT_ICON = "/assets/knead-to-know/icons/Knead_To_Know_Wheat_Icon.png";

const TRUST_ITEMS = [
  {
    icon: "/assets/knead-to-know/icons/Knead_To_Know_Location_Pin_Icon.png",
    label: "Daniel Island, SC",
  },
  { icon: "/assets/knead-to-know/icons/Knead_To_Know_Wheat_Icon.png", label: "Baked To Order" },
  { icon: "/assets/knead-to-know/icons/Knead_To_Know_Bread_Icon.png", label: "Artisan Sourdough" },
  {
    icon: "/assets/knead-to-know/icons/Knead_To_Know_Calendar_Preorder_Icon.png",
    label: "Pre-Orders Welcome",
  },
];

const ORDER_STEPS = [
  {
    step: "01",
    title: "Choose",
    description: "Browse the menu and note your items and quantities.",
    icon: "/assets/knead-to-know/icons/Knead_To_Know_Bread_Icon.png",
  },
  {
    step: "02",
    title: "Request",
    description: "Call, text, DM, or submit an order request with your preferred pickup timing.",
    icon: "/assets/knead-to-know/icons/Knead_To_Know_Calendar_Preorder_Icon.png",
  },
  {
    step: "03",
    title: "Wendy Bakes Fresh",
    description: "Everything is baked to order in small batches — never pulled from a shelf.",
    icon: "/assets/knead-to-know/icons/Knead_To_Know_Wheat_Icon.png",
  },
  {
    step: "04",
    title: "Pickup",
    description: "Collect on Daniel Island at your confirmed pickup time — warm, fresh, and ready.",
    icon: "/assets/knead-to-know/icons/Knead_To_Know_Location_Pin_Icon.png",
  },
];

const PAGE_TEASERS = [
  {
    to: "/menu" as const,
    eyebrow: "The menu",
    title: "Signature sourdough bakes",
    text: "Breads, cookies, and bagels with verified pricing — all pre-order.",
  },
  {
    to: "/about" as const,
    eyebrow: "Our story",
    title: "Meet Wendy Mercado",
    text: "Small-batch baking rooted on Daniel Island, SC.",
  },
  {
    to: "/faq" as const,
    eyebrow: "Questions",
    title: "Ordering made clear",
    text: "Pickup, timing, allergies, and catering — answered.",
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
      {/* 1. Hero — full-bleed artisan spread (client hero photo) */}
      <section className="relative min-h-[90vh] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden" aria-hidden>
          <img
            src={BAKERY_PHOTOS.hero}
            alt=""
            className="k2k-hero-kenburns h-full w-full object-cover object-[68%_center] sm:object-[72%_center]"
          />
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#f8f4ed]/98 via-[#f8f4ed]/92 to-[#f8f4ed]/15 sm:from-[#f8f4ed]/96 sm:via-[#f8f4ed]/72 sm:to-transparent"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-k2k-navy/20 via-transparent to-[#f8f4ed]/10"
          aria-hidden
        />

        <WheatScoringMark className="k2k-float-gentle absolute right-6 top-24 hidden w-28 opacity-40 lg:block xl:right-16" />

        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-5 py-20 sm:px-8 lg:max-w-[54rem] lg:py-28">
          <div className="k2k-stagger-1 mb-8 flex items-center gap-4">
            <BrandLogo variant="hero" />
            <div>
              <Eyebrow>Daniel Island, South Carolina</Eyebrow>
              <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.22em] text-k2k-navy/60">
                Serving {BUSINESS.serviceArea}
              </p>
            </div>
          </div>

          <h1 className="k2k-stagger-2 max-w-[16ch] font-display text-[clamp(2.5rem,6.5vw,4.75rem)] leading-[1.02] tracking-[-0.02em] text-ink">
            Fresh Sourdough Baked to Order on Daniel Island
          </h1>

          <p className="k2k-stagger-3 mt-6 max-w-xl text-lg leading-relaxed text-ink/75 sm:text-xl">
            Artisan sourdough breads, cookies, and bagels — pre-order only, baked fresh by{" "}
            {BUSINESS.owner}.
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
            <a
              href={BUSINESS.phoneTel}
              className="inline-flex h-14 items-center rounded-full px-5 text-sm font-medium text-k2k-navy underline-offset-4 hover:text-k2k-blue hover:underline"
            >
              {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>

      {/* 2. Local trust strip */}
      <section className="relative border-y border-k2k-blue/12 bg-[#f8f4ed]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-stretch px-5 sm:px-8">
          {TRUST_ITEMS.map((item, index) => (
            <div
              key={item.label}
              className={cn(
                "group flex min-w-[calc(50%-0.5rem)] flex-1 flex-col items-center justify-center gap-2.5 border-k2k-blue/10 px-4 py-7 text-center transition-all duration-300 sm:min-w-0 sm:flex-row sm:gap-3 sm:px-6 sm:text-left",
                "hover:-translate-y-px hover:bg-white hover:shadow-[inset_0_-2px_0_0_var(--k2k-wheat)]",
                index > 0 && "sm:border-l",
                index % 2 === 1 && "border-l sm:border-l",
              )}
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-k2k-blue/12 bg-white transition duration-300 group-hover:scale-105 group-hover:border-k2k-blue/25 group-hover:shadow-sm">
                <img
                  src={item.icon}
                  alt=""
                  className="k2k-breathe h-5 w-5 object-contain transition duration-300 group-hover:-translate-y-0.5 group-hover:animate-none"
                  aria-hidden
                />
              </span>
              <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink/75 transition-colors duration-300 group-hover:text-k2k-navy">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider bg="white" accent="wheat" />

      {/* 3. Featured products */}
      <Section bg="white">
        <div className="relative">
          <WheatScoringMark className="absolute -left-2 top-0 w-20 opacity-60 sm:w-24" />
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] lg:items-end lg:gap-12">
            <div className="lg:pb-2">
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-k2k-harbor">
                What we bake
              </p>
              <p className="mt-6 max-w-[12rem] font-display text-2xl leading-snug text-k2k-navy/70 sm:text-3xl">
                From the oven, by request
              </p>
            </div>
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
              <SectionHeading
                title="Signature sourdough bakes"
                intro="Artisan breads, cookies, and bagels from our official product collection — made in small batches on Daniel Island."
              />
              <Link
                to="/menu"
                className="k2k-button k2k-button-outline inline-flex h-11 shrink-0 items-center justify-center gap-2 px-6 hover:border-k2k-blue/45"
              >
                Browse Full Menu <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HOME_FEATURED_PRODUCTS.map((product, index) => (
            <ScrollReveal
              key={product.id}
              delay={Math.min(index, 4) as 0 | 1 | 2 | 3 | 4}
              className={cn(index === 0 && "sm:col-span-2 lg:col-span-2")}
            >
              <K2KProductCard
                product={product}
                className="transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-36px_rgba(31,52,71,0.35)]"
              />
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <SectionDivider bg="beige" />

      {/* 4. How it works */}
      <Section bg="beige">
        <SectionHeading
          eyebrow="How it works"
          title="Pre-Orders Only — Baked Fresh for You"
          align="center"
          intro="Four simple steps from craving to pickup. Call, text, DM, or submit an order request anytime."
        />
        <div className="mx-auto mt-8 max-w-xl text-center">
          <p className="text-sm text-muted-foreground">
            Phone:{" "}
            <a href={BUSINESS.phoneTel} className="font-medium text-k2k-blue hover:text-k2k-navy">
              {BUSINESS.phone}
            </a>
          </p>
        </div>

        <div className="relative mx-auto mt-16 max-w-5xl">
          <div
            className="pointer-events-none absolute left-[10%] right-[10%] top-8 hidden h-px bg-gradient-to-r from-transparent via-k2k-blue/25 to-transparent sm:block"
            aria-hidden
          />
          <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {ORDER_STEPS.map((step) => (
              <li
                key={step.title}
                className="k2k-surface relative rounded-2xl p-6 text-center sm:text-left"
              >
                <div className="relative mx-auto mb-5 flex h-14 w-14 items-center justify-center sm:mx-0">
                  <img
                    src={step.icon}
                    alt=""
                    className="h-7 w-7 object-contain opacity-80"
                    aria-hidden
                  />
                  <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-k2k-blue text-[10px] font-medium text-white">
                    {step.step.replace("0", "")}
                  </span>
                </div>
                <h3 className="font-display text-xl text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </li>
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
            Call Wendy
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
          <div className="relative">
            <blockquote className="relative border-l-2 border-wheat/70 py-2 pl-8 sm:pl-10">
              <span
                className="absolute -left-0.5 -top-3 font-display text-5xl leading-none text-wheat/35"
                aria-hidden
              >
                &ldquo;
              </span>
              <p className="font-display text-2xl leading-snug text-k2k-navy sm:text-[1.75rem]">
                {BUSINESS.name} is a small-batch bakery by {BUSINESS.owner}, offering freshly baked
                sourdough bread, sourdough cookies, and sourdough bagels by pre-order only.
              </p>
            </blockquote>

            <div className="mt-10">
              <SectionHeading eyebrow="About" title="About Knead To Know Sweet &amp; Sour" />
              <Link
                to="/about"
                className="k2k-button k2k-button-outline mt-7 inline-flex h-11 items-center justify-center gap-2 px-6 hover:border-k2k-blue/45"
              >
                About Knead To Know <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="k2k-surface relative overflow-hidden rounded-[2rem] border border-k2k-blue/12 bg-[#f8fafc] px-8 py-12 text-center shadow-[0_28px_60px_-44px_rgba(31,52,71,0.28)]">
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-k2k-harbor/8 to-transparent"
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
              <div className="absolute inset-5 flex flex-col items-center justify-center gap-2 rounded-full bg-white ring-1 ring-k2k-blue/15">
                <img
                  src={WHEAT_ICON}
                  alt=""
                  className="h-9 w-9 object-contain opacity-80"
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
        </div>
      </Section>

      {/* Page teasers */}
      <Section bg="white">
        <div className="grid gap-6 md:grid-cols-3">
          {PAGE_TEASERS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="k2k-surface k2k-hover-lift group flex flex-col rounded-2xl p-8 transition"
            >
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
          ))}
        </div>
      </Section>

      <SectionDivider bg="beige" accent="wheat" />

      {/* Neighbor stories — placeholder until Wendy provides testimonials */}
      <Section bg="beige">
        <SectionHeading
          eyebrow="Community"
          title="What our neighbors say"
          align="center"
          intro="We're gathering stories from Daniel Island and Charleston neighbors. Check back soon — or place an order and tell us what you think."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="k2k-surface rounded-2xl border border-dashed border-k2k-blue/20 bg-white/80 p-8 text-center"
            >
              <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-wheat/15">
                <img src={WHEAT_ICON} alt="" className="h-5 w-5 opacity-60" aria-hidden />
              </div>
              <p className="font-display text-lg text-k2k-navy/70">Neighbor story #{n}</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Testimonial coming soon — we're baking relationships one loaf at a time.
              </p>
            </div>
          ))}
        </div>
      </Section>

      <SectionDivider bg="white" />

      {/* FAQ teaser */}
      <Section bg="beige">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions"
            intro="Quick answers about ordering, pickup, and catering from Knead To Know."
            align="center"
          />
          <div className="mt-12 overflow-hidden rounded-[2rem] border border-k2k-blue/15 bg-white shadow-[0_28px_70px_-42px_rgba(31,52,71,0.3)] ring-1 ring-k2k-blue/8">
            <div className="flex items-center justify-between border-b border-k2k-blue/10 bg-gradient-to-r from-k2k-blue/[0.04] via-white to-wheat/[0.06] px-6 py-4 sm:px-8">
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-k2k-blue/75">
                Ordering &amp; pickup
              </p>
              <WheatScoringMark className="w-14 text-wheat/50" />
            </div>
            <div className="px-4 sm:px-6">
              <FAQAccordion items={HOME_FAQS} />
            </div>
          </div>
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
