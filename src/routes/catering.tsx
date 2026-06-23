import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/sections/Section";
import { BUSINESS, SITE_URL } from "@/lib/business";

const ACCESS_KEY =
  (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined) ??
  "5f50a39a-f868-4696-b3e9-d390c1f7f4f0";
const WEB3FORMS_URL = "https://api.web3forms.com/submit";

const fieldClass =
  "h-12 w-full rounded-xl border border-k2k-blue/18 bg-white px-4 text-sm shadow-sm transition-colors placeholder:text-muted-foreground/60 focus:border-k2k-blue focus:ring-2 focus:ring-k2k-blue/15 focus:outline-none";

const textareaClass =
  "w-full rounded-xl border border-k2k-blue/18 bg-white p-4 text-sm shadow-sm transition-colors placeholder:text-muted-foreground/60 focus:border-k2k-blue focus:ring-2 focus:ring-k2k-blue/15 focus:outline-none";

const CATERING_SERVICES = [
  {
    icon: "/assets/knead-to-know/icons/Knead_To_Know_Cookie_Icon.png",
    title: "Cookie Trays",
    desc: "Assorted sourdough cookies — chocolate chip, cranberry walnut, and seasonal varieties.",
    tier: "Popular",
  },
  {
    icon: "/assets/knead-to-know/icons/Knead_To_Know_Bread_Icon.png",
    title: "Bread Baskets",
    desc: "Selection of our loaves with butter or olive oil for events and dinners.",
    tier: "Events",
  },
  {
    icon: "/assets/knead-to-know/icons/Knead_To_Know_Dough_Swirl_Icon.png",
    title: "Brunch Spreads",
    desc: "Bagels, breads, and sweet pastries for morning meetings and gatherings.",
    tier: "Morning",
  },
  {
    icon: "/assets/knead-to-know/icons/Knead_To_Know_Gift_Box_Icon.png",
    title: "Bakery Gift Boxes",
    desc: "Curated boxes ideal for client gifts, hostesses, and corporate gifting.",
    tier: "Gifting",
  },
  {
    icon: "/assets/knead-to-know/icons/Knead_To_Know_Calendar_Preorder_Icon.png",
    title: "Holiday Orders",
    desc: "Seasonal loaves, cookies, and large-format boxes for celebrations.",
    tier: "Seasonal",
  },
  {
    icon: "/assets/knead-to-know/icons/Knead_To_Know_Wheat_Icon.png",
    title: "Custom Platters",
    desc: "Tell us your vision — we build to your guest count and preferences.",
    tier: "Bespoke",
  },
] as const;

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
      <div className="mx-auto max-w-xl px-5 py-24 text-center">
        <div className="k2k-card rounded-[1.75rem] p-10">
          <h1 className="font-display text-4xl text-ink">Thank you. Catering request received.</h1>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We will contact you shortly to confirm menu selections, quantities, timing, and
            delivery/pickup arrangements for your event.
          </p>
          <Link to="/" className="mt-8 inline-flex k2k-button k2k-button-primary">
            Return home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="relative overflow-hidden bg-white pb-14 pt-16 sm:pt-24">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(194,168,120,0.08),transparent_50%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
          <SectionHeading
            as="h1"
            eyebrow="Catering &amp; Events"
            title="Bakes for your gathering"
            intro="From office breakfasts to neighborhood parties and holiday celebrations — we prepare bread baskets, cookie platters, bakery boxes, and full brunch spreads."
          />
        </div>
      </section>

      <Section>
        <SectionHeading eyebrow="Formats" title="Popular catering formats" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CATERING_SERVICES.map((service) => (
            <div
              key={service.title}
              className="k2k-card group flex flex-col rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between gap-3">
                <img
                  src={service.icon}
                  alt=""
                  className="h-10 w-10 object-contain opacity-80"
                  aria-hidden
                />
                <span className="rounded-full bg-k2k-blue/8 px-2.5 py-0.5 text-[9px] font-medium uppercase tracking-[0.16em] text-k2k-navy ring-1 ring-k2k-blue/10">
                  {service.tier}
                </span>
              </div>
              <h3 className="mt-4 font-display text-xl text-ink">{service.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="beige">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="Inquire" title="Event details" />
          <form
            onSubmit={handleSubmit}
            className="k2k-card mt-10 space-y-5 rounded-[1.75rem] p-6 sm:p-8"
          >
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
                className="rounded-xl bg-destructive/10 px-4 py-3 text-sm text-destructive"
                role="alert"
              >
                {submitError}
              </p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="k2k-button k2k-button-primary flex w-full items-center justify-center gap-2 disabled:opacity-60"
            >
              {submitting ? "Sending…" : "Submit Catering Request"}
              <ArrowRight className="h-4 w-4" />
            </button>
            <p className="text-center text-xs text-muted-foreground">
              We reply within 1 business day to finalize details and availability.
            </p>
          </form>
        </div>
      </Section>

      <Section>
        <p className="mx-auto max-w-md text-center text-sm text-muted-foreground">
          For simple menu items in smaller quantities, you can also use the{" "}
          <Link to="/custom-orders" className="font-medium text-k2k-blue hover:text-k2k-navy">
            Custom Orders form
          </Link>
          .
        </p>
      </Section>
    </>
  );
}