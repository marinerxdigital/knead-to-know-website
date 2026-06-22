import { createFileRoute } from "@tanstack/react-router";
import { Mail, Instagram, MapPin } from "lucide-react";
import { Section, SectionHeading } from "@/components/sections/Section";
import { ContactForm } from "@/components/forms/ContactForm";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTASection } from "@/components/sections/CTASection";
import { FAQS } from "@/lib/site-data";
import { BUSINESS, SITE_URL } from "@/lib/business";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Spilled Milk Cake Boutique" },
      {
        name: "description",
        content:
          "Contact Spilled Milk Cake Boutique for custom cake questions, event inquiries, availability, and service area details.",
      },
      { property: "og:title", content: "Contact | Spilled Milk Cake Boutique" },
      {
        property: "og:description",
        content:
          "Reach out with questions, or use the order inquiry form for custom cake requests.",
      },
      { property: "og:url", content: `${SITE_URL}/contact` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/contact` }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="bg-blush pb-12 pt-16 sm:pt-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            as="h1"
            eyebrow="Contact"
            title="Contact Spilled Milk Cake Boutique."
            intro="Have a question before submitting an inquiry? Reach out below. For custom cake orders, please use the order inquiry form so Alexandra can collect the details needed to review your request."
          />
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            <h2 className="font-display text-3xl text-ink">Studio details</h2>
            <ul className="mt-4 space-y-4 text-base">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-forest" />
                <a href={`mailto:${BUSINESS.email}`} className="text-ink hover:text-forest">
                  {BUSINESS.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Instagram className="mt-0.5 h-5 w-5 shrink-0 text-forest" />
                <a
                  href={BUSINESS.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-ink hover:text-forest"
                >
                  {BUSINESS.instagramHandle}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-forest" />
                <div>
                  <p className="text-ink">{BUSINESS.city}</p>
                  <p className="text-sm text-muted-foreground">
                    Service area: {BUSINESS.serviceArea}
                  </p>
                </div>
              </li>
            </ul>
            <div className="mt-6 rounded-3xl bg-blush p-6">
              <p className="font-display text-lg italic text-forest-dark">A quick note</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                For custom cakes, please use the order inquiry form so Alexandra can collect the
                details needed to check availability and prepare an estimate.
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </Section>

      <Section bg="beige">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Frequently asked questions." />
          <div className="mt-6">
            <FAQAccordion items={FAQS} />
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
