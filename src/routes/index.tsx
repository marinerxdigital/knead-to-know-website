import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "@/components/sections/Section";
import { SectionDivider } from "@/components/sections/SectionDivider";
import { CTASection } from "@/components/sections/CTASection";
import { K2KProductCard } from "@/components/ui/K2KProductCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { HOME_FEATURED_PRODUCTS } from "@/lib/products";
import { SITE_URL } from "@/lib/business";


const LOGO_URL = "/assets/knead-to-know/logo/Knead_To_Know_Primary_Circular_Logo.png";
const BANNER_URL = "/assets/knead-to-know/banners/Knead_To_Know_Promo_Banner_Strip.png";
const DIVIDER_URL = "/assets/knead-to-know/badges/Knead_To_Know_Section_Divider.png";

const TRUST_ITEMS = [
  { icon: "/assets/knead-to-know/icons/Knead_To_Know_Location_Pin_Icon.png", label: "Daniel Island, SC" },
  { icon: "/assets/knead-to-know/icons/Knead_To_Know_Wheat_Icon.png", label: "Small-Batch Daily" },
  { icon: "/assets/knead-to-know/icons/Knead_To_Know_Bread_Icon.png", label: "Artisan Sourdough" },
  { icon: "/assets/knead-to-know/icons/Knead_To_Know_Calendar_Preorder_Icon.png", label: "Pre-Orders Welcome" },
];

