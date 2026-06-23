import type { ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/sections/Section";
import { PageHero } from "@/components/sections/PageHero";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
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

const LAST_UPDATED = "June 2026";

const SECTIONS = [
  {
    id: "what-we-collect",
    title: "What we collect",
    content: (
      <p>
        When you submit our inquiry or contact form, we collect the information you choose to
        share — typically your name, email address, phone number, needed-by date, order type,
        location, quantity, flavor or item preferences, and any notes or messages you include.
      </p>
    ),
  },
  {
    id: "why-we-collect",
    title: "Why we collect it",
    content: (
      <p>
        We use this information solely to respond to your inquiry, review availability, plan
        and prepare your order, and follow up with next steps. We do not use it for marketing
        lists or unrelated outreach.
      </p>
    ),
  },
  {
    id: "no-selling",
    title: "We do not sell your information",
    content: (
      <p>
        Your information is never sold, rented, or traded. It stays with the bakery team
        directly helping with your order.
      </p>
    ),
  },
  {
    id: "third-party",
    title: "Third-party form tools",
    content: (
      <p>
        Our inquiry and contact forms may be processed by a third-party form provider (such as
        Formspree or a similar service) that securely delivers submissions to us by email. By
        submitting a form, you understand that your submission passes through that provider
        for delivery.
      </p>
    ),
  },
  {
    id: "updates-removal",
    title: "Updates and removal",
    content: (
      <p>
        If you would like to update or remove information you have shared with us, please
        {BUSINESS.email ? (
          <>
            {" "}
            email us at{" "}
            <a
              href={`mailto:${BUSINESS.email}`}
              className="font-medium text-k2k-blue underline decoration-k2k-blue/30 underline-offset-2 transition hover:decoration-k2k-blue"
            >
              {BUSINESS.email}
            </a>
          </>
        ) : (
          <>
            {" "}
            call us at{" "}
            <a
              href={BUSINESS.phoneTel}
              className="font-medium text-k2k-blue underline decoration-k2k-blue/30 underline-offset-2 transition hover:decoration-k2k-blue"
            >
              {BUSINESS.phone}
            </a>{" "}
            or use the contact form on this site
          </>
        )}{" "}
        and we will take care of it promptly.
      </p>
    ),
  },
  {
    id: "questions",
    title: "Questions",
    content: (
      <p>
        Questions about this policy can be sent via the{" "}
        <a
          href="/contact"
          className="font-medium text-k2k-blue underline decoration-k2k-blue/30 underline-offset-2 transition hover:decoration-k2k-blue"
        >
          contact form
        </a>
        {BUSINESS.email ? (
          <>
            {" "}
            or to{" "}
            <a
              href={`mailto:${BUSINESS.email}`}
              className="font-medium text-k2k-blue underline decoration-k2k-blue/30 underline-offset-2 transition hover:decoration-k2k-blue"
            >
              {BUSINESS.email}
            </a>
          </>
        ) : (
          <>
            {" "}
            or by calling{" "}
            <a
              href={BUSINESS.phoneTel}
              className="font-medium text-k2k-blue underline decoration-k2k-blue/30 underline-offset-2 transition hover:decoration-k2k-blue"
            >
              {BUSINESS.phone}
            </a>
          </>
        )}
        .
      </p>
    ),
  },
] as const;

function PrivacySectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="flex items-center gap-4 font-display text-2xl text-ink">
      <span className="h-9 w-1 shrink-0 rounded-full bg-wheat" aria-hidden />
      {children}
    </h2>
  );
}

function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Privacy Policy"
        align="center"
        intro="Knead To Know is a small, founder-led bakery. We keep our use of your information simple and transparent."
      >
        <span className="k2k-badge-wheat inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[0.65rem]">
          Last updated: {LAST_UPDATED}
        </span>
      </PageHero>

      <Section bg="beige" reveal={false}>
        <ScrollReveal>
          <div className="mx-auto max-w-3xl">
            <div className="k2k-surface overflow-hidden rounded-[2rem]">
              {/* Section anchor nav */}
              <nav
                aria-label="Privacy policy sections"
                className="flex flex-wrap gap-2 border-b border-k2k-blue/10 bg-gradient-to-r from-k2k-blue/[0.03] via-white to-wheat/[0.05] px-6 py-5 sm:px-10"
              >
                {SECTIONS.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="rounded-full border border-k2k-blue/12 bg-white px-3.5 py-1.5 text-[0.62rem] font-medium uppercase tracking-[0.14em] text-k2k-navy transition hover:border-k2k-blue/30 hover:bg-k2k-blue/5"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>

              {/* Content sections */}
              <div className="space-y-0 px-6 py-10 sm:px-10 sm:py-12">
                {SECTIONS.map((section, i) => (
                  <article
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-28"
                  >
                    {i > 0 && (
                      <div
                        className="mb-10 flex items-center gap-4"
                        aria-hidden
                      >
                        <span className="h-px flex-1 bg-k2k-blue/10" />
                        <img
                          src="/assets/knead-to-know/icons/Knead_To_Know_Wheat_Icon.png"
                          alt=""
                          className="h-3.5 w-3.5 opacity-30"
                        />
                        <span className="h-px flex-1 bg-k2k-blue/10" />
                      </div>
                    )}
                    <PrivacySectionHeading>{section.title}</PrivacySectionHeading>
                    <div className="mt-4 text-base leading-[1.8] text-muted-foreground">
                      {section.content}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}