import { createFileRoute, Link, useSearch } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Section, SectionHeading } from "@/components/sections/Section";
import { K2KProductCard } from "@/components/ui/K2KProductCard";
import { PRODUCTS } from "@/lib/products";
import { BUSINESS, SITE_URL } from "@/lib/business";
import { cn } from "@/lib/utils";

const ACCESS_KEY =
  (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined) ??
  "5f50a39a-f868-4696-b3e9-d390c1f7f4f0";
const WEB3FORMS_URL = "https://api.web3forms.com/submit";

const fieldClass =
  "w-full h-12 rounded-xl border border-k2k-blue/18 bg-white px-4 text-sm shadow-sm transition-colors placeholder:text-muted-foreground/60 focus:border-k2k-blue focus:ring-2 focus:ring-k2k-blue/15 focus:outline-none";

const textareaClass =
  "w-full rounded-xl border border-k2k-blue/18 bg-white p-4 text-sm shadow-sm transition-colors placeholder:text-muted-foreground/60 focus:border-k2k-blue focus:ring-2 focus:ring-k2k-blue/15 focus:outline-none";

const labelClass = "text-xs font-medium uppercase tracking-[0.14em] text-k2k-navy/70 block mb-1.5";

const STEPS = [
  { num: 1, label: "Choose bakes" },
  { num: 2, label: "Your details" },
  { num: 3, label: "Submit request" },
];

