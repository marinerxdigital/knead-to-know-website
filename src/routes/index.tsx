import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "@/components/sections/Section";
import { SectionDivider } from "@/components/sections/SectionDivider";
import { CTASection } from "@/components/sections/CTASection";
import { K2KProductCard } from "@/components/ui/K2KProductCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { BAKERY_PHOTOS, HOME_FEATURED_PRODUCTS } from "@/lib/products";
import { SITE_URL } from "@/lib/business";

const LOGO_URL = "/assets/knead-to-know/logo/Knead_To_Know_Primary_Circular_Logo.png";

const TRUST_ITEMS = [
  {
    icon: "/assets/knead-to-know/icons/Knead_To_Know_Location_Pin_Icon.png",
    label: "Daniel Island, SC",
  },
  { icon: "/assets/knead-to-know/icons/Knead_To_Know_Wheat_Icon.png", label: "Small-Batch Daily" },
  { icon: "/assets/knead-to-know/icons/Knead_To_Know_Bread_Icon.png", label: "Artisan Sourdough" },
  {
    icon: "/assets/knead-to-know/icons/Knead_To_Know_Calendar_Preorder_Icon.png",
    label: "Pre-Orders Welcome",
  },
];

const HOME_FAQS = [
  {
    q: "How do I place a pre-order?",
    a: "Use the Custom Orders form to select items, share quantities and your preferred date. We confirm availability and next steps by email or phone.",
  },
  {
    q: "Where is pickup located?",
    a: "Pickup is on Daniel Island, South Carolina. Exact address and hours are confirmed after your order inquiry.",
  },
  {
    q: "When are fresh bakes available?",
    a: "Fresh breads, cookies, and bagels are baked in limited small batches. Availability varies — pre-ordering is recommended.",
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
        title: "Knead To Know Bakery | Boutique Sourdough & Small-Batch Bakes on Daniel Island",
      },
      {
        name: "description",
        content:
          "Knead To Know is a boutique home bakery on Daniel Island, South Carolina offering small-batch sourdough bread, cookies, bagels, pastries, bakery boxes, seasonal baked goods, and custom orders by inquiry or pre-order.",
      },
      {
        property: "og:title",
        content: "Knead To Know Bakery | Boutique Sourdough & Small-Batch Bakes on Daniel Island",
      },
      {
        property: "og:description",
        content:
          "Knead To Know is a boutique home bakery on Daniel Island, South Carolina offering small-batch sourdough bread, cookies, bagels, pastries, bakery boxes, seasonal baked goods, and custom orders by inquiry or pre-order.",
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
              Fresh Bread, Cookies, and Bakes Worth Knowing
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Knead To Know is a small-batch bakery on Daniel Island serving fresh breads, cookies,
              pastries, seasonal baked goods, bakery boxes, and custom orders for everyday treats,
              gatherings, and special occasions.
            </p>
            <p className="mt-4 text-sm text-ink/70">
              Boutique sourdough and small-batch baked goods from Daniel Island, South Carolina.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/menu"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-k2k-blue px-7 text-sm font-medium text-white hover:bg-k2k-navy"
              >
                View Menu
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/custom-orders"
                className="inline-flex h-12 items-center justify-center rounded-full border border-k2k-blue/30 bg-white px-7 text-sm font-medium text-k2k-blue transition hover:border-k2k-blue/50"
              >
                Request an Order
              </Link>
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
          title="How to order"
          align="center"
          intro="Three steps from browsing to fresh bakes in hand."
        />
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 text-left sm:grid-cols-3">
          <div className="rounded-2xl border border-k2k-blue/15 bg-white p-7">
            <div className="mb-2 font-display text-xl text-k2k-blue">Choose</div>
            <p className="text-sm text-muted-foreground">
              Browse the menu and note what you would like, or describe a custom request.
            </p>
          </div>
          <div className="rounded-2xl border border-k2k-blue/15 bg-white p-7">
            <div className="mb-2 font-display text-xl text-k2k-blue">Submit inquiry</div>
            <p className="text-sm text-muted-foreground">
              Use the Custom Orders or Catering form with quantities and your date.
            </p>
          </div>
          <div className="rounded-2xl border border-k2k-blue/15 bg-white p-7">
            <div className="mb-2 font-display text-xl text-k2k-blue">Confirm</div>
            <p className="text-sm text-muted-foreground">
              We confirm availability and pricing, then bake fresh for you.
            </p>
          </div>
        </div>
        <div className="mt-10 flex justify-center gap-3">
          <Link
            to="/custom-orders"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-k2k-blue px-6 text-sm font-medium text-white hover:bg-k2k-navy"
          >
            Start a Custom Order <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/catering"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-k2k-blue/25 px-6 text-sm font-medium text-k2k-blue hover:border-k2k-blue/45"
          >
            Explore Catering
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
              title="A boutique bakery on Daniel Island"
              intro="Knead To Know is a local Daniel Island bakery founded by Wendy Mercado in 2026, focused on small-batch baked goods, artisan bread, cookies, pastries, bakery boxes, and seasonal offerings."
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
        text="Tell us about your order for breads, cookies, a custom box, or catering. We will review the details and follow up with availability and next steps."
        primaryLabel="Request an Order"
        primaryTo="/custom-orders"
        secondaryLabel="View Menu"
        secondaryTo="/menu"
      />
    </>
  );
}
