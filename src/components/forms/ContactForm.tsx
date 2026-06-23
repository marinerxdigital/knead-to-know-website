import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
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

const ERROR_MESSAGE = BUSINESS.email
  ? `Something went wrong while sending your message. Please try again or email us directly at ${BUSINESS.email}.`
  : `Something went wrong while sending your message. Please try again or call ${BUSINESS.phone}.`;

const fieldClass =
  "h-12 rounded-xl border border-k2k-blue/18 bg-white px-4 text-sm shadow-sm transition-colors placeholder:text-muted-foreground/60 focus-visible:border-k2k-blue focus-visible:ring-2 focus-visible:ring-k2k-blue/15 focus-visible:ring-offset-0";

const labelClass = "text-xs font-medium uppercase tracking-[0.14em] text-k2k-navy/70";

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
      <div className="k2k-card rounded-[1.75rem] p-10 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-k2k-blue/10">
          <CheckCircle2 className="h-7 w-7 text-k2k-blue" />
        </div>
        <h3 className="mt-5 font-display text-2xl text-ink">Thank you for reaching out.</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          We will follow up with you soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="k2k-card grid gap-6 rounded-[1.75rem] p-6 sm:p-8"
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
        <Label className={labelClass} htmlFor="contact-name">
          Name
        </Label>
        <Input
          id="contact-name"
          {...register("name")}
          autoComplete="name"
          className={cn(fieldClass, errors.name && "border-destructive/50")}
        />
        {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
      </div>
      <div className="grid gap-2">
        <Label className={labelClass} htmlFor="contact-email">
          Email
        </Label>
        <Input
          id="contact-email"
          type="email"
          {...register("email")}
          autoComplete="email"
          className={cn(fieldClass, errors.email && "border-destructive/50")}
        />
        {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
      </div>
      <div className="grid gap-2">
        <Label className={labelClass} htmlFor="contact-phone">
          Phone <span className="normal-case tracking-normal text-muted-foreground">(optional)</span>
        </Label>
        <Input
          id="contact-phone"
          type="tel"
          {...register("phone")}
          autoComplete="tel"
          placeholder="(843) 973-0309"
          className={fieldClass}
        />
      </div>
      <div className="grid gap-2">
        <Label className={labelClass} htmlFor="contact-message">
          Message / order notes
        </Label>
        <Textarea
          id="contact-message"
          rows={5}
          {...register("message")}
          className={cn(
            "min-h-[140px] rounded-xl border border-k2k-blue/18 bg-white px-4 py-3 text-sm shadow-sm transition-colors placeholder:text-muted-foreground/60 focus-visible:border-k2k-blue focus-visible:ring-2 focus-visible:ring-k2k-blue/15 focus-visible:ring-offset-0",
            errors.message && "border-destructive/50",
          )}
        />
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
        className="k2k-button k2k-button-primary w-full disabled:opacity-60"
      >
        {isSubmitting ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}