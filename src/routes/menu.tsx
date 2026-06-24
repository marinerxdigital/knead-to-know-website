import { createFileRoute } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
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
          loading="lazy"
          decoding="async"
        />
      </div>

      <InteractiveMenuBuilder />

      <CTASection
        compact
        eyebrow="Ready to order"
        title="Pre-order your favorites"
        text="Build your tray above, then text Wendy your order — or call directly. She confirms availability and bakes fresh for pickup on Daniel Island."
        primaryLabel="Full Order Form"
        primaryTo="/custom-orders"
        secondaryLabel={BUSINESS.phone}
        secondaryTo={BUSINESS.phoneTel}
        secondaryIsPhone
        tertiaryLabel="Catering & Events"
        tertiaryTo="/catering"
      />
    </>
  );
}
