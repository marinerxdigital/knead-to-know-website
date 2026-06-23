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
const PIN_ICON = "/assets/knead-to-know/icons/Knead_To_Know_Location_Pin_Icon.png";

function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white pb-14 pt-16 sm:pt-24">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(127,167,199,0.1),transparent_60%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            as="h1"
            eyebrow="Contact"
            title="Reach the bakery"
            intro="Have a question or ready to place a pre-order? Call Wendy or use the form below."
          />
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <div className="space-y-6">
            <div className="k2k-card rounded-[1.75rem] p-7 sm:p-8">
              <div className="flex items-center gap-3">
                <img src={ENVELOPE_ICON} alt="" className="h-10 w-10 object-contain" aria-hidden />
                <h2 className="font-display text-2xl text-ink sm:text-3xl">Bakery details</h2>
              </div>
              <ul className="mt-6 space-y-5 text-base">
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
                  <a href={BUSINESS.phoneTel} className="text-ink transition hover:text-k2k-blue">
                    {BUSINESS.phone}
                  </a>
                </li>
                {BUSINESS.email && (
                  <li className="flex items-center gap-3">
                    <Mail className="h-5 w-5 shrink-0 text-k2k-blue" />
                    <a
                      href={`mailto:${BUSINESS.email}`}
                      className="text-ink transition hover:text-k2k-blue"
                    >
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
                      className="text-ink transition hover:text-k2k-blue"
                    >
                      {BUSINESS.instagramHandle}
                    </a>
                  </li>
                )}
              </ul>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-k2k-blue/12 bg-[#f8fafc] p-5 text-sm">
                <p className="font-display text-lg text-k2k-navy">Ordering</p>
                <p className="mt-2 leading-relaxed text-muted-foreground">{BUSINESS.orderingModel}</p>
                <p className="mt-1 text-muted-foreground">Est. {BUSINESS.established}</p>
              </div>

              {BUSINESS.hours && (
                <div className="rounded-2xl border border-k2k-blue/12 bg-white p-5 text-sm">
                  <p className="font-display text-lg text-k2k-navy">Hours</p>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{BUSINESS.hours}</p>
                </div>
              )}
            </div>

            <div className="rounded-2xl border border-k2k-blue/12 bg-white p-5 text-sm">
              <p className="font-display text-lg text-k2k-navy">Place an order</p>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                Call, text, DM, or submit an order request. {BUSINESS.fulfillment}.
              </p>
            </div>

            <div className="overflow-hidden rounded-[1.75rem] border border-k2k-blue/12 bg-gradient-to-br from-[#f0f5fa] to-white">
              <div className="flex items-center gap-3 border-b border-k2k-blue/10 px-6 py-4">
                <img src={PIN_ICON} alt="" className="h-5 w-5 opacity-70" aria-hidden />
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-k2k-navy/70">
                  Pickup area
                </p>
              </div>
              <div className="relative flex aspect-[16/10] flex-col items-center justify-center gap-2 p-8 text-center">
                <div
                  className="absolute inset-4 rounded-2xl border border-dashed border-k2k-blue/15 bg-white/50"
                  aria-hidden
                />
                <MapPin className="relative h-8 w-8 text-k2k-blue/40" />
                <p className="relative font-display text-lg text-k2k-navy">Daniel Island, SC</p>
                <p className="relative max-w-xs text-sm text-muted-foreground">
                  {BUSINESS.address}. Exact pickup details confirmed after your order.
                </p>
                {BUSINESS.mapsUrl && (
                  <a
                    href={BUSINESS.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="relative mt-2 text-xs font-medium uppercase tracking-wider text-k2k-blue hover:text-k2k-navy"
                  >
                    Open in maps
                  </a>
                )}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link to="/custom-orders" className="inline-flex k2k-button k2k-button-primary">
                Request an Order
              </Link>
              <a href={BUSINESS.phoneTel} className="inline-flex k2k-button k2k-button-outline">
                Call Wendy
              </a>
            </div>
          </div>

          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.16em] text-k2k-navy/70">
              Send a message
            </p>
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}