import { createFileRoute, Link, useSearch } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2, Sparkles } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { K2KProductCard } from "@/components/ui/K2KProductCard";
import { BAKERY_PHOTOS, PRODUCTS } from "@/lib/products";
import { BUSINESS, SITE_URL } from "@/lib/business";
import { cn } from "@/lib/utils";

const ACCESS_KEY =
  (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined) ??
  "5f50a39a-f868-4696-b3e9-d390c1f7f4f0";
const WEB3FORMS_URL = "https://api.web3forms.com/submit";

const fieldClass =
  "min-h-12 h-12 w-full rounded-xl border border-[#111] bg-white px-4 text-sm shadow-sm transition-all duration-300 placeholder:text-muted-foreground/60 focus:border-[#111] focus:ring-2 focus:ring-[#111]/10 focus:shadow-[0_4px_20px_-6px_rgba(17,17,17,0.12)] focus:outline-none";

const textareaClass =
  "min-h-[120px] w-full resize-y rounded-xl border border-[#111] bg-white px-4 py-3.5 text-sm leading-relaxed shadow-sm transition-all duration-300 placeholder:text-muted-foreground/60 focus:border-[#111] focus:ring-2 focus:ring-[#111]/10 focus:shadow-[0_4px_20px_-6px_rgba(17,17,17,0.12)] focus:outline-none";

const labelClass = "text-xs font-medium uppercase tracking-[0.14em] text-k2k-navy/70 block mb-1.5";

const STEPS = [
  { num: 1, label: "Choose bakes", short: "Choose" },
  { num: 2, label: "Your details", short: "Details" },
  { num: 3, label: "Submit request", short: "Submit" },
] as const;

const PROCESS_STEPS = [
  {
    num: 1,
    title: "Choose",
    desc: "Select the bakes you'd like from our menu — tap any card to add or remove items.",
  },
  {
    num: 2,
    title: "Details",
    desc: "Share your preferred pickup date and time, quantities, and any special instructions.",
  },
  {
    num: 3,
    title: "Submit",
    desc: `Send your request and ${BUSINESS.shortOwner} will confirm availability, pricing, and timing within 24 hours.`,
  },
] as const;

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

