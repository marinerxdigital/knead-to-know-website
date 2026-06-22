import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "@/components/sections/Section";
import { SectionDivider } from "@/components/sections/SectionDivider";
import { CTASection } from "@/components/sections/CTASection";
import { CakeImage } from "@/components/media/CakeImage";
import { K2KProductCard } from "@/components/ui/K2KProductCard";
import { K2K_PRODUCTS } from "@/lib/k2k-products";
import { SITE_URL } from "@/lib/business";
import {
  HOME_GALLERY_PREVIEW,
  HOME_HERO_IMAGE,
  PORTFOLIO_IMAGES,
} from "@/lib/cake-photos";

// Use first 6 products for home featured (safe K2K data).
const FEATURED_HOME_PRODUCTS = K2K_PRODUCTS.slice(0, 6);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Knead To Know | Daniel Island Bakery for Bread, Cookies & Pastries" },
      {
        name: "description",
        content:
          "Knead To Know is a Daniel Island bakery serving fresh breads, cookies, pastries, seasonal baked goods, bakery boxes, and custom orders in the Charleston area.",
      },
      { property: "og:title", content: "Knead To Know | Daniel Island Bakery for Bread, Cookies & Pastries" },
      {
        property: "og:description",
        content:
          "Knead To Know is a Daniel Island bakery serving fresh breads, cookies, pastries, seasonal baked goods, bakery boxes, and custom orders in the Charleston area.",
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
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16 lg:pb-28">
          <div>
            <Eyebrow>Daniel Island, SC</Eyebrow>
            <h1 className="mt-4 font-display text-5xl leading-[1.02] text-ink sm:text-6xl lg:text-7xl">
              Fresh Bread, Cookies, and Bakes Worth Knowing
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Knead To Know is a small-batch bakery on Daniel Island serving fresh breads, cookies, pastries, seasonal baked goods, bakery boxes, and custom orders for everyday treats, gatherings, and special occasions.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/menu"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-forest px-7 text-sm font-medium text-primary-foreground hover:bg-forest-dark"
              >
                View Menu
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full border border-forest/20 bg-white px-7 text-sm font-medium text-forest transition hover:border-forest/40 hover:bg-white/70"
              >
                Request an Order
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] bg-white/40 p-2 ring-1 ring-forest/10 shadow-[0_30px_60px_-40px_rgba(31,77,54,0.35)]">
              <img
                src={HOME_HERO_IMAGE.url}
                alt={HOME_HERO_IMAGE.alt}
                className="aspect-[4/5] w-full rounded-[1.6rem] object-cover"
                width={1125}
                height={1398}
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden w-40 sm:block">
              <CakeImage
                src={PORTFOLIO_IMAGES.cranberryWalnut.url}
                alt={PORTFOLIO_IMAGES.cranberryWalnut.alt}
                aspect="square"
              />
            </div>
          </div>
        </div>
      </section>

      <SectionDivider bg="cream" />

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Eyebrow>A little about us</Eyebrow>
          <p className="mt-5 font-display text-3xl leading-snug text-ink sm:text-4xl">
            Small-batch breads, cookies, and bagels. Thoughtfully made on Daniel Island with quality ingredients.
          </p>
        </div>
      </section>

      <Section bg="blush">
        <SectionHeading
          eyebrow="Our approach"
          title={<>Simple. Fresh. <em className="font-display italic text-forest">Worth knowing.</em></>}
          intro="Every loaf and cookie is made by hand in small batches using traditional sourdough methods and the best ingredients."
          align="center"
        />
        <div className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-3">
          {[
            {
              title: "Small-Batch Daily",
              text: "Limited quantities baked fresh each day using time-honored techniques.",
            },
            {
              title: "Local & Thoughtful",
              text: "Sourced with care on Daniel Island and the Lowcountry. Honest ingredients, no shortcuts.",
            },
            {
              title: "Breads, Cookies & More",
              text: "Signature sourdoughs, sweet and savory cookies, and chewy bagels for every table.",
            },
          ].map((card) => (
            <article
              key={card.title}
              className="rounded-3xl bg-white p-7 ring-1 ring-forest/10 transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-30px_rgba(31,77,54,0.3)]"
            >
              <div className="h-px w-10 bg-forest/40" />
              <h3 className="mt-5 font-display text-2xl text-ink">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <SectionDivider bg="beige" />

      {/* FEATURED PRODUCTS using official K2K product cards */}
      <Section bg="white">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Fresh from the oven"
            title={<>Featured bakes this week.</>}
            intro="Our signature sourdough breads, cookies, and bagels. All made in small batches."
          />
          <Link
            to="/menu"
            className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full border border-forest/20 px-6 text-sm font-medium text-forest hover:border-forest/40"
          >
            Browse Full Menu <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_HOME_PRODUCTS.map((product) => (
            <K2KProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/menu"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-forest/20 px-6 text-sm font-medium text-forest hover:border-forest/40"
          >
            See All Products <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      <SectionDivider bg="beige" />

      <Section bg="beige">
        <SectionHeading
          eyebrow="For every table"
          title={<>Bakes for every kind of <em className="font-display not-italic text-forest">gathering.</em></>}
          intro="From breakfast bagels to cookie boxes and custom orders for celebrations."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Artisan Breads", description: "Fresh sourdough loaves daily." },
            { title: "Cookies & Treats", description: "Chewy sourdough cookies in signature flavors." },
            { title: "Bakery Boxes", description: "Curated boxes for gifting and gatherings." },
          ].map((item, index) => {
            const photo = [PORTFOLIO_IMAGES.plainSourdough, PORTFOLIO_IMAGES.chocolateChipCookie, PORTFOLIO_IMAGES.cranberryWalnut][index];
            return (
              <article
                key={item.title}
                className="group overflow-hidden rounded-3xl bg-white ring-1 ring-border/60 transition hover:-translate-y-1 hover:shadow-[0_20px_40px_-25px_rgba(31,77,54,0.25)]"
              >
                <CakeImage
                  src={photo.url}
                  alt={photo.alt}
                  aspect="landscape"
                  className="rounded-none rounded-t-3xl ring-0"
                />
                <div className="p-6">
                  <h3 className="font-display text-2xl text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      <Section>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Gallery"
            title="Recent Bake Inspiration"
            intro="Browse our fresh breads, cookies, pastries and seasonal specials."
          />
          <Link
            to="/gallery"
            className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full border border-forest/20 px-6 text-sm font-medium text-forest hover:border-forest/40"
          >
            View the Gallery <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
          {HOME_GALLERY_PREVIEW.map((photo) => (
            <CakeImage
              key={photo.id}
              src={photo.url}
              alt={photo.alt}
              aspect="tall"
            />
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-2xl text-center">
          <h3 className="font-display text-3xl text-ink sm:text-4xl">Planning a special order?</h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Share your needs and date. We will follow up with availability and next steps.
          </p>
          <Link
            to="/inquiry"
            className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-forest px-7 text-sm font-medium text-primary-foreground hover:bg-forest-dark"
          >
            Start an Inquiry
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      <Section bg="blush">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <SectionHeading
              eyebrow="Offerings"
              title="Simple, seasonal flavors."
              intro="Classic sourdough, rosemary, olive, chocolate chip cookies and more. Seasonal specials rotate regularly."
            />
            <Link
              to="/flavors"
              className="mt-7 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-forest px-6 text-sm font-medium text-primary-foreground hover:bg-forest-dark"
            >
              Explore Offerings <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="order-1 lg:order-2">
            <div className="overflow-hidden rounded-3xl bg-white p-2 ring-1 ring-border/60">
              <CakeImage
                src={PORTFOLIO_IMAGES.chocolateChipCookie.url}
                alt={PORTFOLIO_IMAGES.chocolateChipCookie.alt}
                aspect="portrait"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <SectionHeading
              eyebrow="Meet the bakery"
              title="Knead To Know on Daniel Island."
              intro="A boutique bakery creating fresh artisan breads and cookies with coastal Lowcountry roots."
            />
            <Link
              to="/about"
              className="mt-7 inline-flex h-11 items-center justify-center gap-2 rounded-full border border-forest/20 px-6 text-sm font-medium text-forest hover:border-forest/40"
            >
              About Us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="order-1 lg:order-2">
            <div className="overflow-hidden rounded-3xl bg-white p-2 ring-1 ring-border/60">
              <CakeImage
                src={PORTFOLIO_IMAGES.plainSourdough.url}
                alt="Knead To Know fresh sourdough on Daniel Island"
                aspect="portrait"
              />
            </div>
          </div>
        </div>
      </Section>

      <CTASection
        eyebrow="Ready to order"
        title="Ready for fresh bakes?"
        text="Tell us about your order for breads, cookies, a custom box, or catering. We will review the details and follow up with availability and next steps."
      />
    </>
  );
}
