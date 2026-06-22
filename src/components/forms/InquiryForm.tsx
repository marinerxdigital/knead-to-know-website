import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { EVENT_TYPES } from "@/lib/site-data";
import { BUSINESS } from "@/lib/business";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  eventDate: z.string().trim().min(1, "Please choose a date"),
  eventType: z.string().min(1, "Select an event type"),
  location: z.string().trim().max(200).optional().or(z.literal("")),
  servings: z.string().trim().max(50).optional().or(z.literal("")),
  fulfillment: z.enum(["Pickup", "Delivery request", "Not sure yet"]),
  flavor: z.string().trim().max(200).optional().or(z.literal("")),
  inspiration: z.string().trim().max(1500).optional().or(z.literal("")),
  notes: z.string().trim().max(1500).optional().or(z.literal("")),
  botcheck: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const ACCESS_KEY = (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined) ?? "5f50a39a-f868-4696-b3e9-d390c1f7f4f0";
const WEB3FORMS_URL = "https://api.web3forms.com/submit";

const ERROR_MESSAGE = `Something went wrong while submitting your inquiry. Please try again or email Alexandra directly at ${BUSINESS.email}.`;

export function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { fulfillment: "Not sure yet", botcheck: "" },
  });

  const onSubmit = async (values: FormValues) => {
    setSubmitError(null);

    // Honeypot — silently drop bot submissions.
    if (values.botcheck) return;

    if (!ACCESS_KEY) {
      if (import.meta.env.DEV) {
        console.warn(
          "VITE_WEB3FORMS_ACCESS_KEY is not set — inquiry form submissions will fail until it is configured.",
        );
      }
      setSubmitError(ERROR_MESSAGE);
      return;
    }

    try {
      const res = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: "New Bakery Order Inquiry - Knead To Know",
          from_name: values.name,
          name: values.name,
          email: values.email,
          phone: values.phone || "",
          event_date: values.eventDate,
          event_type: values.eventType,
          event_location: values.location || "",
          servings: values.servings || "",
          fulfillment: values.fulfillment,
          flavor_preferences: values.flavor || "",
          design_inspiration: values.inspiration || "",
          notes: values.notes || "",
          source: "Order Inquiry Form",
          botcheck: "",
        }),
      });
      const data = (await res.json().catch(() => null)) as { success?: boolean } | null;
      if (!res.ok || !data?.success) throw new Error("Submission failed");
      reset();
      setSubmitted(true);
    } catch {
      setSubmitError(ERROR_MESSAGE);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-3xl bg-blush p-8 text-center sm:p-12">
        <CheckCircle2 className="mx-auto h-10 w-10 text-forest" />
        <h3 className="mt-4 font-display text-3xl text-ink">Thank you for your inquiry.</h3>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          Alexandra will review your event details and follow up with availability and next steps.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="grid gap-5 rounded-3xl bg-white p-6 ring-1 ring-border/60 sm:p-10"
    >
      {/* Honeypot — hidden from real users */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        {...register("botcheck")}
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" error={errors.name?.message}>
          <Input {...register("name")} autoComplete="name" />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <Input type="email" {...register("email")} autoComplete="email" />
        </Field>
        <Field label="Phone" optional error={errors.phone?.message}>
          <Input type="tel" {...register("phone")} autoComplete="tel" />
        </Field>
        <Field label="Event date" error={errors.eventDate?.message}>
          <Input type="date" {...register("eventDate")} />
        </Field>
        <Field label="Event type" error={errors.eventType?.message}>
          <Select {...register("eventType")} defaultValue="">
            <option value="" disabled>Select an event type</option>
            {EVENT_TYPES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </Select>
        </Field>
        <Field label="Event location" optional error={errors.location?.message}>
          <Input {...register("location")} placeholder="Venue, neighborhood, or city" />
        </Field>
        <Field label="Guest count / servings needed" optional error={errors.servings?.message}>
          <Input {...register("servings")} placeholder="e.g. 40" />
        </Field>
        <Field label="Pickup or delivery" error={errors.fulfillment?.message}>
          <Select {...register("fulfillment")}>
            <option value="Pickup">Pickup</option>
            <option value="Delivery request">Delivery request</option>
            <option value="Not sure yet">Not sure yet</option>
          </Select>
        </Field>
        <Field label="Cake flavor (if known)" optional error={errors.flavor?.message}>
          <Input {...register("flavor")} placeholder="Vanilla bean, lemon, chocolate…" />
        </Field>
      </div>

      <Field label="Design inspiration" optional error={errors.inspiration?.message}>
        <Textarea
          rows={4}
          {...register("inspiration")}
          placeholder="Tell us about colors, style, vibe, florals, references…"
        />
      </Field>

      <Field label="Additional notes" optional error={errors.notes?.message}>
        <Textarea
          rows={3}
          {...register("notes")}
          placeholder="Allergies, dietary needs, anything else we should know"
        />
      </Field>

      <div>
        <label className="text-sm font-medium text-ink">
          Inspiration photos <span className="text-muted-foreground">(optional)</span>
        </label>
        <input
          type="file"
          accept="image/*"
          multiple
          className="mt-2 block w-full cursor-pointer rounded-xl border border-dashed border-border bg-blush/40 px-4 py-3 text-sm text-muted-foreground file:mr-4 file:rounded-full file:border-0 file:bg-forest file:px-4 file:py-2 file:text-sm file:text-primary-foreground hover:bg-blush"
        />
        <p className="mt-1 text-xs text-muted-foreground">
          Photo uploads are reviewed once the form backend is connected.
        </p>
      </div>

      {submitError && (
        <p className="rounded-xl bg-destructive/10 px-4 py-3 text-sm text-destructive" role="alert">
          {submitError}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 inline-flex h-12 w-full items-center justify-center rounded-full bg-forest px-6 text-sm font-medium text-primary-foreground transition hover:bg-forest-dark disabled:opacity-60 sm:w-auto sm:self-start sm:px-10"
      >
        {isSubmitting ? "Sending…" : "Submit Cake Inquiry"}
      </button>
    </form>
  );
}

function Field({
  label,
  optional,
  error,
  children,
}: {
  label: string;
  optional?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <Label className="text-sm font-medium text-ink">
        {label}
        {optional && <span className="ml-1 text-muted-foreground">(optional)</span>}
      </Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}

function Select({
  ref,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & { ref?: React.Ref<HTMLSelectElement> }) {
  return (
    <select
      ref={ref}
      {...props}
      className="h-11 w-full rounded-xl border border-input bg-background px-3 text-sm text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    />
  );
}
