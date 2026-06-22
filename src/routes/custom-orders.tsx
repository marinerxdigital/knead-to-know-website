import { createFileRoute, Link, useSearch } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Section, SectionHeading } from "@/components/sections/Section";
import { K2KProductCard } from "@/components/ui/K2KProductCard";
import { PRODUCTS } from "@/lib/products";
import { SITE_URL } from "@/lib/business";

const ACCESS_KEY =
  (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined) ??
  "5f50a39a-f868-4696-b3e9-d390c1f7f4f0";
const WEB3FORMS_URL = "https://api.web3forms.com/submit";

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
    setFormData((prev) => ({ ...prev, [name]: value as any }));
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
        "Something went wrong sending your order request. Please try again or email us directly.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-5 py-20 text-center">
        <div className="mx-auto mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-forest/10">
          <Check className="h-8 w-8 text-forest" />
        </div>
        <h1 className="font-display text-4xl text-ink">Thank you — order request received.</h1>
        <p className="mt-4 text-muted-foreground">
          We have your request for{" "}
          {selectedProducts.length
            ? selectedProducts.map((p) => p.name).join(", ")
            : "custom items"}
          . Our team will confirm availability, pricing for your quantity, pickup or delivery
          details, and next steps within 1 business day.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/menu"
            className="rounded-full border px-6 h-11 inline-flex items-center text-sm"
          >
            Back to Menu
          </Link>
          <Link
            to="/"
            className="rounded-full bg-forest px-6 h-11 inline-flex items-center text-sm text-white"
          >
            Return Home
          </Link>
        </div>
        <p className="mt-10 text-xs text-muted-foreground">
          Daniel Island, SC • Small-batch bakery
        </p>
      </div>
    );
  }

  return (
    <>
      <section className="bg-white pb-12 pt-16 sm:pt-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <SectionHeading
            as="h1"
            eyebrow="Custom &amp; Pre-Orders"
            title="Tell us what you need"
            intro="Select from our signature collection or describe a custom bakery box, tray, or special request. We’ll confirm details and availability."
          />
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.1fr,1fr]">
          {/* PRODUCT SELECTOR using cards */}
          <div>
            <h2 className="font-display text-2xl text-ink mb-4">Choose your bakes</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Tap any card to add or remove. You can select multiple items.
            </p>

            <div className="grid grid-cols-1 gap-4 sm:max-h-[620px] sm:grid-cols-2 sm:overflow-auto sm:pr-1">
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

            <div className="mt-4 text-xs text-muted-foreground">
              Don’t see exactly what you want? Add details in the special instructions field below.
            </div>
          </div>

          {/* FORM */}
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
            <h2 className="font-display text-2xl text-ink">Your details</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs uppercase tracking-[0.12em] text-muted-foreground block mb-1.5">
                  Name
                </label>
                <input
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full h-11 rounded-xl border px-4 bg-white"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.12em] text-muted-foreground block mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-11 rounded-xl border px-4 bg-white"
                  placeholder="you@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs uppercase tracking-[0.12em] text-muted-foreground block mb-1.5">
                  Phone
                </label>
                <input
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full h-11 rounded-xl border px-4 bg-white"
                  placeholder="(843) 555-0123"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.12em] text-muted-foreground block mb-1.5">
                  Requested pickup / event date
                </label>
                <input
                  type="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full h-11 rounded-xl border px-4 bg-white"
                />
              </div>
            </div>

            <div>
              <label className="text-xs uppercase tracking-[0.12em] text-muted-foreground block mb-1.5">
                Products selected
              </label>
              <div className="min-h-[42px] rounded-xl border bg-white px-4 py-2 text-sm">
                {selectedProducts.length > 0 ? (
                  selectedProducts.map((p) => p.name).join(" • ")
                ) : (
                  <span className="text-muted-foreground">
                    Select items above or describe your request below.
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs uppercase tracking-[0.12em] text-muted-foreground block mb-1.5">
                  Order type
                </label>
                <select
                  name="orderType"
                  value={formData.orderType}
                  onChange={handleChange}
                  className="w-full h-11 rounded-xl border px-4 bg-white"
                >
                  <option value="pre-order">Pre-Order</option>
                  <option value="bakery-box">Bakery Box</option>
                  <option value="cookie-tray">Cookie Tray</option>
                  <option value="bread-order">Bread Order</option>
                  <option value="custom">Custom Bakery Request</option>
                </select>
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.12em] text-muted-foreground block mb-1.5">
                  Occasion / event type
                </label>
                <input
                  name="occasion"
                  value={formData.occasion}
                  onChange={handleChange}
                  className="w-full h-11 rounded-xl border px-4 bg-white"
                  placeholder="Everyday, brunch, gift, celebration..."
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs uppercase tracking-[0.12em] text-muted-foreground block mb-1.5">
                  Estimated quantity (total items / loaves)
                </label>
                <input
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full h-11 rounded-xl border px-4 bg-white"
                  placeholder="e.g. 2 loaves + 12 cookies"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.12em] text-muted-foreground block mb-1.5">
                  Budget range (optional)
                </label>
                <input
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full h-11 rounded-xl border px-4 bg-white"
                  placeholder="Share your range — we'll confirm exact pricing"
                />
              </div>
            </div>

            <div>
              <label className="text-xs uppercase tracking-[0.12em] text-muted-foreground block mb-1.5">
                Pickup or delivery?
              </label>
              <select
                name="preference"
                value={formData.preference}
                onChange={handleChange}
                className="w-full h-11 rounded-xl border px-4 bg-white"
              >
                <option value="pickup">Pickup (Daniel Island)</option>
                <option value="delivery">Delivery (local area)</option>
              </select>
            </div>

            <div>
              <label className="text-xs uppercase tracking-[0.12em] text-muted-foreground block mb-1.5">
                Allergy notes or dietary requests
              </label>
              <textarea
                name="allergies"
                value={formData.allergies}
                onChange={handleChange}
                rows={2}
                className="w-full rounded-xl border p-4 bg-white"
                placeholder="E.g. Contains nuts, gluten free request (note: we are not a dedicated GF facility)"
              />
            </div>

            <div>
              <label className="text-xs uppercase tracking-[0.12em] text-muted-foreground block mb-1.5">
                Special instructions / custom request
              </label>
              <textarea
                name="instructions"
                value={formData.instructions}
                onChange={handleChange}
                rows={3}
                className="w-full rounded-xl border p-4 bg-white"
                placeholder="E.g. Need a mixed bakery box for a brunch, or 3 rosemary loaves sliced, etc."
              />
            </div>

            <div>
              <label className="text-xs uppercase tracking-[0.12em] text-muted-foreground block mb-1.5">
                Preferred contact method
              </label>
              <div className="flex gap-4 text-sm">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="email"
                    checked={formData.contactMethod === "email"}
                    onChange={handleChange}
                  />{" "}
                  Email
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="phone"
                    checked={formData.contactMethod === "phone"}
                    onChange={handleChange}
                  />{" "}
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

            <button
              type="submit"
              disabled={submitting}
              className="mt-2 w-full h-12 rounded-full bg-forest text-sm font-medium text-white flex items-center justify-center gap-2 hover:bg-forest-dark disabled:opacity-60"
            >
              {submitting ? "Sending…" : "Submit Custom Order Request"}{" "}
              <ArrowRight className="h-4 w-4" />
            </button>

            <p className="text-[10px] text-center text-muted-foreground pt-1">
              This is a request. We will reply to confirm pricing, exact availability, and timing.
              Standard pricing from menu applies unless custom work is required.
            </p>
          </form>
        </div>
      </Section>

      <Section bg="blush">
        <div className="text-sm max-w-prose">
          <p className="font-medium">Need something larger or different?</p>
          <p className="mt-1 text-muted-foreground">
            We also handle full catering spreads, corporate orders, and seasonal specials. Visit our{" "}
            <Link to="/catering" className="underline">
              Catering page
            </Link>{" "}
            or call with questions.
          </p>
        </div>
      </Section>
    </>
  );
}