function OrderStepIndicator() {
  return (
    <nav aria-label="Order steps" className="w-full min-w-0">
      <ol className="grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:items-center sm:gap-5">
        {STEPS.map((step, i) => (
          <li
            key={step.num}
            className="flex min-w-0 flex-col items-center gap-1.5 sm:flex-row sm:gap-3"
          >
            <span
              className={cn(
                "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold leading-none transition-colors sm:h-10 sm:w-10",
                i === 0
                  ? "border border-[#111] bg-k2k-blue text-white shadow-[0_8px_24px_-8px_rgba(59,110,145,0.55)]"
                  : "border border-[#111] bg-white text-k2k-navy/70",
              )}
            >
              {step.num}
            </span>
            <span className="text-center text-[9px] font-medium uppercase tracking-[0.12em] text-k2k-navy/80 sm:text-left sm:text-xs sm:tracking-[0.12em]">
              <span className="hidden sm:inline">{step.label}</span>
              <span className="sm:hidden">{step.short}</span>
            </span>
            {i < STEPS.length - 1 && (
              <span
                className="mx-0.5 hidden h-px w-6 bg-k2k-blue/20 sm:mx-1 sm:block sm:w-10"
                aria-hidden
              />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

function ProcessSidebar() {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-28">
        <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-k2k-blue/70">
          How it works
        </p>
        <h3 className="mt-2 font-display text-2xl text-ink">Three simple steps</h3>

        <ol className="mt-8 space-y-0">
          {PROCESS_STEPS.map((step, i) => (
            <ScrollReveal
              key={step.num}
              delay={Math.min(i + 1, 4) as 0 | 1 | 2 | 3 | 4}
              as="li"
              className="relative flex gap-4 pb-8 last:pb-0"
            >
              {i < PROCESS_STEPS.length - 1 && (
                <span
                  className="absolute left-[15px] top-9 h-[calc(100%-2rem)] w-px bg-k2k-blue/15"
                  aria-hidden
                />
              )}
              <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#111] bg-[#f8f4ed] text-xs font-semibold text-k2k-blue">
                {step.num}
              </span>
              <div className="pt-0.5">
                <p className="font-display text-lg text-ink">{step.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </ol>

        <ScrollReveal delay={2}>
          <div className="k2k-card mt-8 overflow-hidden rounded-2xl">
            <img
              src={BAKERY_PHOTOS.chocolateChipCookies}
              alt=""
              className="aspect-[4/3] w-full object-cover"
              aria-hidden
            />
            <p className="px-4 py-3 text-xs leading-relaxed text-muted-foreground">
              {BUSINESS.orderingModel} — every bake is made fresh for your order.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </aside>
  );
}

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
      <section className="relative overflow-hidden bg-[#f8f4ed] px-5 py-24 sm:px-8 sm:py-32">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(106,158,192,0.12),transparent_60%)]"
          aria-hidden
        />

        <div className="relative mx-auto max-w-2xl">
          <div className="k2k-card overflow-hidden rounded-[2rem] p-10 sm:p-12">
            {/* Scoring accent */}
            <div className="mb-8 flex items-center gap-3" aria-hidden="true">
              <div className="relative h-px flex-1">
                <div className="absolute inset-0 k2k-line-grow bg-k2k-blue/15" />
              </div>
              <Sparkles className="h-4 w-4 text-wheat transition duration-300 hover:scale-110 hover:rotate-12" />
              <div className="relative h-px flex-1">
                <div className="absolute inset-0 k2k-line-grow bg-k2k-blue/15" />
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <div className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-[#111] bg-[#f8f4ed]/80 transition duration-300 hover:scale-105">
                <img
                  src="/assets/knead-to-know/icons/Knead_To_Know_Cookie_Icon.png"
                  alt=""
                  className="k2k-breathe h-7 w-7 object-contain opacity-80 transition duration-300 group-hover:scale-110 group-hover:animate-none"
                  aria-hidden
                />
              </div>
              <div className="group flex h-16 w-16 items-center justify-center rounded-full border border-[#111] bg-k2k-blue/10 ring-4 ring-k2k-blue/5 transition duration-300 hover:scale-105">
                <CheckCircle2
                  className="h-8 w-8 text-k2k-blue transition duration-300 group-hover:scale-110"
                  strokeWidth={2}
                />
              </div>
              <div className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-[#111] bg-[#f8f4ed]/80 transition duration-300 hover:scale-105">
                <img
                  src="/assets/knead-to-know/icons/Knead_To_Know_Bread_Icon.png"
                  alt=""
                  className="k2k-breathe h-7 w-7 object-contain opacity-80 transition duration-300 group-hover:scale-110 group-hover:animate-none"
                  aria-hidden
                />
              </div>
            </div>

            <h1 className="mt-8 text-center font-display text-4xl text-ink sm:text-5xl">
              Request received
            </h1>
            <p className="mx-auto mt-4 max-w-md text-center leading-relaxed text-muted-foreground">
              Your pre-order request for{" "}
              <span className="font-medium text-ink">
                {selectedProducts.length
                  ? selectedProducts.map((p) => p.name).join(", ")
                  : "custom items"}
              </span>{" "}
              is on its way to {BUSINESS.shortOwner}.
            </p>

            <div className="k2k-surface mx-auto mt-8 max-w-sm rounded-2xl bg-[#f8f4ed]/60 px-5 py-4 text-center">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-k2k-blue/70">
                What happens next
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                She will confirm availability, pricing, and pickup details within 24 hours via your
                preferred contact method.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link to="/menu" className="inline-flex k2k-button k2k-button-outline">
                Back to Menu
              </Link>
              <Link to="/" className="inline-flex k2k-button k2k-button-primary">
                Return Home
              </Link>
            </div>

            <p className="mt-10 text-center text-xs text-muted-foreground">
              Daniel Island, SC · {BUSINESS.name}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <PageHero
        eyebrow="Custom & Pre-Orders"
        title="Request an Order"
        intro="Pre-orders only. Select items, share quantities and preferred pickup timing. Call, text, DM, or submit this form to place your order."
        image={BAKERY_PHOTOS.hero}
        imageAlt="Fresh bakery spread from Knead To Know"
        imagePosition="right"
      >
        <OrderStepIndicator />
      </PageHero>

      <Section id="choose-bakes">
        <ScrollReveal>
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-k2k-blue/70">
                Step 1
              </p>
              <h2 className="mt-1 font-display text-2xl text-ink sm:text-3xl">Choose your bakes</h2>
            </div>
            {selectedIds.length > 0 && (
              <span className="k2k-surface rounded-full px-3 py-1 text-xs font-medium text-k2k-navy">
                {selectedIds.length} selected
              </span>
            )}
          </div>
          <p className="mb-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Tap any card to add or remove. You can select multiple items — don&apos;t see exactly
            what you want? Add details in the special instructions field below.
          </p>

          <div className="k2k-accent-rail k2k-surface min-w-0 overflow-hidden rounded-[1.75rem] border-t-2 border-t-k2k-blue/25 p-5 pl-5 sm:p-7 sm:pl-7">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {PRODUCTS.map((product, index) => {
                const delay = (index % 5) as 0 | 1 | 2 | 3 | 4;
                return (
                  <ScrollReveal key={product.id} delay={delay}>
                    <K2KProductCard
                      product={product}
                      selectable
                      selected={selectedIds.includes(product.id)}
                      onSelect={() => toggleProduct(product.id)}
                      showCta={false}
                    />
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </Section>

      <Section bg="beige" reveal={false}>
        <ScrollReveal>
          <div className="k2k-accent-rail k2k-card min-w-0 overflow-hidden rounded-[2rem] border-t-2 border-t-k2k-blue/25 p-6 pl-5 sm:p-8 sm:pl-7 lg:p-10">
            <div className="grid gap-12 lg:grid-cols-[1fr_280px] lg:gap-16">
              <form onSubmit={handleSubmit} className="space-y-5">
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
                  <h2 className="mt-1 font-display text-2xl text-ink sm:text-3xl">Your details</h2>
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
                  <div className="k2k-surface flex min-h-12 items-center rounded-xl bg-[#f8fafc] px-4 py-2.5 text-sm">
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
                    className="rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive"
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
                    className="group k2k-button k2k-button-primary flex w-full items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                        Sending request…
                      </>
                    ) : (
                      <>
                        Submit Custom Order Request
                        <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5" />
                      </>
                    )}
                  </button>

                  <p className="pt-3 text-center text-[10px] leading-relaxed text-muted-foreground">
                    This is a request. We will reply to confirm pricing, exact availability, and
                    timing. Standard pricing from menu applies unless custom work is required.
                  </p>
                </div>
              </form>

              <ProcessSidebar />
            </div>
          </div>
        </ScrollReveal>
      </Section>

      <Section bg="white">
        <ScrollReveal delay={1}>
          <div className="k2k-surface max-w-prose rounded-2xl border-t-2 border-t-k2k-blue/15 p-6 text-sm">
            <p className="font-display text-lg text-ink">Need something larger or different?</p>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              We also handle full catering spreads, corporate orders, and seasonal specials. Visit
              our{" "}
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
        </ScrollReveal>
      </Section>
    </>
  );
}
