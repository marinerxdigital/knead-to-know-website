import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { BUSINESS } from "@/lib/business";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(30).optional(),
  message: z.string().trim().min(1, "Please add a message or order notes").max(1500),
  botcheck: z.string().optional(),
});
type Values = z.infer<typeof schema>;

const ACCESS_KEY =
  (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined) ??
  "5f50a39a-f868-4696-b3e9-d390c1f7f4f0";
const WEB3FORMS_URL = "https://api.web3forms.com/submit";

const ERROR_MESSAGE = `Something went wrong while sending your message. Please try again or email us directly at ${BUSINESS.email}.`;

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { botcheck: "" },
  });

  const onSubmit = async (v: Values) => {
    setSubmitError(null);

    if (v.botcheck) return;

    if (!ACCESS_KEY) {
      if (import.meta.env.DEV) {
        console.warn(
          "VITE_WEB3FORMS_ACCESS_KEY is not set — contact form submissions will fail until it is configured.",
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
          subject: "New Contact Message - Knead To Know",
          from_name: v.name,
          name: v.name,
          email: v.email,
          phone: v.phone || "",
          message: v.message,
          source: "Contact Form",
          botcheck: "",
        }),
      });
      const data = (await res.json().catch(() => null)) as { success?: boolean } | null;
      if (!res.ok || !data?.success) throw new Error("Submission failed");
      reset();
      setSent(true);
    } catch {
      setSubmitError(ERROR_MESSAGE);
    }
  };

  if (sent) {
    return (
      <div className="rounded-3xl bg-white p-8 text-center">
        <CheckCircle2 className="mx-auto h-9 w-9 text-forest" />
        <h3 className="mt-4 font-display text-2xl text-ink">Thank you for reaching out.</h3>
        <p className="mt-2 text-sm text-muted-foreground">We will follow up with you soon.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="grid gap-5 rounded-3xl bg-white p-6 ring-1 ring-border/60 sm:p-8"
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

      <div className="grid gap-2">
        <Label>Name</Label>
        <Input {...register("name")} autoComplete="name" />
        {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
      </div>
      <div className="grid gap-2">
        <Label>Email</Label>
        <Input type="email" {...register("email")} autoComplete="email" />
        {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
      </div>
      <div className="grid gap-2">
        <Label>Phone (optional)</Label>
        <Input type="tel" {...register("phone")} autoComplete="tel" placeholder="[INSERT PHONE]" />
      </div>
      <div className="grid gap-2">
        <Label>Message / order notes</Label>
        <Textarea rows={5} {...register("message")} />
        {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
      </div>

      {submitError && (
        <p className="rounded-xl bg-destructive/10 px-4 py-3 text-sm text-destructive" role="alert">
          {submitError}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex h-12 items-center justify-center rounded-full bg-forest px-8 text-sm font-medium text-primary-foreground hover:bg-forest-dark disabled:opacity-60"
      >
        {isSubmitting ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
