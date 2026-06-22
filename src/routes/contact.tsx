import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, Instagram, MapPin, Phone } from "lucide-react";
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

const ENVELOPE_ICON = "/assets/knead-to-know/icons/Knead_To_Know_Contact_Envelope_Icon.png";

function ContactPage() {
  return (
    <>
      <section className="bg-white pb-12 pt-16 sm:pt-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            as="h1"
            eyebrow="Contact"
            title="Reach the bakery"
            intro="Have a question or need help with an order? Use the form below, or reach us directly. Daniel Island, South Carolina."
          />
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={ENVELOPE_ICON} alt="" className="h-10 w-10 object-contain" aria-hidden />
              <h2 className="font-display text-3xl text-ink">Bakery details</h2>
            </div>
            <ul className="mt-4 space-y-4 text-base">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-k2k-blue" />
                <div>
                  <p className="text-ink">{BUSINESS.address}</p>
                  <p className="text-ink">{BUSINESS.city}</p>
                  <p className="text-sm text-muted-foreground">{BUSINESS.serviceArea}</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-k2k-blue" />
                <span className="text-ink">{BUSINESS.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-k2k-blue" />
                <a href={`mailto:${BUSINESS.email}`} className="text-ink hover:text-k2k-blue">
                  {BUSINESS.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="h-5 w-5 shrink-0 text-k2k-blue" />
                <a
                  href={BUSINESS.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-ink hover:text-k2k-blue"
                >
                  {BUSINESS.instagramHandle}
                </a>
              </li>
            </ul>

            <div className="mt-4 rounded-3xl border border-k2k-blue/15 bg-[#f8fafc] p-6 text-sm">
              <p className="font-display text-lg text-k2k-navy">Hours</p>
              <p className="mt-2 text-muted-foreground">{BUSINESS.hours}</p>
            </div>

            <div className="rounded-3xl border border-k2k-blue/15 bg-white p-6 text-sm">
              <p className="font-display text-lg text-k2k-navy">Ordering note</p>
              <p className="mt-2 text-muted-foreground">
                For custom orders, bakery boxes, and larger quantities, use the
                <Link to="/custom-orders" className="mx-1 underline">
                  Custom Orders
                </Link>
                form. For events and catering, visit the
                <Link to="/catering" className="mx-1 underline">
                  Catering page
                </Link>
                .
              </p>
            </div>

            <Link
              to="/custom-orders"
              className="inline-flex h-11 items-center justify-center rounded-full bg-k2k-blue px-7 text-sm font-medium text-white hover:bg-k2k-navy"
            >
              Request an Order
            </Link>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium uppercase tracking-wider">Send a message</h3>
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
