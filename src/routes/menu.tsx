import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/sections/Section";
import { K2KProductCard } from "@/components/ui/K2KProductCard";
import { K2K_PRODUCTS, K2K_CATEGORIES, type K2KProductCategory } from "@/lib/k2k-products";
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

const PRODUCT_CARDS_PATH = "/assets/knead-to-know/product-cards";
const BANNER_PATH = "/assets/knead-to-know/banners/Knead_To_Know_Promo_Banner_Strip.png";
const BADGE_PATH = "/assets/knead-to-know/badges/Knead_To_Know_Badge_Label_Tag.png";

// Use buttons as decorative reference
const PRIMARY_BTN = "/assets/knead-to-know/buttons/Knead_To_Know_Primary_Button_Order_Now.png";

function MenuPage() {
  return (
    <>
      <section className="bg-white pb-12 pt-16 sm:pt-24 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-forest">Daniel Island, SC</p>
            <h1 className="mt-3 font-display text-5xl leading-[1.02] text-ink sm:text-6xl">Our Menu</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Small-batch sourdough breads, cookies, and bagels. Fresh daily. Pre-order for pickup or delivery in the Charleston area.
            </p>
          </div>
        </div>
      </section>

      {/* Promo banner using official asset */}
      <div className="border-b border-border/30 bg-white">
        <img
          src={BANNER_PATH}
          alt="Knead To Know bakery announcement and pre-order information"
          className="mx-auto w-full max-w-7xl h-auto"
        />
      </div>

      <Section bg="white">
        <div className="flex items-center justify-between mb-8">
          <SectionHeading
            eyebrow="All products"
            title="Fresh breads, cookies & bagels."
            intro="All items made in limited small batches. Availability confirmed at order."
          />
          <Link to="/contact" className="hidden md:inline-flex k2k-button k2k-button-primary text-sm">
            Pre-Order Now
          </Link>
        </div>

        {/* Category grids - render official KTK product card PNGs directly */}
        {K2K_CATEGORIES.map((category) => {
          const items = K2K_PRODUCTS.filter((p) => p.category === category);
          return (
            <div key={category} className="mb-16 last:mb-0">
              <div className="flex items-center gap-4 mb-6">
                <h2 className="font-display text-3xl text-ink tracking-tight">{category}</h2>
                {/* Badge asset used decoratively for category */}
                <img
                  src={BADGE_PATH}
                  alt=""
                  className="h-7 w-auto opacity-70"
                  aria-hidden
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {items.map((product) => (
                  <K2KProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          );
        })}

        <div className="mt-16 pt-10 border-t border-border/40 text-center">
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Prices and availability subject to change. All pre-orders confirmed via inquiry. 
            We use the official product card frames from our brand asset system.
          </p>

          {/* Decorative use of button asset */}
          <div className="mt-8 flex justify-center">
            <img
              src={PRIMARY_BTN}
              alt="Order Now"
              className="h-12 w-auto opacity-80"
            />
          </div>

          <Link
            to="/contact"
            className="mt-6 inline-flex k2k-button k2k-button-primary"
          >
            Start Your Pre-Order
          </Link>
        </div>
      </Section>

      <Section bg="white">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading
            align="center"
            eyebrow="Ordering"
            title="How to order."
          />
          <div className="mt-8 grid gap-6 text-left sm:grid-cols-3 text-sm">
            <div className="rounded-2xl border border-border/40 p-6">
              <div className="font-medium mb-1 text-k2k-blue">1. Choose</div>
              <p className="text-muted-foreground">Browse the menu and note what you'd like.</p>
            </div>
            <div className="rounded-2xl border border-border/40 p-6">
              <div className="font-medium mb-1 text-k2k-blue">2. Submit inquiry</div>
              <p className="text-muted-foreground">Use the contact form with quantities and pickup date.</p>
            </div>
            <div className="rounded-2xl border border-border/40 p-6">
              <div className="font-medium mb-1 text-k2k-blue">3. Confirm</div>
              <p className="text-muted-foreground">We confirm availability and details. Fresh baked for you.</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
