import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/sections/Section";
import { K2KProductCard } from "@/components/ui/K2KProductCard";
import { ALL_BREADS, ALL_COOKIES, ALL_BAGELS, CATEGORY_PRICING } from "@/lib/products";
import { BUSINESS, SITE_URL } from "@/lib/business";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu | Knead To Know Sweet & Sour | Daniel Island Bakery" },
      {
        name: "description",
        content:
          "Browse our menu of sourdough breads, sourdough cookies, and sourdough bagels with verified pricing. Pre-order fresh bakes from Knead To Know Sweet & Sour on Daniel Island.",
      },
      { property: "og:title", content: "Menu | Knead To Know Sweet & Sour" },
      {
        property: "og:description",
        content:
          "Our full menu: sourdough breads, cookies, and bagels — freshly baked to order on Daniel Island, SC.",
      },
      { property: "og:url", content: `${SITE_URL}/menu` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/menu` }],
  }),
  component: MenuPage,
});

const BANNER_PATH = "/assets/knead-to-know/banners/Knead_To_Know_Promo_Banner_Strip.png";
const BADGE_PATH = "/assets/knead-to-know/badges/Knead_To_Know_Badge_Label_Tag.png";

const CARD_SECTIONS = [
  { title: "Sourdough Bread", items: ALL_BREADS, categoryPricing: CATEGORY_PRICING.bread },
  { title: "Sourdough Cookies", items: ALL_COOKIES, categoryPricing: CATEGORY_PRICING.cookies },
  { title: "Sourdough Bagels", items: ALL_BAGELS, categoryPricing: CATEGORY_PRICING.bagels },
] as const;

function MenuPage() {
  return (
    <>
      <section className="border-b border-border/40 bg-white pb-12 pt-16 sm:pt-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-k2k-blue">
              Daniel Island, SC
            </p>
            <h1 className="mt-3 font-display text-5xl leading-[1.02] text-ink sm:text-6xl">
              Our Menu
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Sourdough breads, cookies, and bagels — freshly baked to order. Pre-orders only.
            </p>
          </div>
        </div>
      </section>

      <div className="border-b border-border/30 bg-white">
        <img
          src={BANNER_PATH}
          alt="Knead To Know bakery announcement and pre-order information"
          className="mx-auto h-auto w-full max-w-7xl"
        />
      </div>

      <Section bg="white">
        <SectionHeading
          eyebrow="Signature menu"
          title="Sourdough breads, cookies & bagels"
          intro="Verified menu from Knead To Know Sweet & Sour. All items are available by pre-order."
        />

        {CARD_SECTIONS.map((section) => (
          <div key={section.title} className="mb-16 last:mb-0">
            <div className="mb-6 flex flex-wrap items-center gap-4">
              <h2 className="font-display text-3xl tracking-tight text-ink">{section.title}</h2>
              {section.categoryPricing && (
                <span className="rounded-full bg-k2k-blue/10 px-3 py-1 text-sm font-medium text-k2k-navy">
                  {section.categoryPricing}
                </span>
              )}
              <img src={BADGE_PATH} alt="" className="h-7 w-auto opacity-70" aria-hidden />
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {section.items.map((product) => (
                <K2KProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        ))}
      </Section>

      <Section bg="white">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading
            align="center"
            eyebrow="Ordering"
            title="Pre-Orders Only"
            intro="Everything is freshly baked to order. To place an order, call, text, DM, or submit an order request."
          />
          <p className="mt-4 text-sm text-muted-foreground">
            Phone:{" "}
            <a href={BUSINESS.phoneTel} className="font-medium text-k2k-blue hover:text-k2k-navy">
              {BUSINESS.phone}
            </a>
          </p>
          <div className="mt-8 grid gap-6 text-left text-sm sm:grid-cols-3">
            <div className="rounded-2xl border border-border/40 p-6">
              <div className="mb-1 font-medium text-k2k-blue">1. Choose</div>
              <p className="text-muted-foreground">Browse the menu and note your items.</p>
            </div>
            <div className="rounded-2xl border border-border/40 p-6">
              <div className="mb-1 font-medium text-k2k-blue">2. Request</div>
              <p className="text-muted-foreground">
                Call, text, DM, or submit an order request with quantities and timing.
              </p>
            </div>
            <div className="rounded-2xl border border-border/40 p-6">
              <div className="mb-1 font-medium text-k2k-blue">3. Confirm</div>
              <p className="text-muted-foreground">
                Wendy confirms availability and bakes fresh for you.
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/custom-orders" className="inline-flex k2k-button k2k-button-primary">
              Request an Order
            </Link>
            <a href={BUSINESS.phoneTel} className="inline-flex k2k-button k2k-button-outline">
              Call Wendy
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
