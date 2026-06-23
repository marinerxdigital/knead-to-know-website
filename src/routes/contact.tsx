import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { ContactForm } from "@/components/forms/ContactForm";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
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
      <PageHero
        align="center"
        eyebrow="Contact"
        title="Reach the bakery"
        intro="Have a question or ready to place a pre-order? Call Wendy or use the form below."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <ScrollReveal className="space-y-6">
            <div className="k2k-surface rounded-[1.75rem] p-7 sm:p-9">
              <div className="flex items-center gap-3">
                <img src={ENVELOPE_ICON} alt="" className="h-10 w-10 object-contain" aria-hidden />
                <h2 className="font-display text-2xl text-ink sm:text-3xl">Bakery details</h2>
              </div>

              {/* Prominent phone */}
              <div className="mt-8 rounded-2xl border border-k2k-blue/12 bg-[#f8fafc] p-6">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-k2k-blue/70">
                  Call or text
                </p>
                <a
                  href={BUSINESS.phoneTel}
                  className="mt-2 block font-display text-3xl text-ink transition hover:text-k2k-blue sm:text-4xl"
                >
                  {BUSINESS.phone}
                </a>
                <p className="mt-2 text-sm text-muted-foreground">
                  The fastest way to reach {BUSINESS.shortOwner} for orders and questions.
                </p>
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
              <div className="k2k-surface-alt rounded-2xl border border-k2k-blue/12 p-5 text-sm">
                <p className="font-display text-lg text-k2k-navy">Ordering</p>
                <p className="mt-2 leading-relaxed text-muted-foreground">{BUSINESS.orderingModel}</p>
                <p className="mt-1 text-muted-foreground">Est. {BUSINESS.established}</p>
              </div>

              {BUSINESS.hours && (
                <div className="k2k-surface rounded-2xl p-5 text-sm">
                  <p className="font-display text-lg text-k2k-navy">Hours</p>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{BUSINESS.hours}</p>
                </div>
              )}
            </div>

            <div className="k2k-surface rounded-2xl p-5 text-sm">
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
                  className="absolute inset-4 rounded-2xl border border-dashed border-k2k-blue/20 bg-white/50"
                  aria-hidden
                />
                <div
                  className="absolute inset-4 overflow-hidden rounded-2xl opacity-20"
                  aria-hidden
                >
                  <svg
                    viewBox="0 0 400 250"
                    fill="none"
                    className="h-full w-full text-k2k-blue"
                    preserveAspectRatio="xMidYMid slice"
                  >
                    <path
                      d="M0 62h400M0 125h400M0 188h400M67 0v250M133 0v250M200 0v250M267 0v250M333 0v250"
                      stroke="currentColor"
                      strokeWidth="0.5"
                    />
                    <path
                      d="M40 190c50-70 120-90 190-50s130 30 170-80"
                      stroke="currentColor"
                      strokeWidth="1.25"
                      strokeDasharray="5 4"
                    />
                    <circle cx="200" cy="120" r="6" fill="currentColor" />
                  </svg>
                </div>
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
                Request an Order <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
              <a href={BUSINESS.phoneTel} className="inline-flex k2k-button k2k-button-outline">
                <Phone className="h-4 w-4" />
                Call Wendy
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <div className="k2k-surface rounded-[1.75rem] p-7 sm:p-9">
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.16em] text-k2k-navy/70">
                Send a message
              </p>
              <ContactForm />
            </div>

            <blockquote className="mt-8 border-l-2 border-wheat/60 py-1 pl-6">
              <p className="font-display text-lg leading-snug text-k2k-navy">
                &ldquo;I look forward to baking for you.&rdquo;
              </p>
              <footer className="mt-2 text-sm text-muted-foreground">
                — {BUSINESS.owner}, {BUSINESS.name}
              </footer>
            </blockquote>
          </ScrollReveal>
        </div>
      </Section>
    </>
  );
}