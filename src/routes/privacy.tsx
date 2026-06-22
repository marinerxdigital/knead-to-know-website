import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/sections/Section";
import { BUSINESS, SITE_URL } from "@/lib/business";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Knead To Know" },
      {
        name: "description",
        content:
          "How Knead To Know collects, uses, and protects the information you share through our inquiry and contact forms.",
      },
      { property: "og:title", content: "Privacy Policy | Knead To Know" },
      {
        property: "og:description",
        content:
          "A plain-language overview of how we handle the information shared through our website.",
      },
      { property: "og:url", content: `${SITE_URL}/privacy` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/privacy` }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  const lastUpdated = "June 2026";

  return (
    <>
      <section className="bg-white pb-12 pt-16 sm:pt-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <SectionHeading
            as="h1"
            eyebrow="Privacy"
            title="Privacy Policy"
            intro="Knead To Know is a small, founder-led bakery. We keep our use of your information simple and transparent."
          />
          <p className="mt-4 text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-3xl space-y-8 text-base leading-relaxed text-ink">
          <div>
            <h2 className="font-display text-2xl text-ink">What we collect</h2>
            <p className="mt-3 text-muted-foreground">
              When you submit our inquiry or contact form, we collect the information you choose to
              share — typically your name, email address, phone number, needed-by date, order type,
              location, quantity, flavor or item preferences, and any notes or messages you include.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-ink">Why we collect it</h2>
            <p className="mt-3 text-muted-foreground">
              We use this information solely to respond to your inquiry, review availability, plan
              and prepare your order, and follow up with next steps. We do not use it for marketing
              lists or unrelated outreach.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-ink">We do not sell your information</h2>
            <p className="mt-3 text-muted-foreground">
              Your information is never sold, rented, or traded. It stays with the bakery team
              directly helping with your order.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-ink">Third-party form tools</h2>
            <p className="mt-3 text-muted-foreground">
              Our inquiry and contact forms may be processed by a third-party form provider (such as
              Formspree or a similar service) that securely delivers submissions to us by email. By
              submitting a form, you understand that your submission passes through that provider
              for delivery.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-ink">Updates and removal</h2>
            <p className="mt-3 text-muted-foreground">
              If you would like to update or remove information you have shared with us, please
              email us at{" "}
              <a
                href={`mailto:${BUSINESS.email}`}
                className="text-forest underline hover:no-underline"
              >
                {BUSINESS.email}
              </a>{" "}
              and we will take care of it promptly.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-ink">Questions</h2>
            <p className="mt-3 text-muted-foreground">
              Questions about this policy can be sent to{" "}
              <a
                href={`mailto:${BUSINESS.email}`}
                className="text-forest underline hover:no-underline"
              >
                {BUSINESS.email}
              </a>
              .
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
