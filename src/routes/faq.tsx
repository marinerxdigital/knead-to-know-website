import { createFileRoute, Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { CTASection } from "@/components/sections/CTASection";
import { FAQPanel } from "@/components/sections/FAQPanel";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BUSINESS, SITE_URL } from "@/lib/business";
import { BAKERY_PHOTOS } from "@/lib/products";
import type { FAQGroup } from "@/components/ui/FAQAccordion";
import { cn } from "@/lib/utils";
import { KTK_ICONS } from "@/lib/design-assets";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | Knead To Know" },
      {
        name: "description",
        content:
          "Frequently asked questions about ordering bread, cookies, bagels, custom orders, and catering from Knead To Know on Daniel Island.",
      },
      { property: "og:title", content: "FAQ | Knead To Know" },
      {
        property: "og:description",
        content: "Answers to common questions about Knead To Know bakery orders and services.",
      },
      { property: "og:url", content: `${SITE_URL}/faq` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/faq` }],
  }),
  component: FAQPage,
});

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

const FAQ_GROUPS: ReadonlyArray<FAQGroup & { icon: string }> = [
  {
    title: "Ordering & timing",
    icon: KTK_ICONS.calendar,
    items: [
      {
        q: "How far in advance should I order?",
        a: "For everyday menu items, many loaves, cookies, and bagels can be ordered with 24 hours notice (subject to availability). Larger orders, bakery boxes, and custom requests are best placed at least 48 hours ahead. Holiday and event orders should be placed as early as possible.",
      },
      {
        q: "How do I place a custom or pre-order?",
        a: "Use the Custom Orders form. Select items, tell us quantities and date, and submit your details. We will confirm availability and pricing before your order is finalized.",
      },
      {
        q: "Do large orders require a deposit?",
        a: "For orders over a certain size or for events, a deposit may be required to reserve your date and ingredients. This will be discussed during confirmation.",
      },
      {
        q: "What is the best way to contact you?",
        a: `Call or text ${BUSINESS.phone}, submit a Custom Orders or Contact form, or DM to place your order. Pre-orders only — everything is freshly baked to order.`,
      },
    ],
  },
  {
    title: "Pickup & delivery",
    icon: KTK_ICONS.pickup,
    items: [
      {
        q: "Do you offer pickup and delivery?",
        a: "Pickup is available on Daniel Island by appointment. Delivery is offered for larger orders and catering within the greater Charleston area. Details and fees are confirmed after your inquiry.",
      },
    ],
  },
  {
    title: "Custom & catering",
    icon: KTK_ICONS.gift,
    items: [
      {
        q: "Can I order for catering or events?",
        a: "Absolutely. Visit the Catering page to submit details about your event date, guest count, and preferred items. We prepare cookie trays, bread baskets, brunch spreads, and more.",
      },
    ],
  },
  {
    title: "Products & pricing",
    icon: KTK_ICONS.cookie,
    items: [
      {
        q: "Can you accommodate allergies or special requests?",
        a: "Please note any allergies or restrictions in your order. While we bake with wheat, dairy, and nuts in our kitchen, we will advise on suitable options or substitutions when possible.",
      },
      {
        q: "Do you have seasonal items?",
        a: "Yes. We regularly rotate limited offerings using local and seasonal ingredients. Check the menu regularly or ask about current seasonal bakes when you order.",
      },
      {
        q: "Is pricing final when I submit an inquiry?",
        a: "Standard menu pricing applies to regular items. Custom work, large quantities, or special packaging may have adjusted pricing — we always confirm the total before you are charged.",
      },
      {
        q: "Are your product photos final?",
        a: "The product cards and images on the site are representative. Actual bakes may vary slightly in appearance due to the handmade nature of small-batch sourdough.",
      },
    ],
  },
];

const QUICK_LINKS = [
  { to: "/custom-orders" as const, label: "Custom orders", icon: KTK_ICONS.calendar },
  { to: "/catering" as const, label: "Catering", icon: KTK_ICONS.gift },
  { to: "/contact" as const, label: "Contact", icon: KTK_ICONS.envelope },
  { to: "/menu" as const, label: "View menu", icon: KTK_ICONS.bread },
];

function FAQAccordionBlack({ groups }: { groups: ReadonlyArray<FAQGroup & { icon: string }> }) {
  return (
    <div className="space-y-12">
      {groups.map((group, gi) => (
        <ScrollReveal key={group.title} delay={Math.min(gi + 1, 4) as 0 | 1 | 2 | 3 | 4}>
          <div className="min-w-0">
            <div className="group mb-5 flex min-w-0 items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#111] bg-[#f8f4ed] transition duration-300 group-hover:scale-105 sm:h-11 sm:w-11">
                <img
                  src={group.icon}
                  alt=""
                  className="k2k-breathe h-6 w-6 object-contain opacity-85 transition duration-300 group-hover:scale-110 group-hover:animate-none sm:h-7 sm:w-7"
                  loading="lazy"
                  decoding="async"
                  aria-hidden
                />
              </span>
              <span className="h-px min-w-4 flex-1 bg-k2k-blue/12" aria-hidden />
              <h3 className="shrink-0 font-display text-lg text-ink sm:text-xl">{group.title}</h3>
              <span className="h-px min-w-4 flex-1 bg-k2k-blue/12" aria-hidden />
            </div>
            <Accordion type="single" collapsible className="k2k-faq-accordion-list w-full">
              {group.items.map((item, i) => (
                <AccordionItem
                  key={`group-${gi}-item-${i}`}
                  value={`group-${gi}-item-${i}`}
                  className="overflow-hidden rounded-2xl border border-[#111] border-t-2 border-t-k2k-blue/10 bg-white shadow-[0_6px_24px_-14px_rgba(17,17,17,0.18)] transition-all duration-300 data-[state=open]:border-k2k-blue data-[state=open]:border-t-k2k-blue/30 data-[state=open]:shadow-[0_12px_32px_-16px_rgba(17,17,17,0.22)]"
                >
                  <AccordionTrigger
                    className={cn(
                      "relative min-h-[3.25rem] px-5 py-4 text-left text-base font-medium text-ink hover:no-underline sm:min-h-[3.5rem] sm:px-6 sm:py-5 sm:text-lg",
                      "before:absolute before:inset-y-3 before:left-0 before:w-1 before:rounded-r-full before:bg-transparent before:transition-colors before:duration-300",
                      "[&[data-state=open]]:text-k2k-navy [&[data-state=open]]:before:bg-wheat",
                    )}
                  >
                    <span className="pr-4 leading-snug">{item.q}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-5 text-sm leading-relaxed text-k2k-navy/90 sm:px-6 sm:pb-6">
                    <div className="border-t border-k2k-blue/10 pt-4">{item.a}</div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}

function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Common questions"
        intro="Answers about ordering, timing, delivery, custom work, and more from Knead To Know."
        image={BAKERY_PHOTOS.mangoMacadamiaCookies}
        imageAlt="Mango macadamia sourdough cookies from Knead To Know"
        imagePosition="right"
      >
        <div
          className="group k2k-surface flex max-w-xl items-center gap-3 rounded-2xl px-5 py-4"
          role="presentation"
          aria-hidden
        >
          <Search
            className="h-5 w-5 shrink-0 text-k2k-blue/60 transition duration-300 group-hover:scale-110 group-hover:text-k2k-blue"
            aria-hidden
          />
          <span className="text-sm text-k2k-navy/85">
            Browse topics below — ordering, pickup, catering, and more
          </span>
        </div>

        <div className="mt-6 flex min-w-0 flex-wrap items-center gap-2.5 sm:gap-3">
          {QUICK_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "group inline-flex h-10 items-center gap-2 rounded-full border border-[#111] bg-white px-4 text-xs font-medium uppercase tracking-[0.12em] text-k2k-navy transition",
                "hover:border-[#111] hover:bg-k2k-blue/5 hover:text-k2k-blue",
              )}
            >
              <img
                src={link.icon}
                alt=""
                className="h-4 w-4 object-contain opacity-80 transition duration-300 group-hover:scale-110"
                loading="lazy"
                decoding="async"
                aria-hidden
              />
              {link.label}
            </Link>
          ))}
        </div>
      </PageHero>

      <Section bg="beige">
        <ScrollReveal className="mx-auto min-w-0 max-w-3xl">
          <FAQPanel
            accentRail
            className="border-t-2 border-t-k2k-blue/25 pl-5 sm:pl-7"
            header={
              <div className="flex items-center justify-between bg-[#f8f4ed]/50">
                <div className="group flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#111] bg-white transition duration-300 group-hover:scale-105">
                    <img
                      src={KTK_ICONS.wheat}
                      alt=""
                      className="k2k-breathe h-6 w-6 object-contain opacity-80 transition duration-300 group-hover:scale-110 group-hover:animate-none"
                      loading="lazy"
                      decoding="async"
                      aria-hidden
                    />
                  </span>
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-k2k-navy/80">
                      All topics
                    </p>
                    <HarborLine className="mt-2 h-2 w-20" />
                  </div>
                </div>
                <span className="hidden rounded-full border border-[#111] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground sm:inline">
                  {FAQ_GROUPS.reduce((n, g) => n + g.items.length, 0)} answers
                </span>
              </div>
            }
          >
            <FAQAccordionBlack groups={FAQ_GROUPS} />
          </FAQPanel>
        </ScrollReveal>
      </Section>

      <CTASection
        eyebrow="Still have questions?"
        title="We're here to help"
        text="Call, text, or send a message — we'll confirm availability and walk you through your order."
        primaryLabel="Contact us"
        primaryTo="/contact"
        secondaryLabel="Start a custom order"
        secondaryTo="/custom-orders"
        tertiaryLabel="Catering"
        tertiaryTo="/catering"
      />
    </>
  );
}
