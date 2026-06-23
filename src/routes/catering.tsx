import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/sections/Section";
import { CTASection } from "@/components/sections/CTASection";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { BAKERY_PHOTOS } from "@/lib/products";
import { BUSINESS, SITE_URL } from "@/lib/business";
import { cn } from "@/lib/utils";
import { KTK_ICONS } from "@/lib/design-assets";

const ACCESS_KEY =
  (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined) ??
  "5f50a39a-f868-4696-b3e9-d390c1f7f4f0";
const WEB3FORMS_URL = "https://api.web3forms.com/submit";

const fieldClass =
  "min-h-12 h-12 w-full rounded-xl border border-[#111] bg-white px-4 text-sm shadow-sm transition-colors placeholder:text-k2k-navy/50 focus:border-[#111] focus:ring-2 focus:ring-[#111]/10 focus:outline-none";

const textareaClass =
  "min-h-[120px] w-full resize-y rounded-xl border border-[#111] bg-white px-4 py-3.5 text-sm leading-relaxed shadow-sm transition-colors placeholder:text-k2k-navy/50 focus:border-[#111] focus:ring-2 focus:ring-[#111]/10 focus:outline-none";

const CATERING_SERVICES = [
  {
    icon: KTK_ICONS.cookie,
    title: "Cookie Trays",
    desc: "Assorted sourdough cookies — chocolate chip, cranberry walnut, and seasonal varieties.",
    tier: "Popular",
  },
  {
    icon: KTK_ICONS.bread,
    title: "Bread Baskets",
    desc: "Selection of our loaves with butter or olive oil for events and dinners.",
    tier: "Events",
  },
  {
    icon: KTK_ICONS.dough,
    title: "Brunch Spreads",
    desc: "Bagels, breads, and sweet pastries for morning meetings and gatherings.",
    tier: "Morning",
  },
  {
    icon: KTK_ICONS.gift,
    title: "Bakery Gift Boxes",
    desc: "Curated boxes ideal for client gifts, hostesses, and corporate gifting.",
    tier: "Gifting",
  },
  {
    icon: KTK_ICONS.calendar,
    title: "Holiday Orders",
    desc: "Seasonal loaves, cookies, and large-format boxes for celebrations.",
    tier: "Seasonal",
  },
  {
    icon: KTK_ICONS.wheat,
    title: "Custom Platters",
    desc: "Tell us your vision — we build to your guest count and preferences.",
    tier: "Bespoke",
  },
] as const;

const CATERING_STEPS = [
  {
    step: "01",
    title: "Share your event",
    description:
      "Tell us your date, guest count, and what you'd like — cookie trays, bread baskets, brunch spreads, or custom platters.",
    icon: KTK_ICONS.calendar,
  },
  {
    step: "02",
    title: "Wendy confirms details",
    description:
      "We reply within one business day with menu selections, quantities, timing, and delivery or pickup arrangements.",
    icon: KTK_ICONS.bread,
  },
  {
    step: "03",
    title: "Fresh bakes, your way",
    description:
      "Everything is baked to order in small batches — ready for your Daniel Island gathering, office, or celebration.",
    icon: KTK_ICONS.wheat,
  },
] as const;

const TIER_STYLES: Record<string, string> = {
  Popular: "bg-k2k-blue/10 text-k2k-navy ring-k2k-blue/15",
  Events: "bg-k2k-harbor/15 text-k2k-navy ring-k2k-harbor/25",
  Morning: "bg-wheat/20 text-k2k-navy ring-wheat/35",
  Gifting: "bg-k2k-blue/8 text-k2k-navy ring-k2k-blue/12",
  Seasonal: "bg-k2k-navy/8 text-k2k-navy ring-k2k-navy/12",
  Bespoke: "bg-k2k-blue/12 text-k2k-navy ring-k2k-blue/18",
};

