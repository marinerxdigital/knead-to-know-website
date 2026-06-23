import { useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Loader2, Mail } from "lucide-react";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
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
  "min-h-12 h-12 w-full rounded-xl border border-k2k-black bg-white px-4 text-sm shadow-sm transition-all duration-300 placeholder:text-muted-foreground/60 focus-visible:border-k2k-blue focus-visible:ring-2 focus-visible:ring-k2k-blue/15 focus-visible:ring-offset-0 focus-visible:shadow-[0_4px_20px_-6px_rgba(59,110,145,0.25)]";

const labelClass = "text-xs font-medium uppercase tracking-[0.14em] text-k2k-navy/70";

function FormField({
  id,
  label,
  optional,
  error,
  children,
}: {
  id: string;
  label: string;
  optional?: boolean;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="group relative space-y-2">
      <Label className={labelClass} htmlFor={id}>
        {label}
        {optional && (
          <span className="normal-case tracking-normal text-muted-foreground"> (optional)</span>
        )}
      </Label>
      <div className="relative">
        {children}
        <span
          className="pointer-events-none absolute inset-x-4 bottom-0 h-0.5 origin-left scale-x-0 rounded-full bg-k2k-blue transition-transform duration-300 ease-out group-focus-within:scale-x-100"
          aria-hidden="true"
        />
      </div>
      <p
        className={cn(
          "min-h-[1.125rem] text-xs leading-snug text-destructive transition-opacity",
          error ? "opacity-100" : "opacity-0",
        )}
        role={error ? "alert" : undefined}
        aria-live="polite"
      >
        {error ?? "\u00a0"}
      </p>
    </div>
  );
}

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
      <ScrollReveal>
        <div className="group k2k-card overflow-hidden rounded-[1.75rem] p-10 text-center">
          <div className="mb-6 flex items-center gap-3" aria-hidden="true">
            <div className="relative h-px flex-1 overflow-hidden">
              <div className="absolute inset-0 k2k-line-grow bg-k2k-black/10" />
            </div>
            <img
              src="/assets/knead-to-know/icons/Knead_To_Know_Contact_Envelope_Icon.png"
              alt=""
              className="k2k-icon-hover h-5 w-5 opacity-70"
            />
            <div className="relative h-px flex-1 overflow-hidden">
              <div
                className="absolute inset-0 k2k-line-grow bg-k2k-black/10"
                style={{ animationDelay: "0.2s" }}
              />
            </div>
          </div>
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-k2k-black bg-k2k-blue/8">
            <CheckCircle2 className="k2k-icon-hover h-8 w-8 text-k2k-blue" />
          </div>
          <h3 className="mt-6 font-display text-2xl text-ink sm:text-3xl">
            Thank you for reaching out.
          </h3>
          <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
            We will follow up with you soon.
          </p>
        </div>
      </ScrollReveal>
    );
  }

  return (
    <ScrollReveal>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="group k2k-card grid min-w-0 gap-5 rounded-[1.75rem] p-5 sm:gap-6 sm:p-7"
      >
        <div
          className="flex items-center gap-3 border-b border-k2k-black/10 pb-5"
          aria-hidden="true"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-k2k-black bg-[#f8f4ed]/80">
            <Mail className="k2k-icon-hover h-4 w-4 text-k2k-blue" />
          </span>
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-k2k-blue/70">
              Get in touch
            </p>
            <p className="font-display text-lg text-ink">Send us a message</p>
          </div>
        </div>
        {/* Honeypot — hidden from real users */}
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          {...register("botcheck")}
          style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
        />

        <FormField id="contact-name" label="Name" error={errors.name?.message}>
          <Input
            id="contact-name"
            {...register("name")}
            autoComplete="name"
            className={cn(fieldClass, errors.name && "border-destructive/50")}
          />
        </FormField>

        <FormField id="contact-email" label="Email" error={errors.email?.message}>
          <Input
            id="contact-email"
            type="email"
            {...register("email")}
            autoComplete="email"
            className={cn(fieldClass, errors.email && "border-destructive/50")}
          />
        </FormField>

        <FormField id="contact-phone" label="Phone" optional>
          <Input
            id="contact-phone"
            type="tel"
            {...register("phone")}
            autoComplete="tel"
            placeholder="(843) 973-0309"
            className={fieldClass}
          />
        </FormField>

        <FormField
          id="contact-message"
          label="Message / order notes"
          error={errors.message?.message}
        >
          <Textarea
            id="contact-message"
            rows={5}
            {...register("message")}
            className={cn(
              "min-h-[140px] w-full resize-y rounded-xl border border-k2k-black bg-white px-4 py-3.5 text-sm leading-relaxed shadow-sm transition-all duration-300 placeholder:text-muted-foreground/60 focus-visible:border-k2k-blue focus-visible:ring-2 focus-visible:ring-k2k-blue/15 focus-visible:ring-offset-0 focus-visible:shadow-[0_4px_20px_-6px_rgba(59,110,145,0.25)]",
              errors.message && "border-destructive/50",
            )}
          />
        </FormField>

        {submitError && (
          <p
            className="rounded-xl border border-k2k-black bg-destructive/10 px-4 py-3 text-sm text-destructive"
            role="alert"
          >
            {submitError}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="k2k-button k2k-button-primary k2k-hover-lift w-full disabled:opacity-60"
        >
          {isSubmitting ? (
            <span className="inline-flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
              Sending message…
            </span>
          ) : (
            "Send message"
          )}
        </button>
      </form>
    </ScrollReveal>
  );
}
