import { SITE_URL } from "@/lib/business";
import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { Section, SectionHeading } from "@/components/sections/Section";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { FAQS } from "@/lib/site-data";
import {
  CONFIRMED_ORDER_PAYMENT_LINK,
  SHOW_PAYMENT_SECTION,
  BOOKING_LINK,
  SHOW_BOOKING_SECTION,
} from "@/lib/squarespace";

export const Route = createFileRoute("/inquiry")({
  head: () => ({
    meta: [
      { title: "Order Inquiry | Spilled Milk Cake Boutique" },
      {
        name: "description",
        content:
          "Submit a custom cake inquiry for weddings, birthdays, engagements, and special events in Charleston.",
      },
      { property: "og:title", content: "Order Inquiry | Spilled Milk Cake Boutique" },
      {
        property: "og:description",
        content:
          "Tell us about your event date, guest count, inspiration, and flavor ideas. Alexandra will review and follow up with availability, design guidance, and next steps.",
      },
      { property: "og:url", content: `${SITE_URL}/inquiry` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/inquiry` }],
  }),
  component: InquiryPage,
});

const STEPS = [
  {
    n: "01",
    title: "Submit your inquiry",
    text: "Share your date, event type, servings, and inspiration.",
  },
  {
    n: "02",
    title: "Review availability",
    text: "Alexandra will confirm whether your date is available.",
  },
  {
    n: "03",
    title: "Talk through the details",
    text: "She'll review your flavor ideas, design inspiration, and event needs.",
  },
  {
    n: "04",
    title: "Confirm your order",
    text: "Once everything is finalized, Alexandra will share the next steps.",
  },
];

function InquiryPage() {
  return (
    <>
      <section className="bg-blush pb-12 pt-16 sm:pt-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            as="h1"
            eyebrow="Order Inquiry"
            title="Tell us about your cake."
            intro="Share your event date, guest count, inspiration, and flavor ideas. Alexandra will review your details and follow up with availability and next steps."
          />
        </div>
      </section>

      <Section>
        <h2 className="sr-only">How the inquiry process works</h2>
        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <li
              key={s.n}
              className="rounded-3xl bg-white p-6 ring-1 ring-border/60 transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-30px_rgba(31,77,54,0.25)]"
            >
              <span className="font-display text-3xl italic text-pink">{s.n}</span>
              <h3 className="mt-3 font-display text-xl text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section bg="beige">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="The form"
            title="Share your event details."
            intro="Fields marked optional are helpful but not required. Alexandra will follow up by email within a few business days."
          />
          <div className="mt-6 rounded-2xl bg-cream/70 p-5 ring-1 ring-forest/10 sm:p-6">
            <p className="text-sm leading-relaxed text-ink">
              <span className="font-medium text-forest">A gentle note:</span> Not sure
              exactly what you need yet? That's okay. Share what you know, and Alexandra
              will help guide the next steps.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-3xl">
          <InquiryForm />
        </div>
      </Section>



      {SHOW_PAYMENT_SECTION && (
        <Section>
          <div className="mx-auto max-w-2xl rounded-3xl bg-cream p-7 ring-1 ring-border/60 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-forest">
              Already confirmed your order?
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              If Alexandra has already confirmed your cake details and availability, you can
              complete payment through the secure Squarespace link below. Please do not submit
              payment before your order has been confirmed.
            </p>
            <a
              href={CONFIRMED_ORDER_PAYMENT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex h-11 items-center justify-center gap-2 rounded-full border border-forest/20 bg-white px-5 text-sm font-medium text-forest hover:border-forest/40"
            >
              Complete Payment Through Squarespace
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </Section>
      )}

      {SHOW_BOOKING_SECTION && (
        <Section bg="beige">
          <div className="mx-auto max-w-2xl rounded-3xl bg-white p-7 ring-1 ring-border/60 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-forest">
              Want to schedule a consultation?
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              If consultations or tastings are currently available, you can use the booking link
              below to choose a time. If you are not sure what you need yet, start with the inquiry
              form first.
            </p>
            <a
              href={BOOKING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex h-11 items-center justify-center gap-2 rounded-full border border-forest/20 bg-cream px-5 text-sm font-medium text-forest hover:border-forest/40"
            >
              Book a Consultation
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </Section>
      )}

      <Section>
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Common questions." />
          <div className="mt-6">
            <FAQAccordion items={FAQS.slice(0, 5)} />
          </div>
        </div>
      </Section>
    </>
  );
}
