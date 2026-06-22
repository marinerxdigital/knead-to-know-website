import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/sections/Section";
import { SITE_URL } from "@/lib/business";

export const Route = createFileRoute("/featured")({
  head: () => ({
    meta: [
      { title: "Community & Features | Knead To Know" },
      {
        name: "description",
        content:
          "Local mentions, community features, and updates from Knead To Know on Daniel Island.",
      },
      { property: "og:title", content: "Community & Features | Knead To Know" },
      {
        property: "og:description",
        content:
          "Updates and features from Knead To Know, a Daniel Island bakery serving Charleston.",
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
      <section className="bg-white pb-12 pt-16 sm:pt-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            as="h1"
            eyebrow="Community"
            title="In the community."
            intro="Local features, partnerships, and updates from Knead To Know will appear here as they are confirmed."
          />
        </div>
      </section>

      <Section bg="beige">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading
            align="center"
            eyebrow="Coming soon"
            title="More updates coming soon."
            intro="We're excited to share stories, local collaborations, and mentions as Knead To Know grows in the Charleston area."
          />
        </div>
      </Section>

      <Section>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            to="/about"
            className="inline-flex h-12 items-center justify-center rounded-full border border-forest/20 px-7 text-sm font-medium text-forest hover:border-forest/40"
          >
            About the Bakery
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
