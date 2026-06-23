import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "@/components/sections/Section";
import { SectionDivider } from "@/components/sections/SectionDivider";
import { CTASection } from "@/components/sections/CTASection";
import { K2KProductCard } from "@/components/ui/K2KProductCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { BAKERY_PHOTOS, HOME_FEATURED_PRODUCTS } from "@/lib/products";
import { BUSINESS, SITE_URL } from "@/lib/business";

const LOGO_URL = "/assets/knead-to-know/logo/Knead_To_Know_Primary_Circular_Logo.png";

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
      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16 lg:pb-28">
          <div>
            <img
              src={LOGO_URL}
              alt="Knead To Know Bakery"
              className="mb-6 h-24 w-24 rounded-full object-contain sm:h-28 sm:w-28"
            />
            <Eyebrow>Daniel Island, South Carolina</Eyebrow>
            <h1 className="mt-4 font-display text-5xl leading-[1.02] text-ink sm:text-6xl lg:text-7xl">
              Fresh Sourdough, Cookies &amp; Bagels Baked To Order
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {BUSINESS.name} offers freshly baked sourdough bread, sourdough cookies, and sourdough
              bagels by pre-order only.
            </p>
            <p className="mt-4 text-sm text-ink/70">
              Run by {BUSINESS.owner} · Daniel Island, South Carolina · Est. {BUSINESS.established}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/custom-orders"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-k2k-blue px-7 text-sm font-medium text-white hover:bg-k2k-navy"
              >
                Request an Order
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/menu"
                className="inline-flex h-12 items-center justify-center rounded-full border border-k2k-blue/30 bg-white px-7 text-sm font-medium text-k2k-blue transition hover:border-k2k-blue/50"
              >
                View Menu
              </Link>
              <a
                href={BUSINESS.phoneTel}
                className="inline-flex h-12 items-center justify-center rounded-full border border-k2k-blue/30 bg-white px-7 text-sm font-medium text-k2k-blue transition hover:border-k2k-blue/50"
              >
                Call Wendy
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] bg-white p-2 ring-1 ring-k2k-blue/15 shadow-[0_30px_60px_-40px_rgba(79,126,168,0.35)]">
              <img
                src={BAKERY_PHOTOS.hero}
                alt="Fresh sourdough breads, cookies, and bagels from Knead To Know home bakery on Daniel Island"
                className="aspect-[4/5] w-full rounded-[1.6rem] object-cover"
                width={900}
                height={1125}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Local trust strip */}
      <section className="border-y border-k2k-blue/10 bg-[#f8fafc]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-8 sm:grid-cols-4 sm:px-8">
          {TRUST_ITEMS.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-2 text-center sm:flex-row sm:text-left"
            >
              <img src={item.icon} alt="" className="h-8 w-8 object-contain" aria-hidden />
              <span className="text-xs font-medium uppercase tracking-[0.14em] text-ink/80">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider bg="white" accent="wheat" />

      {/* 3. Featured products */}
      <Section bg="white">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="What we bake"
            title="Signature sourdough bakes"
            intro="Artisan breads, cookies, and bagels from our official product collection — made in small batches on Daniel Island."
          />
          <Link
            to="/menu"
            className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full border border-k2k-blue/25 px-6 text-sm font-medium text-k2k-blue hover:border-k2k-blue/45"
          >
            Browse Full Menu <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HOME_FEATURED_PRODUCTS.map((product) => (
            <K2KProductCard key={product.id} product={product} />
          ))}
        </div>
      </Section>

      <SectionDivider bg="beige" />

      {/* 4. How to order */}
      <Section bg="beige">
        <SectionHeading
          eyebrow="Ordering"
          title="Pre-Orders Only"
          align="center"
          intro="Everything is freshly baked to order. To place an order, call, text, DM, or submit an order request."
        />
        <div className="mx-auto mt-8 max-w-xl text-center">
          <p className="text-sm text-muted-foreground">
            Phone:{" "}
            <a href={BUSINESS.phoneTel} className="font-medium text-k2k-blue hover:text-k2k-navy">
              {BUSINESS.phone}
            </a>
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 text-left sm:grid-cols-3">
          <div className="rounded-2xl border border-k2k-blue/15 bg-white p-7">
            <div className="mb-2 font-display text-xl text-k2k-blue">Choose</div>
            <p className="text-sm text-muted-foreground">
              Browse the menu and note your items and quantities.
            </p>
          </div>
          <div className="rounded-2xl border border-k2k-blue/15 bg-white p-7">
            <div className="mb-2 font-display text-xl text-k2k-blue">Request</div>
            <p className="text-sm text-muted-foreground">
              Call, text, DM, or submit an order request with your preferred pickup timing.
            </p>
          </div>
          <div className="rounded-2xl border border-k2k-blue/15 bg-white p-7">
            <div className="mb-2 font-display text-xl text-k2k-blue">Confirm</div>
            <p className="text-sm text-muted-foreground">
              Wendy confirms availability, then bakes fresh for you.
            </p>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            to="/custom-orders"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-k2k-blue px-6 text-sm font-medium text-white hover:bg-k2k-navy"
          >
            Request an Order <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={BUSINESS.phoneTel}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-k2k-blue/25 px-6 text-sm font-medium text-k2k-blue hover:border-k2k-blue/45"
          >
            Call Wendy
          </a>
          <Link
            to="/menu"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-k2k-blue/25 px-6 text-sm font-medium text-k2k-blue hover:border-k2k-blue/45"
          >
            View Menu
          </Link>
        </div>
      </Section>

      <SectionDivider bg="white" accent="wheat" />

      {/* 5. About teaser */}
      <Section bg="white">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="About"
              title="About Knead To Know Sweet &amp; Sour"
              intro={`${BUSINESS.name} is a small-batch bakery by ${BUSINESS.owner}, offering freshly baked sourdough bread, sourdough cookies, and sourdough bagels by pre-order only.`}
            />
            <Link
              to="/about"
              className="mt-7 inline-flex h-11 items-center justify-center gap-2 rounded-full border border-k2k-blue/25 px-6 text-sm font-medium text-k2k-blue hover:border-k2k-blue/45"
            >
              About Knead To Know <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 rounded-3xl border border-k2k-blue/15 bg-[#f8fafc] p-12 text-center">
            <div className="mx-auto h-14 w-14 rounded-full border border-k2k-blue/25" />
            <p className="font-display text-2xl text-ink">Wendy Mercado</p>
            <p className="text-xs uppercase tracking-[0.2em] text-k2k-blue/70">
              Founder &amp; Baker · Est. 2026
            </p>
          </div>
        </div>
      </Section>

      <SectionDivider bg="beige" />

      {/* 6. FAQ teaser + final CTA */}
      <Section bg="beige">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions"
            intro="Quick answers about ordering, pickup, and catering from Knead To Know."
            align="center"
          />
          <div className="mt-10 rounded-3xl border border-k2k-blue/15 bg-white px-6">
            <FAQAccordion items={HOME_FAQS} />
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/faq"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-k2k-blue/25 px-6 text-sm font-medium text-k2k-blue"
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
