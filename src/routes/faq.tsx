import { createFileRoute, Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { CTASection } from "@/components/sections/CTASection";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import type { FAQGroup } from "@/components/ui/FAQAccordion";
import { BUSINESS, SITE_URL } from "@/lib/business";
import { cn } from "@/lib/utils";

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

const FAQ_GROUPS: ReadonlyArray<FAQGroup> = [
  {
    title: "Ordering & timing",
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
    items: [
      {
        q: "Do you offer pickup and delivery?",
        a: "Pickup is available on Daniel Island by appointment. Delivery is offered for larger orders and catering within the greater Charleston area. Details and fees are confirmed after your inquiry.",
      },
    ],
  },
  {
    title: "Custom & catering",
    items: [
      {
        q: "Can I order for catering or events?",
        a: "Absolutely. Visit the Catering page to submit details about your event date, guest count, and preferred items. We prepare cookie trays, bread baskets, brunch spreads, and more.",
      },
    ],
  },
  {
    title: "Products & pricing",
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
  { to: "/custom-orders" as const, label: "Custom orders" },
  { to: "/catering" as const, label: "Catering" },
  { to: "/contact" as const, label: "Contact" },
];

function WheatScoringMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 24" fill="none" className={className} aria-hidden>
      <path
        d="M2 16c8-14 18-14 22-4 4-10 14-10 18 2"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <path
        d="M8 20c6-8 14-10 20-4"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

function FAQPage() {
  return (
    <>
      <PageHero
        align="center"
        eyebrow="FAQ"
        title="Common questions"
        intro="Answers about ordering, timing, delivery, custom work, and more from Knead To Know."
      >
        <div
          className="mx-auto flex max-w-xl items-center gap-3 rounded-2xl border border-k2k-blue/15 bg-white/80 px-5 py-4 shadow-sm backdrop-blur-sm"
          role="presentation"
          aria-hidden
        >
          <Search className="h-5 w-5 shrink-0 text-k2k-blue/50" />
          <span className="text-sm text-muted-foreground/70">
            Browse topics below — ordering, pickup, catering, and more
          </span>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {QUICK_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "inline-flex h-9 items-center rounded-full border border-k2k-blue/18 bg-white/90 px-4 text-xs font-medium uppercase tracking-[0.12em] text-k2k-navy transition",
                "hover:border-k2k-blue/35 hover:bg-white hover:text-k2k-blue",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </PageHero>

      <Section bg="beige">
        <div className="mx-auto max-w-3xl">
          <div className="overflow-hidden rounded-[2rem] border border-k2k-blue/15 bg-white shadow-[0_28px_70px_-42px_rgba(31,52,71,0.3)] ring-1 ring-k2k-blue/8">
            <div className="flex items-center justify-between border-b border-k2k-blue/10 bg-gradient-to-r from-k2k-blue/[0.04] via-white to-wheat/[0.06] px-6 py-4 sm:px-8">
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-k2k-blue/75">
                All topics
              </p>
              <WheatScoringMark className="w-14 text-wheat/50" />
            </div>
            <div className="px-4 py-6 sm:px-6 sm:py-8">
              <FAQAccordion groups={FAQ_GROUPS} />
            </div>
          </div>
        </div>
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