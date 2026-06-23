import type { ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow, Section } from "@/components/sections/Section";
import { PageHero } from "@/components/sections/PageHero";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { BUSINESS, SITE_URL } from "@/lib/business";
import { BAKERY_PHOTOS } from "@/lib/products";
import { cn } from "@/lib/utils";

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

const ICONS = {
  envelope: "/assets/knead-to-know/icons/Knead_To_Know_Contact_Envelope_Icon.png",
  heart: "/assets/knead-to-know/icons/Knead_To_Know_Heart_Favorite_Icon.png",
  wheat: "/assets/knead-to-know/icons/Knead_To_Know_Wheat_Icon.png",
  calendar: "/assets/knead-to-know/icons/Knead_To_Know_Calendar_Preorder_Icon.png",
  pickup: "/assets/knead-to-know/icons/Knead_To_Know_Pickup_Bag_Icon.png",
} as const;

const SECTIONS = [
  {
    id: "what-we-collect",
    icon: ICONS.envelope,
    title: "What we collect",
    content: (
      <p>
        When you submit our inquiry or contact form, we collect the information you choose to share
        — typically your name, email address, phone number, needed-by date, order type, location,
        quantity, flavor or item preferences, and any notes or messages you include.
      </p>
    ),
  },
  {
    id: "why-we-collect",
    icon: ICONS.heart,
    title: "Why we collect it",
    content: (
      <p>
        We use this information solely to respond to your inquiry, review availability, plan and
        prepare your order, and follow up with next steps. We do not use it for marketing lists or
        unrelated outreach.
      </p>
    ),
  },
  {
    id: "no-selling",
    icon: ICONS.wheat,
    title: "We do not sell your information",
    content: (
      <p>
        Your information is never sold, rented, or traded. It stays with the bakery team directly
        helping with your order.
      </p>
    ),
  },
  {
    id: "third-party",
    icon: ICONS.envelope,
    title: "Third-party form tools",
    content: (
      <p>
        Our inquiry and contact forms may be processed by a third-party form provider (such as
        Formspree or a similar service) that securely delivers submissions to us by email. By
        submitting a form, you understand that your submission passes through that provider for
        delivery.
      </p>
    ),
  },
  {
    id: "updates-removal",
    icon: ICONS.calendar,
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
    icon: ICONS.pickup,
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

function PrivacySectionHeading({ icon, children }: { icon: string; children: ReactNode }) {
  return (
    <h2 className="flex items-center gap-4 font-display text-2xl text-ink">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#111]/10 bg-[#f8f4ed]">
        <img src={icon} alt="" className="h-7 w-7 object-contain opacity-85" aria-hidden />
      </div>
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
        intro="Knead To Know is a small, founder-led bakery. We keep our use of your information simple and transparent."
        image={BAKERY_PHOTOS.plainSourdough}
        imageAlt="Plain sourdough loaf from Knead To Know"
        imagePosition="right"
      >
        <span className="k2k-surface inline-flex items-center gap-2 rounded-full px-4 py-2 text-[0.65rem] font-medium uppercase tracking-[0.14em] text-k2k-navy">
          <img src={ICONS.wheat} alt="" className="h-4 w-4 object-contain opacity-70" aria-hidden />
          Last updated: {LAST_UPDATED}
        </span>
      </PageHero>

      <Section bg="beige" reveal={false}>
        <ScrollReveal>
          <div className="mx-auto max-w-3xl space-y-6">
            <nav
              aria-label="Privacy policy sections"
              className="k2k-surface flex flex-wrap gap-2 rounded-[1.75rem] p-5 sm:p-6"
            >
              <div className="mb-1 flex w-full items-center gap-3 pb-2">
                <img
                  src={ICONS.wheat}
                  alt=""
                  className="h-7 w-7 object-contain opacity-75"
                  aria-hidden
                />
                <Eyebrow decorative>Jump to section</Eyebrow>
              </div>
              {SECTIONS.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="inline-flex items-center gap-2 rounded-full border border-[#111] bg-white px-3.5 py-1.5 text-[0.62rem] font-medium uppercase tracking-[0.14em] text-k2k-navy transition hover:bg-k2k-blue/5"
                >
                  <img
                    src={section.icon}
                    alt=""
                    className="h-3.5 w-3.5 object-contain opacity-75"
                    aria-hidden
                  />
                  {section.title}
                </a>
              ))}
            </nav>

            <div className="space-y-5">
              {SECTIONS.map((section) => (
                <article
                  key={section.id}
                  id={section.id}
                  className={cn("k2k-surface scroll-mt-28 rounded-[1.75rem] p-6 sm:p-8")}
                >
                  <PrivacySectionHeading icon={section.icon}>{section.title}</PrivacySectionHeading>
                  <div className="mt-5 border-t border-[#111]/8 pt-5 text-base leading-[1.8] text-muted-foreground">
                    {section.content}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </Section>
    </>
  );
}