export const Route = createFileRoute("/custom-orders")({
  head: () => ({
    meta: [
      { title: "Custom Orders | Knead To Know" },
      {
        name: "description",
        content:
          "Request custom bakery boxes, bread orders, cookie trays, and special bakes from Knead To Know. Daniel Island small-batch bakery.",
      },
      { property: "og:title", content: "Custom Orders | Knead To Know" },
      {
        property: "og:description",
        content:
          "Tell us about your custom order — breads, cookies, boxes, quantities, and date. We'll confirm availability and details.",
      },
      { property: "og:url", content: `${SITE_URL}/custom-orders` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/custom-orders` }],
  }),
  component: CustomOrdersPage,
});

type Search = { product?: string };

function CustomOrdersPage() {
  const search = useSearch({ from: "/custom-orders" }) as Search;
  const preselectedId = search.product;

  const [selectedIds, setSelectedIds] = useState<string[]>(preselectedId ? [preselectedId] : []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    pickupTime: "",
    orderType: "pre-order",
    quantity: "1",
    occasion: "",
    budget: "",
    preference: "pickup" as "pickup" | "delivery",
    allergies: "",
    instructions: "",
    contactMethod: "email" as "email" | "phone",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [botcheck, setBotcheck] = useState("");

  const selectedProducts = PRODUCTS.filter((p) => selectedIds.includes(p.id));

  const toggleProduct = (id: string) => {
    setSelectedIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value as (typeof prev)[keyof typeof prev] }));
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
          subject: "New Custom Order Request - Knead To Know",
          from_name: formData.name,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          requested_date: formData.date,
          preferred_pickup_time: formData.pickupTime,
          order_type: formData.orderType,
          quantity: formData.quantity,
          occasion: formData.occasion,
          budget: formData.budget,
          preference: formData.preference,
          allergies: formData.allergies,
          instructions: formData.instructions,
          contact_method: formData.contactMethod,
          products_selected: selectedProducts.map((p) => p.name).join(" • ") || "None selected",
          source: "Custom Orders Form",
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
          ? `Something went wrong sending your order request. Please try again or email us directly at ${BUSINESS.email}.`
          : `Something went wrong sending your order request. Please try again or call ${BUSINESS.phone}.`,
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="mx-auto max-w-2xl px-5 py-24 text-center">
        <div className="k2k-card mx-auto max-w-lg rounded-[1.75rem] p-10">
          <div className="mx-auto mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-k2k-blue/10">
            <Check className="h-8 w-8 text-k2k-blue" />
          </div>
          <h1 className="font-display text-4xl text-ink">Thank you!</h1>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Your pre-order request for{" "}
            {selectedProducts.length
              ? selectedProducts.map((p) => p.name).join(", ")
              : "custom items"}{" "}
            is on its way to {BUSINESS.shortOwner}. She will confirm availability, pricing, and
            pickup details within 24 hours.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/menu" className="inline-flex k2k-button k2k-button-outline">
              Back to Menu
            </Link>
            <Link to="/" className="inline-flex k2k-button k2k-button-primary">
              Return Home
            </Link>
          </div>
          <p className="mt-10 text-xs text-muted-foreground">
            Daniel Island, SC • Small-batch bakery
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="relative overflow-hidden bg-white pb-14 pt-16 sm:pt-24">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(127,167,199,0.1),transparent_55%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
          <SectionHeading
            as="h1"
            eyebrow="Custom &amp; Pre-Orders"
            title="Request an Order"
            intro="Pre-orders only. Select items, share quantities and preferred pickup timing. Call, text, DM, or submit this form to place your order."
          />

          <ol className="mt-10 flex flex-wrap items-center gap-3 sm:gap-6">
            {STEPS.map((step, i) => (
              <li key={step.num} className="flex items-center gap-3">
                <span
                  className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-full text-xs font-medium",
                    i === 0
                      ? "bg-k2k-blue text-white"
                      : "border border-k2k-blue/25 text-k2k-navy/70",
                  )}
                >
                  {step.num}
                </span>
                <span className="text-xs font-medium uppercase tracking-[0.12em] text-k2k-navy/80">
                  {step.label}
                </span>
                {i < STEPS.length - 1 && (
                  <span className="hidden h-px w-8 bg-k2k-blue/20 sm:block" aria-hidden />
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-k2k-blue/70">
                  Step 1
                </p>
                <h2 className="mt-1 font-display text-2xl text-ink sm:text-3xl">
                  Choose your bakes
                </h2>
              </div>
              {selectedIds.length > 0 && (
                <span className="rounded-full bg-k2k-blue/10 px-3 py-1 text-xs font-medium text-k2k-navy">
                  {selectedIds.length} selected
                </span>
              )}
            </div>
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
              Tap any card to add or remove. You can select multiple items.
            </p>

            <div className="grid grid-cols-1 gap-5 sm:max-h-[640px] sm:grid-cols-2 sm:overflow-auto sm:pr-2">
              {PRODUCTS.map((product) => (
                <K2KProductCard
                  key={product.id}
                  product={product}
                  selectable
                  selected={selectedIds.includes(product.id)}
                  onSelect={() => toggleProduct(product.id)}
                  showCta={false}
                />
              ))}
            </div>

            <p className="mt-5 text-xs text-muted-foreground">
              Don&apos;t see exactly what you want? Add details in the special instructions field
              below.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="k2k-card space-y-5 rounded-[1.75rem] p-6 sm:p-8">
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              value={botcheck}
              onChange={(e) => setBotcheck(e.target.value)}
              style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
            />

            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-k2k-blue/70">
                Step 2
              </p>
              <h2 className="mt-1 font-display text-2xl text-ink">Your details</h2>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className={labelClass}>Name</label>
                <input
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={fieldClass}
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className={labelClass}>Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={fieldClass}
                  placeholder="you@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className={labelClass}>Phone</label>
                <input
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className={fieldClass}
                  placeholder="(843) 973-0309"
                />
              </div>
              <div>
                <label className={labelClass}>Preferred pickup date</label>
                <input
                  type="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className={fieldClass}
                />
              </div>
              <div>
                <label className={labelClass}>Preferred pickup time</label>
                <input
                  type="time"
                  name="pickupTime"
                  value={formData.pickupTime}
                  onChange={handleChange}
                  className={fieldClass}
                />
              </div>
            </div>

            <div>
              <label className={labelClass}>Products selected</label>
              <div className="min-h-[44px] rounded-xl border border-k2k-blue/18 bg-[#f8fafc] px-4 py-2.5 text-sm">
                {selectedProducts.length > 0 ? (
                  <span className="text-ink">
                    {selectedProducts.map((p) => p.name).join(" • ")}
                  </span>
                ) : (
                  <span className="text-muted-foreground">
                    Select items above or describe your request below.
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className={labelClass}>Order type</label>
                <select
                  name="orderType"
                  value={formData.orderType}
                  onChange={handleChange}
                  className={fieldClass}
                >
                  <option value="pre-order">Pre-Order</option>
                  <option value="bakery-box">Bakery Box</option>
                  <option value="cookie-tray">Cookie Tray</option>
                  <option value="bread-order">Bread Order</option>
                  <option value="custom">Custom Bakery Request</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Occasion / event type</label>
                <input
                  name="occasion"
                  value={formData.occasion}
                  onChange={handleChange}
                  className={fieldClass}
                  placeholder="Everyday, brunch, gift, celebration..."
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className={labelClass}>Estimated quantity (total items / loaves)</label>
                <input
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className={fieldClass}
                  placeholder="e.g. 2 loaves + 12 cookies"
                />
              </div>
              <div>
                <label className={labelClass}>Budget range (optional)</label>
                <input
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className={fieldClass}
                  placeholder="Share your range — we'll confirm exact pricing"
                />
              </div>
            </div>

            <div>
              <label className={labelClass}>Pickup or delivery?</label>
              <select
                name="preference"
                value={formData.preference}
                onChange={handleChange}
                className={fieldClass}
              >
                <option value="pickup">Pickup (Daniel Island)</option>
                <option value="delivery">Delivery (local area)</option>
              </select>
            </div>

            <div>
              <label className={labelClass}>Allergy notes or dietary requests</label>
              <textarea
                name="allergies"
                value={formData.allergies}
                onChange={handleChange}
                rows={2}
                className={textareaClass}
                placeholder="E.g. Contains nuts, gluten free request (note: we are not a dedicated GF facility)"
              />
            </div>

            <div>
              <label className={labelClass}>Special instructions / custom request</label>
              <textarea
                name="instructions"
                value={formData.instructions}
                onChange={handleChange}
                rows={3}
                className={textareaClass}
                placeholder="E.g. Need a mixed bakery box for a brunch, or 3 rosemary loaves sliced, etc."
              />
            </div>

            <div>
              <label className={labelClass}>Preferred contact method</label>
              <div className="flex gap-6 text-sm">
                <label className="flex cursor-pointer items-center gap-2">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="email"
                    checked={formData.contactMethod === "email"}
                    onChange={handleChange}
                    className="accent-k2k-blue"
                  />
                  Email
                </label>
                <label className="flex cursor-pointer items-center gap-2">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="phone"
                    checked={formData.contactMethod === "phone"}
                    onChange={handleChange}
                    className="accent-k2k-blue"
                  />
                  Phone
                </label>
              </div>
            </div>

            {submitError && (
              <p
                className="rounded-xl bg-destructive/10 px-4 py-3 text-sm text-destructive"
                role="alert"
              >
                {submitError}
              </p>
            )}

            <div className="border-t border-k2k-blue/10 pt-5">
              <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-k2k-blue/70">
                Step 3 — Submit
              </p>
              <button
                type="submit"
                disabled={submitting}
                className="k2k-button k2k-button-primary flex w-full items-center justify-center gap-2 disabled:opacity-60"
              >
                {submitting ? "Sending…" : "Submit Custom Order Request"}
                <ArrowRight className="h-4 w-4" />
              </button>

              <p className="pt-3 text-center text-[10px] leading-relaxed text-muted-foreground">
                This is a request. We will reply to confirm pricing, exact availability, and timing.
                Standard pricing from menu applies unless custom work is required.
              </p>
            </div>
          </form>
        </div>
      </Section>

      <Section bg="beige">
        <div className="max-w-prose text-sm">
          <p className="font-display text-lg text-ink">Need something larger or different?</p>
          <p className="mt-2 leading-relaxed text-muted-foreground">
            We also handle full catering spreads, corporate orders, and seasonal specials. Visit our{" "}
            <Link to="/catering" className="font-medium text-k2k-blue hover:text-k2k-navy">
              Catering page
            </Link>{" "}
            or call{" "}
            <a href={BUSINESS.phoneTel} className="font-medium text-k2k-blue hover:text-k2k-navy">
              {BUSINESS.phone}
            </a>{" "}
            with questions.
          </p>
        </div>
      </Section>
    </>
  );
}
