import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/sections/Section";
import { K2KProductCard } from "@/components/ui/K2KProductCard";
import { ALL_BREADS, ALL_COOKIES, ALL_BAGELS, BROADER_MENU } from "@/lib/products";
import { SITE_URL } from "@/lib/business";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu | Knead To Know | Daniel Island Bakery Breads, Cookies & Bagels" },
      {
        name: "description",
        content:
          "Browse our menu of small-batch sourdough breads, sourdough cookies, and sourdough bagels. Pre-order fresh bakes from our Daniel Island bakery.",
      },
      { property: "og:title", content: "Menu | Knead To Know | Daniel Island Bakery" },
      {
        property: "og:description",
        content:
          "Our full menu: artisan sourdough breads, cookies, and bagels made fresh in small batches on Daniel Island, SC.",
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
  { title: "Sourdough Bread", items: ALL_BREADS },
  { title: "Sourdough Cookies", items: ALL_COOKIES },
  { title: "Sourdough Bagels", items: ALL_BAGELS },
] as const;

const BROADER_SECTIONS = [
  { title: "Breads", items: BROADER_MENU.breads },
  { title: "Cookies", items: BROADER_MENU.cookies },
  { title: "Pastries", items: BROADER_MENU.pastries },
  { title: "Bakery Boxes", items: BROADER_MENU.bakeryBoxes },
  { title: "Custom / Pre-Order Items", items: BROADER_MENU.custom },
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
              Small-batch sourdough breads, cookies, and bagels. Fresh daily. Pre-order for pickup
              or delivery in the Charleston area.
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
          intro="All 16 signature small-batch items. Product photography will be added as fresh bakes are captured."
        />

        {CARD_SECTIONS.map((section) => (
          <div key={section.title} className="mb-16 last:mb-0">
            <div className="mb-6 flex items-center gap-4">
              <h2 className="font-display text-3xl tracking-tight text-ink">{section.title}</h2>
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

      <Section bg="beige">
        <SectionHeading
          eyebrow="Broader bakery menu"
          title="Pastries, boxes & seasonal offerings"
          intro="Beyond our signature sourdough collection, Knead To Know offers pastries, curated bakery boxes, and custom pre-order items."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BROADER_SECTIONS.map((section) => (
            <article
              key={section.title}
              className="rounded-3xl border border-k2k-blue/15 bg-white p-7"
            >
              <h3 className="font-display text-2xl text-ink">{section.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {section.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-k2k-blue" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs uppercase tracking-widest text-k2k-blue">
                Ask us about availability
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section bg="white">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading align="center" eyebrow="Ordering" title="How to order" />
          <div className="mt-8 grid gap-6 text-left text-sm sm:grid-cols-3">
            <div className="rounded-2xl border border-border/40 p-6">
              <div className="mb-1 font-medium text-k2k-blue">1. Choose</div>
              <p className="text-muted-foreground">Browse the menu and note what you would like.</p>
            </div>
            <div className="rounded-2xl border border-border/40 p-6">
              <div className="mb-1 font-medium text-k2k-blue">2. Submit inquiry</div>
              <p className="text-muted-foreground">
                Use the custom orders form with quantities and pickup date.
              </p>
            </div>
            <div className="rounded-2xl border border-border/40 p-6">
              <div className="mb-1 font-medium text-k2k-blue">3. Confirm</div>
              <p className="text-muted-foreground">
                We confirm availability and details. Fresh baked for you.
              </p>
            </div>
          </div>
          <Link to="/custom-orders" className="mt-8 inline-flex k2k-button k2k-button-primary">
            Start Your Pre-Order
          </Link>
        </div>
      </Section>
    </>
  );
}
