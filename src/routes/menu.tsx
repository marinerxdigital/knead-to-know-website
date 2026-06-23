import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/sections/Section";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { InteractiveMenuBuilder } from "@/components/menu/InteractiveMenuBuilder";
import { BAKERY_PHOTOS } from "@/lib/products";
import { BUSINESS, SITE_URL } from "@/lib/business";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu | Knead To Know Sweet & Sour | Daniel Island Bakery" },
      {
        name: "description",
        content:
          "Browse our menu of sourdough breads, sourdough cookies, and sourdough bagels with verified pricing. Build your pre-order and text Wendy at Knead To Know Sweet & Sour on Daniel Island.",
      },
      { property: "og:title", content: "Menu | Knead To Know Sweet & Sour" },
      {
        property: "og:description",
        content:
          "Interactive menu — sourdough breads, cookies, and bagels. Build your pre-order and contact Wendy on Daniel Island, SC.",
      },
      { property: "og:url", content: `${SITE_URL}/menu` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/menu` }],
  }),
  component: MenuPage,
});

const BANNER_PATH = "/assets/knead-to-know/banners/Knead_To_Know_Promo_Banner_Strip.png";

function MenuPage() {
  return (
    <>
      <PageHero
        eyebrow="Daniel Island, SC"
        title="Our Menu"
        intro="Build your pre-order tray — sourdough breads, cookies, and bagels made fresh to order in small batches by Wendy Mercado."
        image={BAKERY_PHOTOS.chocolateChipCookies}
        imageAlt="Chocolate chip sourdough cookies from Knead To Know"
      >
        <div className="flex flex-wrap items-center gap-3">
          <span className="group inline-flex items-center gap-2 rounded-full border border-k2k-black bg-k2k-blue px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_28px_-10px_rgba(59,110,145,0.55)]">
            <Sparkles
              className="h-4 w-4 text-wheat transition duration-300 group-hover:scale-110 group-hover:rotate-12"
              aria-hidden
            />
            {BUSINESS.orderingModel}
          </span>
          <span className="k2k-surface inline-flex rounded-full px-4 py-2 text-sm font-medium text-ink">
            {BUSINESS.fulfillment}
          </span>
        </div>
      </PageHero>

      <div className="border-b border-k2k-black/10 bg-white">
        <img
          src={BANNER_PATH}
          alt="Knead To Know bakery announcement and pre-order information"
          className="mx-auto h-auto w-full max-w-7xl"
        />
      </div>

      <InteractiveMenuBuilder />

      <Section bg="beige" variant="editorial">
        <ScrollReveal>
          <div className="k2k-surface k2k-accent-rail relative mx-auto max-w-4xl overflow-hidden rounded-[2.25rem] border-t-2 border-t-k2k-blue/30 pl-5 p-10 sm:pl-7 sm:p-14">
            <div className="relative text-center">
              <SectionHeading
                align="center"
                decorative
                eyebrow="Ready to order"
                title="Pre-order your favorites"
                intro="Select items above, text Wendy your tray, or call directly — she confirms availability and bakes fresh for pickup on Daniel Island."
              />
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <Link
                  to="/custom-orders"
                  className="group k2k-button k2k-button-primary inline-flex !min-h-11 items-center gap-2 !px-6 !text-xs shadow-[0_16px_40px_-12px_rgba(59,110,145,0.55)] sm:!px-8"
                >
                  Full Order Form
                  <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5" />
                </Link>
                <a
                  href={BUSINESS.phoneTel}
                  className="k2k-button k2k-button-outline inline-flex !min-h-11 !px-6 !text-xs sm:!px-8"
                >
                  {BUSINESS.phone}
                </a>
                <Link
                  to="/catering"
                  className="k2k-button k2k-button-outline inline-flex !min-h-11 !px-6 !text-xs sm:!px-8"
                >
                  Catering &amp; Events
                </Link>
              </div>
              <p className="mt-6 text-xs font-medium uppercase tracking-[0.18em] text-k2k-blue">
                {BUSINESS.orderingModel} · {BUSINESS.fulfillment}
              </p>
              <p className="mt-2 text-[11px] text-muted-foreground">
                Final order timing and availability are confirmed directly with Wendy.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
