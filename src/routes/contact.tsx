import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, Instagram, MapPin } from "lucide-react";
import { Section, SectionHeading } from "@/components/sections/Section";
import { ContactForm } from "@/components/forms/ContactForm";
import { BUSINESS, SITE_URL } from "@/lib/business";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Knead To Know" },
      {
        name: "description",
        content:
          "Contact Knead To Know bakery on Daniel Island. Questions, custom orders, catering inquiries, and availability.",
      },
      { property: "og:title", content: "Contact | Knead To Know" },
      {
        property: "og:description",
        content:
          "Reach out to Knead To Know for orders, questions, or catering on Daniel Island and Charleston.",
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
      <section className="bg-white pb-12 pt-16 sm:pt-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            as="h1"
            eyebrow="Contact"
            title="Reach the bakery."
            intro="Have a question or need help with an order? Use the form below, or reach us directly by email and Instagram."
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

            <div className="mt-6 rounded-3xl bg-white p-6 text-sm">
              <p className="font-display text-lg italic text-forest-dark">A quick note</p>
              <p className="mt-2 text-muted-foreground">
                For custom orders, bakery boxes, and larger quantities, we recommend using the
                <Link to="/custom-orders" className="mx-1 underline">Custom Orders form</Link>.
                For events and catering, please use the
                <Link to="/catering" className="mx-1 underline">Catering page</Link>.
              </p>
            </div>

            <div className="pt-2">
              <Link
                to="/custom-orders"
                className="inline-flex h-11 items-center justify-center rounded-full bg-forest px-7 text-sm font-medium text-primary-foreground hover:bg-forest-dark"
              >
                Request an Order
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-sm uppercase tracking-wider">Send a message</h3>
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
