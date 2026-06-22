import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Section, SectionHeading } from "@/components/sections/Section";
import { SITE_URL } from "@/lib/business";

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
        content: "Order platters, spreads, and boxes for events. Small-batch bakery catering on Daniel Island.",
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto px-5 py-24 text-center">
        <h1 className="font-display text-4xl">Thank you. Catering request received.</h1>
        <p className="mt-4 text-muted-foreground">
          We will contact you shortly to confirm menu selections, quantities, timing, and delivery/pickup arrangements for your event.
        </p>
        <Link to="/" className="mt-8 inline-block rounded-full bg-forest px-8 h-11 text-sm text-white inline-flex items-center">Return home</Link>
      </div>
    );
  }

  return (
    <>
      <section className="bg-white pb-12 pt-16 sm:pt-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <SectionHeading
            as="h1"
            eyebrow="Catering &amp; Events"
            title="Bakes for your gathering"
            intro="From office breakfasts to neighborhood parties and holiday celebrations — we prepare bread baskets, cookie platters, bakery boxes, and full brunch spreads."
          />
        </div>
      </section>

      <Section>
        <div className="max-w-3xl">
          <h2 className="font-display text-2xl mb-4">Popular catering formats</h2>
          <div className="grid sm:grid-cols-2 gap-5 text-sm">
            {[
              ["Cookie Trays", "Assorted sourdough cookies — chocolate chip, cranberry walnut, and seasonal varieties."],
              ["Bread Baskets", "Selection of our loaves with butter or olive oil for events and dinners."],
              ["Brunch Spreads", "Bagels, breads, and sweet pastries for morning meetings and gatherings."],
              ["Bakery Gift Boxes", "Curated boxes ideal for client gifts, hostesses, and corporate gifting."],
              ["Holiday Orders", "Seasonal loaves, cookies, and large-format boxes for celebrations."],
              ["Custom Platters", "Tell us your vision — we build to your guest count and preferences."],
            ].map(([title, desc], i) => (
              <div key={i} className="rounded-2xl bg-white p-6 ring-1 ring-border/50">
                <h3 className="font-medium text-lg">{title}</h3>
                <p className="mt-2 text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section bg="cream">
        <SectionHeading
          eyebrow="Inquire"
          title="Event details"
        />
        <form onSubmit={handleSubmit} className="mt-8 max-w-3xl space-y-5">
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="name" required placeholder="Name" value={formData.name} onChange={handleChange} className="h-11 rounded-xl border px-4" />
            <input name="email" type="email" required placeholder="Email" value={formData.email} onChange={handleChange} className="h-11 rounded-xl border px-4" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="phone" required placeholder="Phone" value={formData.phone} onChange={handleChange} className="h-11 rounded-xl border px-4" />
            <input name="eventDate" type="date" required placeholder="Event date" value={formData.eventDate} onChange={handleChange} className="h-11 rounded-xl border px-4" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="eventType" placeholder="Event type (brunch, corporate, holiday, etc.)" value={formData.eventType} onChange={handleChange} className="h-11 rounded-xl border px-4" />
            <input name="guestCount" placeholder="Guest count / servings" value={formData.guestCount} onChange={handleChange} className="h-11 rounded-xl border px-4" />
          </div>
          <div>
            <textarea name="items" rows={3} placeholder="Requested items (e.g. 4 dozen mixed cookies, 6 loaves assorted breads, 1 bakery box for 20)" value={formData.items} onChange={handleChange} className="w-full rounded-xl border p-4" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <select name="preference" value={formData.preference} onChange={handleChange} className="h-11 rounded-xl border px-4">
              <option value="delivery">Delivery</option>
              <option value="pickup">Pickup</option>
            </select>
            <input name="budget" placeholder="Budget range (optional)" value={formData.budget} onChange={handleChange} className="h-11 rounded-xl border px-4" />
          </div>
          <textarea name="allergies" placeholder="Allergy or dietary notes" value={formData.allergies} onChange={handleChange} className="w-full rounded-xl border p-4" />
          <textarea name="message" rows={3} placeholder="Additional details or special requests" value={formData.message} onChange={handleChange} className="w-full rounded-xl border p-4" />

          <button type="submit" className="h-12 rounded-full bg-forest w-full text-sm font-medium text-white">Submit Catering Request</button>
          <p className="text-center text-xs text-muted-foreground">We reply within 1 business day to finalize details and availability.</p>
        </form>
      </Section>

      <Section>
        <p className="text-sm text-center text-muted-foreground max-w-md mx-auto">
          For simple menu items in smaller quantities, you can also use the <Link to="/custom-orders" className="text-forest underline">Custom Orders form</Link>.
        </p>
      </Section>
    </>
  );
}