export const Route = createFileRoute("/catering")({
  head: () => ({
    meta: [
      { title: "Catering & Events | Knead To Know" },
      {
        name: "description",
        content:
          "Catering and event orders from Knead To Know: cookie trays, bread baskets, brunch spreads, bakery boxes for corporate events, gatherings, and celebrations on Daniel Island and Charleston.",
      },
      { property: "og:title", content: "Catering & Events | Knead To Know" },
      {
        property: "og:description",
        content:
          "Order platters, spreads, and boxes for events. Small-batch bakery catering on Daniel Island.",
      },
      { property: "og:url", content: `${SITE_URL}/catering` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/catering` }],
  }),
  component: CateringPage,
});

function CateringPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    eventType: "",
    guestCount: "",
    items: "",
    preference: "delivery",
    budget: "",
    allergies: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [botcheck, setBotcheck] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (botcheck) return;

    setSubmitting(true);
    try {
      const res = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: "New Catering Request - Knead To Know",
          from_name: formData.name,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          event_date: formData.eventDate,
          event_type: formData.eventType,
          guest_count: formData.guestCount,
          items: formData.items,
          preference: formData.preference,
          budget: formData.budget,
          allergies: formData.allergies,
          message: formData.message,
          source: "Catering Form",
          botcheck: "",
        }),
      });
      const data = (await res.json().catch(() => null)) as { success?: boolean } | null;
      if (!res.ok || !data?.success) throw new Error("Submission failed");
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setSubmitError(
        BUSINESS.email
          ? `Something went wrong sending your catering request. Please try again or email us at ${BUSINESS.email}.`
          : `Something went wrong sending your catering request. Please try again or call ${BUSINESS.phone}.`,
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <>
        <section className="relative overflow-hidden bg-[#f8f4ed] py-24 sm:py-32">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(106,158,192,0.12),transparent_55%)]"
            aria-hidden
          />
          <div className="relative mx-auto max-w-xl px-5 sm:px-8">
            <div className="k2k-surface overflow-hidden rounded-[2rem] p-10 text-center sm:p-14">
              <div className="mb-6 flex items-center justify-center gap-4">
                <div className="group flex h-12 w-12 items-center justify-center rounded-xl border border-[#111] bg-[#f8f4ed]/80 transition duration-300 hover:scale-105">
                  <img
                    src={KTK_ICONS.gift}
                    alt=""
                    className="k2k-breathe h-6 w-6 object-contain opacity-80 transition duration-300 group-hover:scale-110 group-hover:animate-none"
                    loading="lazy"
                    decoding="async"
                    aria-hidden
                  />
                </div>
                <div className="group flex h-16 w-16 items-center justify-center rounded-full border border-[#111] bg-k2k-blue/10 ring-1 ring-k2k-blue/20 transition duration-300 hover:scale-105">
                  <CheckCircle2
                    className="h-8 w-8 text-k2k-blue transition duration-300 group-hover:scale-110"
                    aria-hidden
                  />
                </div>
                <div className="group flex h-12 w-12 items-center justify-center rounded-xl border border-[#111] bg-[#f8f4ed]/80 transition duration-300 hover:scale-105">
                  <img
                    src={KTK_ICONS.wheat}
                    alt=""
                    className="k2k-breathe h-6 w-6 object-contain opacity-80 transition duration-300 group-hover:scale-110 group-hover:animate-none"
                    loading="lazy"
                    decoding="async"
                    aria-hidden
                  />
                </div>
              </div>
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-k2k-blue">
                Request received
              </p>
              <h1 className="mt-4 font-display text-4xl leading-[1.05] text-ink sm:text-5xl">
                Thank you — we&apos;ll be in touch soon.
              </h1>
              <p className="mt-5 leading-relaxed text-k2k-navy/90">
                Your catering request is on its way to Wendy. We will contact you shortly to confirm
                menu selections, quantities, timing, and delivery or pickup arrangements for your
                event on Daniel Island.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <Link
                  to="/"
                  className="group k2k-button k2k-button-primary inline-flex items-center gap-2"
                >
                  Return home
                  <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5" />
                </Link>
                <a href={BUSINESS.phoneTel} className="k2k-button k2k-button-outline inline-flex">
                  {BUSINESS.phone}
                </a>
              </div>
            </div>
          </div>
        </section>
        <CTASection
          compact
          eyebrow="While you wait"
          title="Browse the menu"
          text="Explore our full sourdough collection — breads, cookies, and bagels — all available for pre-order."
          primaryLabel="View Menu"
          primaryTo="/menu"
          secondaryLabel={BUSINESS.phone}
          secondaryTo={BUSINESS.phoneTel}
          secondaryIsPhone
        />
      </>
    );
  }

  return (
    <>
      <PageHero
        eyebrow="Catering &amp; Events"
        title="Bakes for your gathering"
        intro={`From office breakfasts to neighborhood parties and holiday celebrations on Daniel Island — we prepare bread baskets, cookie platters, bakery boxes, and full brunch spreads for ${BUSINESS.serviceArea}.`}
        image={BAKERY_PHOTOS.hero}
        imageAlt="Artisan sourdough spread from Knead To Know bakery"
      >
        <span className="group inline-flex items-center gap-2 rounded-full border border-[#111] bg-k2k-blue/8 px-4 py-2 text-sm font-medium text-k2k-navy">
          <span className="h-1.5 w-1.5 rounded-full bg-wheat" aria-hidden />
          {BUSINESS.orderingModel} · Baked fresh for your event
        </span>
      </PageHero>

      <Section variant="editorial">
        <SectionHeading
          eyebrow="Formats"
          title="Popular catering formats"
          decorative
          intro="Six ways to bring small-batch sourdough to your table — from cookie trays to fully custom platters."
        />
        <div className="mt-12 grid auto-rows-fr items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CATERING_SERVICES.map((service, index) => (
            <ScrollReveal
              key={service.title}
              delay={Math.min(index % 3, 4) as 0 | 1 | 2 | 3 | 4}
              className="h-full"
            >
              <div className="k2k-surface k2k-hover-lift group flex h-full min-h-full flex-col rounded-2xl border-t-2 border-t-k2k-blue/15 p-6 sm:p-7 transition duration-300 hover:border-t-k2k-blue/35">
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#111] bg-[#f8f4ed]/80 transition duration-300 group-hover:scale-105 group-hover:bg-white group-hover:shadow-[0_4px_16px_-6px_rgba(17,17,17,0.15)]">
                    <img
                      src={service.icon}
                      alt=""
                      className="k2k-breathe h-7 w-7 object-contain opacity-80 transition duration-300 group-hover:scale-110 group-hover:animate-none"
                      loading="lazy"
                      decoding="async"
                      aria-hidden
                    />
                  </span>
                  <span
                    className={cn(
                      "rounded-full border border-[#111] px-2.5 py-0.5 text-[9px] font-medium uppercase tracking-[0.16em]",
                      TIER_STYLES[service.tier] ?? "bg-k2k-blue/8 text-k2k-navy",
                    )}
                  >
                    {service.tier}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl text-ink">{service.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-k2k-navy/90">
                  {service.desc}
                </p>
                <div
                  className="mt-5 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.18em] text-k2k-blue/60"
                  aria-hidden
                >
                  <span className="h-px flex-1 bg-k2k-blue/12" />
                  <span>Pre-order</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section bg="beige">
        <SectionHeading
          eyebrow="How catering works"
          title="Three steps to your event spread"
          align="center"
          decorative
          intro="From first inquiry to fresh pickup or delivery — Wendy handles every detail in small batches."
        />

        <div className="relative mx-auto mt-16 max-w-4xl">
          <div
            className="pointer-events-none absolute left-[12%] right-[12%] top-8 hidden h-px bg-gradient-to-r from-transparent via-k2k-blue/25 to-transparent sm:block"
            aria-hidden
          />
          <ol className="grid gap-10 sm:grid-cols-3">
            {CATERING_STEPS.map((step, index) => (
              <ScrollReveal key={step.title} delay={index as 0 | 1 | 2 | 3 | 4}>
                <li className="k2k-surface group relative rounded-2xl border-t-2 border-t-k2k-blue/15 p-6 text-center transition duration-300 hover:border-t-k2k-blue/35 sm:text-left">
                  <div className="relative mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-[#111] bg-[#f8f4ed] transition duration-300 group-hover:scale-105 sm:mx-0">
                    <img
                      src={step.icon}
                      alt=""
                      className="k2k-breathe h-7 w-7 object-contain opacity-80 transition duration-300 group-hover:scale-110 group-hover:animate-none"
                      loading="lazy"
                      decoding="async"
                      aria-hidden
                    />
                    <span className="absolute -right-1.5 -top-1.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#111] bg-k2k-blue text-[11px] font-semibold leading-none text-white">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-display text-xl text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-k2k-navy/90">
                    {step.description}
                  </p>
                </li>
              </ScrollReveal>
            ))}
          </ol>
        </div>
      </Section>

      <Section bg="white" variant="inset" id="catering-form">
        <ScrollReveal>
          <div className="k2k-accent-rail k2k-surface min-w-0 overflow-hidden rounded-[1.75rem] border-t-2 border-t-k2k-blue/25 p-0 pl-5 shadow-[0_28px_60px_-44px_rgba(17,17,17,0.18)] sm:pl-7">
            <div className="border-b border-k2k-blue/10 px-6 py-8 sm:px-10 sm:py-10">
              <SectionHeading
                eyebrow="Inquire"
                title="Event details"
                intro="Share your gathering details and we'll confirm availability, menu, and timing within one business day."
              />
            </div>
            <form onSubmit={handleSubmit} className="space-y-5 px-6 py-8 sm:px-10 sm:pb-10">
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                value={botcheck}
                onChange={(e) => setBotcheck(e.target.value)}
                style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  name="name"
                  required
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={fieldClass}
                />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={fieldClass}
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  name="phone"
                  required
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={fieldClass}
                />
                <input
                  name="eventDate"
                  type="date"
                  required
                  placeholder="Event date"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className={fieldClass}
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  name="eventType"
                  placeholder="Event type (brunch, corporate, holiday, etc.)"
                  value={formData.eventType}
                  onChange={handleChange}
                  className={fieldClass}
                />
                <input
                  name="guestCount"
                  placeholder="Guest count / servings"
                  value={formData.guestCount}
                  onChange={handleChange}
                  className={fieldClass}
                />
              </div>
              <div>
                <textarea
                  name="items"
                  rows={3}
                  placeholder="Requested items (e.g. 4 dozen mixed cookies, 6 loaves assorted breads, 1 bakery box for 20)"
                  value={formData.items}
                  onChange={handleChange}
                  className={textareaClass}
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <select
                  name="preference"
                  value={formData.preference}
                  onChange={handleChange}
                  className={fieldClass}
                >
                  <option value="delivery">Delivery</option>
                  <option value="pickup">Pickup</option>
                </select>
                <input
                  name="budget"
                  placeholder="Budget range (optional)"
                  value={formData.budget}
                  onChange={handleChange}
                  className={fieldClass}
                />
              </div>
              <textarea
                name="allergies"
                placeholder="Allergy or dietary notes"
                value={formData.allergies}
                onChange={handleChange}
                className={textareaClass}
              />
              <textarea
                name="message"
                rows={3}
                placeholder="Additional details or special requests"
                value={formData.message}
                onChange={handleChange}
                className={textareaClass}
              />

              {submitError && (
                <p
                  className="rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive"
                  role="alert"
                >
                  {submitError}
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="group k2k-button k2k-button-primary flex w-full items-center justify-center gap-2 disabled:opacity-60"
              >
                {submitting ? "Sending…" : "Submit Catering Request"}
                <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5" />
              </button>
              <p className="text-center text-sm text-k2k-navy/85">
                We reply within 1 business day to finalize details and availability.
              </p>
            </form>
          </div>
        </ScrollReveal>
      </Section>

      <Section bg="beige" reveal={false}>
        <ScrollReveal delay={1}>
          <p className="k2k-surface mx-auto max-w-md rounded-2xl border-t-2 border-t-k2k-blue/15 p-6 text-center text-sm text-k2k-navy/90">
            For simple menu items in smaller quantities, you can also use the{" "}
            <Link to="/custom-orders" className="font-medium text-k2k-blue hover:text-k2k-navy">
              Custom Orders form
            </Link>
            .
          </p>
        </ScrollReveal>
      </Section>

      <CTASection
        eyebrow="Prefer to talk?"
        title="Plan your event spread"
        text="Have questions about guest counts, menu pairings, or timing? Browse the menu or call Wendy directly — we're happy to help."
        primaryLabel="View Menu"
        primaryTo="/menu"
        secondaryLabel={BUSINESS.phone}
        secondaryTo={BUSINESS.phoneTel}
        secondaryIsPhone
        tertiaryLabel="Custom Orders"
        tertiaryTo="/custom-orders"
      />
    </>
  );
}
