import type { ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Eyebrow, Section } from "@/components/sections/Section";
import { CTASection } from "@/components/sections/CTASection";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { BUSINESS, SITE_URL } from "@/lib/business";
import { BAKERY_PHOTOS } from "@/lib/products";
import { cn } from "@/lib/utils";
import { KTK_DECOR, KTK_ICONS } from "@/lib/design-assets";

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

const PHILOSOPHY = [
  {
    icon: KTK_ICONS.dough,
    title: "Time & attention",
    desc: "Great sourdough takes long ferments, attentive shaping, and baking in limited batches so every order gets the care it deserves.",
  },
  {
    icon: KTK_ICONS.bread,
    title: "Small-batch only",
    desc: "Every loaf, cookie, and bagel is crafted in limited quantities — consistent quality, never mass-produced.",
  },
  {
    icon: KTK_ICONS.heart,
    title: "Freshness first",
    desc: `${BUSINESS.orderingModel}. ${BUSINESS.fulfillment} — nothing sits on a shelf waiting for you.`,
  },
] as const;

const VALUES = [
  {
    icon: KTK_ICONS.bread,
    title: "Small-batch sourdough",
    desc: "Every loaf, cookie, and bagel is crafted in limited batches for consistent quality.",
  },
  {
    icon: KTK_ICONS.calendar,
    title: "Baked to order",
    desc: `${BUSINESS.orderingModel} — nothing sits on a shelf waiting for you.`,
  },
  {
    icon: KTK_ICONS.location,
    title: "Daniel Island roots",
    desc: `Based on Daniel Island, serving the ${BUSINESS.serviceArea}.`,
  },
] as const;

const PROCESS_STEPS = [
  {
    title: "Choose & request",
    desc: "You choose from our menu and submit a request with timing and quantities.",
  },
  {
    title: "Confirm & schedule",
    desc: "Wendy confirms availability and schedules your bake.",
  },
  {
    title: "Mix, shape & bake",
    desc: "Everything is mixed, shaped, and baked fresh — never held overnight on a shelf.",
  },
  {
    title: "Pickup on Daniel Island",
    desc: "Pickup at your confirmed time, warm and ready.",
  },
] as const;

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

