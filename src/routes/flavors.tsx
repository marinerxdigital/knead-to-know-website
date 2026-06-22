import { SITE_URL } from "@/lib/business";
import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/sections/Section";
import { CTASection } from "@/components/sections/CTASection";
import {
  FLAVORS,
  FILLINGS,
  FROSTINGS,
  POPULAR_PAIRINGS,
  ADD_ONS,
} from "@/lib/site-data";

export const Route = createFileRoute("/flavors")({
  head: () => ({
    meta: [
      { title: "Flavors | Spilled Milk Cake Boutique" },
      {
        name: "description",
        content:
          "Explore cake flavors, fillings, frosting options, and custom cake inspiration from Spilled Milk Cake Boutique in Charleston.",
      },
      { property: "og:title", content: "Flavors | Spilled Milk Cake Boutique" },
      {
        property: "og:description",
        content:
          "Cake flavors, fillings, frostings, and popular pairings for custom celebration cakes in Charleston.",
      },
      { property: "og:url", content: `${SITE_URL}/flavors` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/flavors` }],
  }),
  component: FlavorsPage,
});

function FlavorsPage() {
  return (
    <>
      <section className="bg-blush pb-12 pt-16 sm:pt-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            as="h1"
            eyebrow="Flavors"
            title="Flavors for every kind of celebration."
            intro="Explore cake flavors, fillings, and frosting options before submitting your inquiry. Every cake is planned around your event, guest count, design inspiration, and flavor preferences."
          />
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-3">
          <FlavorList title="Cake flavors" items={FLAVORS} />
          <FlavorList title="Fillings" items={FILLINGS} />
          <FlavorList title="Frostings" items={FROSTINGS} />
        </div>
        <p className="mt-8 max-w-2xl text-sm text-muted-foreground">
          Final flavor availability may vary by season and order details.
        </p>
      </Section>

      <Section bg="beige">
        <SectionHeading
          eyebrow="Popular pairings"
          title="A few favorite combinations."
          intro="These are inspiration examples and can be adjusted to your event and preferences."
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {POPULAR_PAIRINGS.map((p) => (
            <li
              key={p}
              className="rounded-2xl bg-white px-6 py-5 font-display text-lg italic text-forest-dark ring-1 ring-border/60"
            >
              {p}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Customization" title="Custom planned for your event." />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Every cake is custom planned after Alexandra reviews your event date, serving needs,
              design inspiration, and flavor preferences. After your inquiry is submitted, she will
              follow up with availability and next steps.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Not sure what size you need? Include your guest count in the inquiry form and
              Alexandra will help guide the right cake size for your celebration.
            </p>
          </div>
          <div>
            <SectionHeading eyebrow="Add-ons" title="Make it your own." />
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {ADD_ONS.map((a) => (
                <li
                  key={a}
                  className="rounded-2xl bg-blush px-5 py-4 font-display text-lg italic text-forest-dark"
                >
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <CTASection
        eyebrow="Next step"
        title="Ready to plan your cake?"
        text="Share your event date, guest count, design inspiration, and flavor preferences. Alexandra will follow up with availability, design guidance, and next steps."
        primaryLabel="Start an Inquiry"
      />
    </>
  );
}

function FlavorList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl bg-white p-7 ring-1 ring-border/60">
      <h3 className="font-display text-2xl text-ink">{title}</h3>
      <ul className="mt-5 space-y-3">
        {items.map((i) => (
          <li key={i} className="flex items-center gap-3 text-sm text-ink/80">
            <span className="h-1.5 w-1.5 rounded-full bg-pink" aria-hidden />
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}
