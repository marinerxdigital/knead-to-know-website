import { createFileRoute, Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Section, SectionHeading } from "@/components/sections/Section";
import { ContactForm } from "@/components/forms/ContactForm";
import { BUSINESS, SITE_URL } from "@/lib/business";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Knead To Know Sweet & Sour" },
      {
        name: "description",
        content:
          "Contact Knead To Know Sweet & Sour on Daniel Island. Call Wendy at (843) 973-0309 or submit an order request.",
      },
      { property: "og:title", content: "Contact | Knead To Know Sweet & Sour" },
      {
        property: "og:description",
        content: "Reach Knead To Know Sweet & Sour for pre-orders on Daniel Island and Charleston.",
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
            intro="Have a question or ready to place a pre-order? Call Wendy or use the form below."
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
              <li>
                <p className="font-medium text-ink">{BUSINESS.name}</p>
                <p className="text-sm text-muted-foreground">Owner: {BUSINESS.owner}</p>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-k2k-blue" />
                <div>
                  <p className="text-ink">{BUSINESS.address}</p>
                  <p className="text-sm text-muted-foreground">{BUSINESS.serviceArea}</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-k2k-blue" />
                <a href={BUSINESS.phoneTel} className="text-ink hover:text-k2k-blue">
                  {BUSINESS.phone}
                </a>
              </li>
              {BUSINESS.email && (
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-k2k-blue" />
                  <a href={`mailto:${BUSINESS.email}`} className="text-ink hover:text-k2k-blue">
                    {BUSINESS.email}
                  </a>
                </li>
              )}
              {BUSINESS.instagramUrl && BUSINESS.instagramHandle && (
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
              )}
            </ul>

            <div className="mt-4 rounded-3xl border border-k2k-blue/15 bg-[#f8fafc] p-6 text-sm">
              <p className="font-display text-lg text-k2k-navy">Ordering</p>
              <p className="mt-2 text-muted-foreground">{BUSINESS.orderingModel}</p>
              <p className="mt-1 text-muted-foreground">Est. {BUSINESS.established}</p>
            </div>

            {BUSINESS.hours && (
              <div className="rounded-3xl border border-k2k-blue/15 bg-white p-6 text-sm">
                <p className="font-display text-lg text-k2k-navy">Hours</p>
                <p className="mt-2 text-muted-foreground">{BUSINESS.hours}</p>
              </div>
            )}

            <div className="rounded-3xl border border-k2k-blue/15 bg-white p-6 text-sm">
              <p className="font-display text-lg text-k2k-navy">Place an order</p>
              <p className="mt-2 text-muted-foreground">
                Call, text, DM, or submit an order request. {BUSINESS.fulfillment}.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/custom-orders"
                className="inline-flex h-11 items-center justify-center rounded-full bg-k2k-blue px-7 text-sm font-medium text-white hover:bg-k2k-navy"
              >
                Request an Order
              </Link>
              <a
                href={BUSINESS.phoneTel}
                className="inline-flex h-11 items-center justify-center rounded-full border border-k2k-blue/25 px-7 text-sm font-medium text-k2k-blue hover:border-k2k-blue/45"
              >
                Call Wendy
              </a>
            </div>
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