function IconSectionHeading({
  icon,
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  icon: string;
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <div
        className={cn(
          "flex items-center gap-4",
          align === "center" && "flex-col justify-center sm:flex-row",
        )}
      >
        <div className="group flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#111] bg-[#f8f4ed] shadow-sm transition duration-300 group-hover:scale-105 group-hover:border-k2k-blue/25 group-hover:shadow-md">
          <img
            src={icon}
            alt=""
            className="k2k-breathe h-8 w-8 object-contain transition duration-300 group-hover:scale-110 group-hover:animate-none"
            loading="lazy"
            decoding="async"
            aria-hidden
          />
        </div>
        <div className={cn("min-w-0", align === "center" && "text-center sm:text-left")}>
          {eyebrow && <Eyebrow decorative>{eyebrow}</Eyebrow>}
          <h2 className="mt-4 font-display text-3xl leading-[1.05] text-ink text-balance sm:mt-5 sm:text-5xl">
            {title}
          </h2>
          <HarborLine className="mt-4 h-2 w-28 sm:mt-5" />
          {intro && (
            <p className="mt-4 text-base leading-relaxed text-k2k-navy/90 text-pretty sm:mt-5 sm:text-lg">
              {intro}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function MapPlaceholder({ variant = "light" }: { variant?: "light" | "dark" }) {
  const isDark = variant === "dark";

  return (
    <div
      className={cn(
        "k2k-surface group/map overflow-hidden !rounded-[1.75rem] !p-0",
        !isDark && "!border-t-2 !border-t-k2k-blue/20",
      )}
    >
      <div
        className={cn(
          "flex items-center gap-3 border-b px-6 py-4",
          isDark ? "border-white/15 bg-white/5" : "border-k2k-blue/10 bg-[#f8f4ed]/60",
        )}
      >
        <img
          src={KTK_ICONS.location}
          alt=""
          className="h-6 w-6 object-contain opacity-80 transition duration-300 group-hover/map:scale-110"
          loading="lazy"
          decoding="async"
          aria-hidden
        />
        <p
          className={cn(
            "text-xs font-medium uppercase tracking-[0.2em]",
            isDark ? "text-white/65" : "text-k2k-navy/90",
          )}
        >
          Pickup area · Daniel Island, SC
        </p>
        {!isDark && <HarborLine className="ml-auto hidden h-2 w-20 sm:block" />}
      </div>
      <div className="relative flex aspect-[16/10] flex-col items-center justify-center gap-3 p-8 text-center">
        <div
          className={cn(
            "absolute inset-5 rounded-2xl border border-dashed",
            isDark ? "border-white/20 bg-white/[0.03]" : "border-k2k-blue/20 bg-[#f8f4ed]/40",
          )}
          aria-hidden
        />
        <div className="absolute inset-5 overflow-hidden rounded-2xl opacity-25" aria-hidden>
          <svg
            viewBox="0 0 400 250"
            fill="none"
            className={cn("h-full w-full", isDark ? "text-white/50" : "text-k2k-blue/50")}
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
        <img
          src={KTK_ICONS.location}
          alt=""
          className="relative h-12 w-12 object-contain opacity-70"
          loading="lazy"
          decoding="async"
          aria-hidden
        />
        <p className={cn("relative font-display text-xl", isDark ? "text-white" : "text-ink")}>
          {BUSINESS.city}
        </p>
        <p
          className={cn(
            "relative max-w-xs text-sm",
            isDark ? "text-white/60" : "text-k2k-navy/90",
          )}
        >
          {BUSINESS.address}. Exact pickup details confirmed after your order.
        </p>
        {BUSINESS.mapsUrl && (
          <a
            href={BUSINESS.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className={cn(
              "relative mt-1 text-xs font-medium uppercase tracking-wider transition",
              isDark ? "text-wheat/80 hover:text-wheat" : "text-k2k-blue hover:text-k2k-navy",
            )}
          >
            Open in maps
          </a>
        )}
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            Small-batch sourdough by <span className="text-k2k-blue">{BUSINESS.shortOwner}</span>
          </>
        }
        intro={`${BUSINESS.name} is a small-batch bakery by ${BUSINESS.owner}, offering freshly baked sourdough bread, sourdough cookies, and sourdough bagels by pre-order only.`}
        image={BAKERY_PHOTOS.rosemarySourdough}
        imageAlt="Rosemary sourdough loaf from Knead To Know"
        imagePosition="right"
      >
        <div className="flex flex-wrap items-center gap-3">
          <span className="k2k-surface inline-flex rounded-full px-4 py-2 text-sm font-medium text-k2k-navy">
            Est. {BUSINESS.established}
          </span>
          <span className="group inline-flex items-center gap-2 rounded-full border border-[#111] bg-k2k-blue px-4 py-2 text-sm font-medium text-white">
            <img
              src={KTK_ICONS.calendar}
              alt=""
              className="h-4 w-4 brightness-0 invert transition duration-300 group-hover:scale-110"
              loading="lazy"
              decoding="async"
              aria-hidden
            />
            {BUSINESS.orderingModel}
          </span>
        </div>
      </PageHero>

      <Section variant="editorial">
        <div className="grid min-w-0 gap-10 sm:gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-14">
          <ScrollReveal className="min-w-0 space-y-5">
            <div className="k2k-surface relative overflow-hidden rounded-[2rem] border-t-2 border-t-k2k-blue/15 p-6 text-center sm:p-8">
              <img
                src={KTK_DECOR.cornerFlourish}
                alt=""
                className="ktk-corner-flourish"
                loading="lazy"
                decoding="async"
                aria-hidden
              />
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-2 border-dashed border-[#111]/20 bg-[#f8f4ed]">
                <img
                  src={KTK_ICONS.wheat}
                  alt=""
                  className="h-10 w-10 opacity-50"
                  loading="lazy"
                  decoding="async"
                  aria-hidden
                />
              </div>
              <p className="mt-6 font-display text-2xl text-ink">{BUSINESS.owner}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-k2k-blue">
                Founder &amp; Baker · Est. {BUSINESS.established}
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.18em] text-k2k-navy/90">
                Founder photo coming soon
              </p>
            </div>

            <div className="k2k-hero-frame overflow-hidden rounded-[1.5rem] p-2">
              <img
                src={BAKERY_PHOTOS.chocolateChipCookies}
                alt="Chocolate chip sourdough cookies from Knead To Know"
                className="aspect-[4/3] w-full rounded-[1.25rem] object-cover"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={1} className="min-w-0 lg:pt-2">
            <IconSectionHeading
              icon={KTK_ICONS.wheat}
              eyebrow="The bakery"
              title="Freshly baked to order"
            />
            <div className="k2k-accent-rail k2k-surface mt-6 space-y-4 rounded-2xl border-t-2 border-t-k2k-blue/25 p-5 pl-5 text-base leading-relaxed text-k2k-navy/90 sm:mt-8 sm:space-y-5 sm:p-7 sm:pl-7">
              <p>
                {BUSINESS.name} is run by {BUSINESS.owner} on Daniel Island, South Carolina. Every
                loaf, cookie, and bagel is baked fresh to order — pre-orders only.
              </p>
              <p>
                Our menu features sourdough breads, sourdough cookies, and sourdough bagels. To
                place an order, call, text, DM, or submit an order request.
              </p>
              <p className="border-t border-k2k-blue/10 pt-5 text-sm font-medium text-k2k-navy/90">
                {BUSINESS.fulfillment}.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/custom-orders" className="group inline-flex k2k-button k2k-button-primary">
                Request an Order{" "}
                <ArrowRight className="ml-1 h-4 w-4 transition duration-300 group-hover:translate-x-0.5" />
              </Link>
              <a
                href={BUSINESS.phoneTel}
                className="group inline-flex k2k-button k2k-button-outline"
              >
                <Phone className="h-4 w-4 transition duration-300 group-hover:scale-110" />
                {BUSINESS.phone}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      <Section bg="beige" variant="editorial">
        <div className="grid min-w-0 gap-12 sm:gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="min-w-0">
            <IconSectionHeading
              icon={KTK_ICONS.dough}
              eyebrow="Our philosophy"
              title="Small-batch, never rushed"
            />
            <div className="mt-8 grid gap-4">
              {PHILOSOPHY.map((item, i) => (
                <ScrollReveal key={item.title} delay={Math.min(i + 1, 4) as 0 | 1 | 2 | 3 | 4}>
                  <div className="k2k-surface k2k-hover-lift group flex gap-4 rounded-2xl border-t-2 border-t-k2k-blue/15 p-5 transition duration-300 hover:border-t-k2k-blue/35">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#111] bg-[#f8f4ed] transition duration-300 group-hover:scale-105">
                      <img
                        src={item.icon}
                        alt=""
                        className="k2k-breathe h-7 w-7 object-contain transition duration-300 group-hover:scale-110 group-hover:animate-none"
                        loading="lazy"
                        decoding="async"
                        aria-hidden
                      />
                    </div>
                    <div>
                      <h3 className="font-display text-lg text-ink">{item.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-k2k-navy/90">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div>
            <IconSectionHeading
              icon={KTK_ICONS.calendar}
              eyebrow="The process"
              title="From starter to pickup"
            />
            <ol className="relative mt-6 space-y-0 sm:mt-8">
              {PROCESS_STEPS.map((step, i) => (
                <li
                  key={step.title}
                  className="relative flex gap-4 pb-8 last:pb-0 sm:gap-5 sm:pb-10"
                >
                  <div className="flex flex-col items-center pt-1">
                    <span
                      className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#111] bg-k2k-blue font-display text-base text-white shadow-sm sm:h-11 sm:w-11 sm:text-lg"
                      aria-hidden
                    >
                      {i + 1}
                    </span>
                    {i < PROCESS_STEPS.length - 1 && (
                      <div
                        className="mt-2 w-0.5 flex-1 min-h-[3rem] bg-[#111]/15 sm:min-h-[3.5rem]"
                        aria-hidden
                      />
                    )}
                  </div>
                  <ScrollReveal
                    delay={Math.min(i + 1, 4) as 0 | 1 | 2 | 3 | 4}
                    className="mb-1 flex-1 sm:mb-2"
                  >
                    <div className="k2k-surface k2k-hover-lift rounded-2xl border-t-2 border-t-k2k-blue/15 p-4 transition duration-300 hover:border-t-k2k-blue/35 sm:p-5">
                      <h3 className="font-display text-lg text-ink">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-k2k-navy/90">
                        {step.desc}
                      </p>
                    </div>
                  </ScrollReveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <Section bg="white">
        <IconSectionHeading
          icon={KTK_ICONS.heart}
          eyebrow="What we stand for"
          title="Values you can taste"
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {VALUES.map((item, i) => (
            <ScrollReveal key={item.title} delay={Math.min(i + 1, 4) as 0 | 1 | 2 | 3 | 4}>
              <div className="k2k-surface k2k-hover-lift group rounded-2xl border-t-2 border-t-k2k-blue/15 p-7 text-center transition duration-300 hover:border-t-k2k-blue/35">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#111] bg-[#f8f4ed] transition duration-300 group-hover:scale-105">
                  <img
                    src={item.icon}
                    alt=""
                    className="k2k-breathe h-8 w-8 object-contain opacity-90 transition duration-300 group-hover:scale-110 group-hover:animate-none"
                    loading="lazy"
                    decoding="async"
                    aria-hidden
                  />
                </div>
                <h3 className="mt-5 font-display text-xl text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-k2k-navy/90">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <section className="relative overflow-hidden bg-k2k-navy py-20 sm:py-28">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(194,168,120,0.12),transparent_55%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-white sm:h-20"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid min-w-0 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <ScrollReveal className="min-w-0">
              <div className="group flex items-center gap-3">
                <img
                  src={KTK_ICONS.location}
                  alt=""
                  className="k2k-breathe h-10 w-10 object-contain brightness-0 invert opacity-70 transition duration-300 group-hover:scale-110 group-hover:animate-none"
                  loading="lazy"
                  decoding="async"
                  aria-hidden
                />
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-wheat/80">
                  Daniel Island &amp; Lowcountry
                </p>
              </div>
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
                <Link
                  to="/custom-orders"
                  className="group inline-flex k2k-button k2k-button-primary"
                >
                  Request an Order{" "}
                  <ArrowRight className="ml-1.5 h-4 w-4 transition duration-300 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={1} className="min-w-0">
              <MapPlaceholder variant="dark" />
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