const FEATURED_OFFERINGS = [
  { icon: "/assets/knead-to-know/icons/Knead_To_Know_Bread_Icon.png", title: "Artisan Breads", text: "Naturally leavened sourdough loaves baked in small batches." },
  { icon: "/assets/knead-to-know/icons/Knead_To_Know_Cookie_Icon.png", title: "Cookies", text: "Chewy sourdough cookies in signature and seasonal flavors." },
  { icon: "/assets/knead-to-know/icons/Knead_To_Know_Dough_Swirl_Icon.png", title: "Pastries", text: "Morning buns, croissants, muffins, and rotating seasonal bakes." },
  { icon: "/assets/knead-to-know/icons/Knead_To_Know_Heart_Favorite_Icon.png", title: "Seasonal Bakes", text: "Limited runs highlighting fresh Lowcountry ingredients." },
  { icon: "/assets/knead-to-know/icons/Knead_To_Know_Gift_Box_Icon.png", title: "Bakery Boxes", text: "Curated boxes for gifting, brunch, and gatherings." },
  { icon: "/assets/knead-to-know/icons/Knead_To_Know_Calendar_Preorder_Icon.png", title: "Custom Orders", text: "Bread orders, cookie trays, and bespoke bakery requests." },
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
            <div className="k2k-product-card flex aspect-[4/5] flex-col items-center justify-center rounded-[2rem] p-10 text-center shadow-[0_30px_60px_-40px_rgba(79,126,168,0.35)]">
              <img
                src={LOGO_URL}
                alt="Knead To Know Bakery"
                className="h-40 w-40 rounded-full object-contain sm:h-48 sm:w-48"
              />
              <p className="mt-6 font-display text-2xl text-ink">Small-batch sourdough</p>
              <p className="mt-2 text-sm text-muted-foreground">Daniel Island · Est. 2026</p>
              <div className="mt-8 flex gap-4 opacity-80">
                <img src="/assets/knead-to-know/icons/Knead_To_Know_Bread_Icon.png" alt="" className="h-8 w-8" aria-hidden />
                <img src="/assets/knead-to-know/icons/Knead_To_Know_Cookie_Icon.png" alt="" className="h-8 w-8" aria-hidden />
                <img src="/assets/knead-to-know/icons/Knead_To_Know_Wheat_Icon.png" alt="" className="h-8 w-8" aria-hidden />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Local trust strip */}
      <section className="border-y border-k2k-blue/10 bg-[#f8fafc]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-8 sm:grid-cols-4 sm:px-8">
          {TRUST_ITEMS.map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-2 text-center sm:flex-row sm:text-left">
              <img src={item.icon} alt="" className="h-8 w-8 object-contain" aria-hidden />
              <span className="text-xs font-medium uppercase tracking-[0.14em] text-ink/80">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Promo banner */}
      <div className="bg-white">
        <img
          src={BANNER_URL}
          alt="Knead To Know bakery announcements: fresh bread, pre-orders, and small-batch cookies"
          className="mx-auto w-full max-w-7xl"
        />
      </div>

      <SectionDivider bg="white" />

      {/* 3. Featured offerings */}
      <Section bg="white">
        <SectionHeading
          eyebrow="What we bake"
          title="Featured offerings"
          intro="Artisan breads, cookies, pastries, seasonal bakes, bakery boxes, and custom orders — all made in small batches on Daniel Island."
          align="center"
        />
        <div className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_OFFERINGS.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-k2k-blue/15 bg-white p-7 transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-30px_rgba(79,126,168,0.25)]"
            >
              <img src={item.icon} alt="" className="mb-4 h-10 w-10 object-contain" aria-hidden />
              <h3 className="font-display text-2xl text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <SectionDivider bg="beige" />

      {/* 4. Menu preview — featured products */}
      <Section bg="beige">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Menu preview"
            title="Signature sourdough bakes"
            intro="Three featured breads, two cookies, and two bagels from our official product card collection."
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

      <SectionDivider bg="white" />

      {/* 5. Bakery boxes */}
      <Section bg="white">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Bakery boxes"
              title="Curated boxes for gifting and gatherings"
              intro="Cookie boxes, breakfast assortments, mixed pastry boxes, and event boxes — assembled to order for Daniel Island neighbors and Charleston celebrations."
            />
            <Link
              to="/custom-orders"
              className="mt-7 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-k2k-blue px-6 text-sm font-medium text-white hover:bg-k2k-navy"
            >
              Order a Bakery Box <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="overflow-hidden rounded-3xl border border-k2k-blue/15 bg-[#f8fafc] p-8">
            <img
              src="/assets/knead-to-know/cards/Knead_To_Know_Container_Card.png"
              alt="Knead To Know bakery box presentation"
              className="mx-auto h-auto w-full max-w-md object-contain"
            />
          </div>
        </div>
      </Section>

      <SectionDivider bg="beige" />

      {/* 6. Custom orders */}
      <Section bg="beige">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <SectionHeading
              eyebrow="Custom orders"
              title="Pre-order breads, cookies, and special requests"
              intro="Select from our 16 signature sourdough products or describe a custom bakery box, cookie tray, or brunch assortment. We confirm availability and pricing after inquiry."
            />
            <Link
              to="/custom-orders"
              className="mt-7 inline-flex h-11 items-center justify-center gap-2 rounded-full border border-k2k-blue/25 px-6 text-sm font-medium text-k2k-blue hover:border-k2k-blue/45"
            >
              Start a Custom Order <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="order-1 overflow-hidden rounded-3xl border border-k2k-blue/15 bg-white p-6 lg:order-2">
            <img
              src="/assets/knead-to-know/icons/Knead_To_Know_Pickup_Bag_Icon.png"
              alt=""
              className="mx-auto mb-4 h-16 w-16 object-contain"
              aria-hidden
            />
            <p className="text-center text-sm text-muted-foreground">
              Bread orders · Cookie trays · Brunch platters · Seasonal specials · Custom bakery requests
            </p>
          </div>
        </div>
      </Section>

      <SectionDivider bg="white" />

      {/* 7. Catering */}
      <Section bg="white">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-3xl border border-k2k-blue/15 bg-[#f8fafc] p-8">
            <img
              src="/assets/knead-to-know/cards/Knead_To_Know_Feature_Card.png"
              alt="Knead To Know catering and events presentation"
              className="mx-auto h-auto w-full max-w-md object-contain"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Catering & events"
              title="Premium spreads for offices, gatherings, and celebrations"
              intro="Office breakfasts, brunch spreads, cookie platters, pastry trays, bread baskets, corporate gifting, and neighborhood events across Daniel Island and Charleston."
            />
            <Link
              to="/catering"
              className="mt-7 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-k2k-blue px-6 text-sm font-medium text-white hover:bg-k2k-navy"
            >
              Explore Catering <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      <SectionDivider bg="beige" />

      {/* 8. Gallery preview */}
      <Section bg="beige">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Gallery"
            title="Fresh from the bakery"
            intro="Browse our breads, cookies, bagels, pastries, bakery boxes, and seasonal offerings."
          />
          <Link
            to="/gallery"
            className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full border border-k2k-blue/25 px-6 text-sm font-medium text-k2k-blue hover:border-k2k-blue/45"
          >
            View the Gallery <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HOME_FEATURED_PRODUCTS.slice(0, 4).map((product) => (
            <K2KProductCard key={product.id} product={product} showCta={false} />
          ))}
        </div>
      </Section>

      <SectionDivider bg="white" />

      {/* 9. About preview */}
      <Section bg="white">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="About"
              title="A boutique bakery on Daniel Island"
              intro="Knead To Know is a local Daniel Island bakery established in 2026, focused on small-batch baked goods, artisan bread, cookies, pastries, bakery boxes, and seasonal offerings."
            />
            <Link
              to="/about"
              className="mt-7 inline-flex h-11 items-center justify-center gap-2 rounded-full border border-k2k-blue/25 px-6 text-sm font-medium text-k2k-blue hover:border-k2k-blue/45"
            >
              About Knead To Know <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="flex items-center justify-center rounded-3xl border border-k2k-blue/15 bg-[#f8fafc] p-12 text-center">
            <div>
              <img src={LOGO_URL} alt="Knead To Know" className="mx-auto h-32 w-32 rounded-full object-contain" />
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-k2k-blue">Est. 2026 · Daniel Island</p>
            </div>
          </div>
        </div>
      </Section>

      <SectionDivider bg="beige" />

      {/* 10. FAQ preview */}
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
        <div className="mx-auto mt-10 flex justify-center">
          <img src={DIVIDER_URL} alt="" className="h-6 w-auto opacity-60" aria-hidden />
        </div>
      </Section>

      {/* 11. Final CTA */}
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