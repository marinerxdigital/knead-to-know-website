import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/sections/Section";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { BUSINESS, SITE_URL } from "@/lib/business";

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

const FAQS = [
  {
    q: "How far in advance should I order?",
    a: "For everyday menu items, many loaves, cookies, and bagels can be ordered with 24 hours notice (subject to availability). Larger orders, bakery boxes, and custom requests are best placed at least 48 hours ahead. Holiday and event orders should be placed as early as possible.",
  },
  {
    q: "Do you offer pickup and delivery?",
    a: "Pickup is available on Daniel Island by appointment. Delivery is offered for larger orders and catering within the greater Charleston area. Details and fees are confirmed after your inquiry.",
  },
  {
    q: "How do I place a custom or pre-order?",
    a: "Use the Custom Orders form. Select items, tell us quantities and date, and submit your details. We will confirm availability and pricing before your order is finalized.",
  },
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
    q: "Do large orders require a deposit?",
    a: "For orders over a certain size or for events, a deposit may be required to reserve your date and ingredients. This will be discussed during confirmation.",
  },
  {
    q: "What is the best way to contact you?",
    a: `Call or text ${BUSINESS.phone}, submit a Custom Orders or Contact form, or DM to place your order. Pre-orders only — everything is freshly baked to order.`,
  },
  {
    q: "Can I order for catering or events?",
    a: "Absolutely. Visit the Catering page to submit details about your event date, guest count, and preferred items. We prepare cookie trays, bread baskets, brunch spreads, and more.",
  },
  {
    q: "Are your product photos final?",
    a: "The product cards and images on the site are representative. Actual bakes may vary slightly in appearance due to the handmade nature of small-batch sourdough.",
  },
];

function FAQPage() {
  return (
    <>
      <section className="bg-white pb-12 pt-16 sm:pt-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <SectionHeading
            as="h1"
            eyebrow="FAQ"
            title="Common questions"
            intro="Answers about ordering, timing, delivery, custom work, and more from Knead To Know."
          />
        </div>
      </section>

      <Section>
        <div className="max-w-3xl mx-auto">
          <FAQAccordion items={FAQS} />
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">Still have a question?</p>
          <Link
            to="/contact"
            className="mt-3 inline-flex h-11 items-center rounded-full border border-forest/30 px-7 text-sm text-forest hover:bg-white"
          >
            Contact us
          </Link>
          <span className="mx-3 text-muted-foreground">or</span>
          <Link
            to="/custom-orders"
            className="inline-flex h-11 items-center rounded-full bg-forest px-7 text-sm text-white"
          >
            Start a custom order
          </Link>
        </div>
      </Section>
    </>
  );
}
