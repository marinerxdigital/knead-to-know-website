import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/sections/Section";
import { PRESS_FEATURE, SITE_URL } from "@/lib/business";
import alexandraApron from "@/assets/alexandra-apron.jpg.asset.json";

export const Route = createFileRoute("/featured")({
  head: () => ({
    meta: [
      { title: "Featured Press | Spilled Milk Cake Boutique" },
      {
        name: "description",
        content:
          "Read features and local press about Alexandra Kowaleski and Spilled Milk Cake Boutique, including her South Carolina Voyager interview.",
      },
      { property: "og:title", content: "Featured Press | Spilled Milk Cake Boutique" },
      {
        property: "og:description",
        content:
          "Local press and features about Alexandra Kowaleski and Spilled Milk Cake Boutique.",
      },
      { property: "og:url", content: `${SITE_URL}/featured` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/featured` }],
  }),
  component: FeaturedPage,
});

function FeaturedPage() {
  return (
    <>
      <section className="bg-blush pb-12 pt-16 sm:pt-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            as="h1"
            eyebrow="Featured"
            title="Featured stories & local press."
            intro="A closer look at Alexandra Kowaleski's story, Spilled Milk Cake Boutique, and the Charleston roots behind the brand."
          />
        </div>
      </section>

      {PRESS_FEATURE ? (
        <Section>
          <article className="grid items-center gap-10 rounded-3xl bg-white p-6 ring-1 ring-border/60 sm:p-10 lg:grid-cols-[1fr_1.1fr]">
            <div className="overflow-hidden rounded-2xl bg-blush p-2">
              <img
                src={alexandraApron.url}
                alt="Portrait of Alexandra Kowaleski, custom cake baker in Charleston"
                className="aspect-[4/5] w-full rounded-xl object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-forest">
                {PRESS_FEATURE.publication}
              </p>
              <h2 className="mt-4 font-display text-3xl leading-snug text-ink sm:text-4xl">
                {PRESS_FEATURE.title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                {PRESS_FEATURE.description}
              </p>
              <a
                href={PRESS_FEATURE.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-forest px-6 text-sm font-medium text-primary-foreground hover:bg-forest-dark"
              >
                Read the Article
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </article>
        </Section>
      ) : null}

      <Section bg="beige">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading
            align="center"
            eyebrow="Coming soon"
            title="More features coming soon."
            intro="Additional restaurant experience, local mentions, and press features will be added here as they are confirmed."
          />
        </div>
      </Section>

      <Section>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            to="/about"
            className="inline-flex h-12 items-center justify-center rounded-full border border-forest/20 px-7 text-sm font-medium text-forest hover:border-forest/40"
          >
            Meet Alexandra
          </Link>
          <Link
            to="/inquiry"
            className="inline-flex h-12 items-center justify-center rounded-full bg-forest px-7 text-sm font-medium text-primary-foreground hover:bg-forest-dark"
          >
            Start an Inquiry
          </Link>
        </div>
      </Section>
    </>
  );
}
