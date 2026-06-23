import type { ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Eyebrow, Section } from "@/components/sections/Section";
import { ContactForm } from "@/components/forms/ContactForm";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { BUSINESS, SITE_URL } from "@/lib/business";
import { BAKERY_PHOTOS } from "@/lib/products";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Knead To Know Sweet & Sour" },
      {
        name: "description",
        content:
          "Contact Knead To Know Sweet & Sour on Daniel Island. Call Wendy at (843) 973-0309 or submit an order request.",
      },
      { property: "og:title", content: "Contact | Knead To Know Sweet & Sour" },
      {
        property: "og:description",
        content: "Reach Knead To Know Sweet & Sour for pre-orders on Daniel Island and Charleston.",
      },
      { property: "og:url", content: `${SITE_URL}/contact` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/contact` }],
  }),
  component: ContactPage,
});

const ICONS = {
  envelope: "/assets/knead-to-know/icons/Knead_To_Know_Contact_Envelope_Icon.png",
  pin: "/assets/knead-to-know/icons/Knead_To_Know_Location_Pin_Icon.png",
  calendar: "/assets/knead-to-know/icons/Knead_To_Know_Calendar_Preorder_Icon.png",
  pickup: "/assets/knead-to-know/icons/Knead_To_Know_Pickup_Bag_Icon.png",
  wheat: "/assets/knead-to-know/icons/Knead_To_Know_Wheat_Icon.png",
  bread: "/assets/knead-to-know/icons/Knead_To_Know_Bread_Icon.png",
  gift: "/assets/knead-to-know/icons/Knead_To_Know_Gift_Box_Icon.png",
} as const;

const QUICK_ACTIONS = [
  { to: "/custom-orders" as const, label: "Custom orders", icon: ICONS.calendar },
  { to: "/menu" as const, label: "View menu", icon: ICONS.bread },
  { to: "/catering" as const, label: "Catering", icon: ICONS.gift },
  { to: "/faq" as const, label: "FAQ", icon: ICONS.wheat },
] as const;

function HarborLine({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 180 12"
      fill="none"
      aria-hidden
      className={cn("text-k2k-harbor/60", className)}
    >
      <path
        d="M2 8 C30 2 60 2 90 7 C120 2 150 2 178 8"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconSectionHeading({
  icon,
  eyebrow,
  title,
}: {
  icon: string;
  eyebrow?: string;
  title: ReactNode;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="group flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#111] bg-[#f8f4ed] shadow-sm transition duration-300 group-hover:scale-105 group-hover:border-k2k-blue/25 group-hover:shadow-md">
        <img
          src={icon}
          alt=""
          className="k2k-breathe h-8 w-8 object-contain transition duration-300 group-hover:scale-110 group-hover:animate-none"
          aria-hidden
        />
      </div>
      <div>
        {eyebrow && <Eyebrow decorative>{eyebrow}</Eyebrow>}
        <h2 className="mt-2 font-display text-2xl text-ink sm:text-3xl">{title}</h2>
        <HarborLine className="mt-3 h-2 w-28" />
      </div>
    </div>
  );
}

function InfoTile({ icon, title, children }: { icon: string; title: string; children: ReactNode }) {
  return (
    <div className="k2k-surface k2k-hover-lift group rounded-2xl border-t-2 border-t-k2k-blue/15 p-5 transition duration-300 hover:border-t-k2k-blue/35 hover:shadow-[0_10px_28px_-14px_rgba(79,126,168,0.22)]">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#111] bg-[#f8f4ed] transition duration-300 group-hover:scale-105 group-hover:border-k2k-blue/20">
          <img
            src={icon}
            alt=""
            className="k2k-breathe h-6 w-6 object-contain opacity-85 transition duration-300 group-hover:scale-110 group-hover:animate-none"
            aria-hidden
          />
        </span>
        <p className="font-display text-lg text-ink">{title}</p>
      </div>
      <div className="mt-3 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </div>
  );
}

function QuickActionChip({
  to,
  label,
  icon,
}: {
  to: (typeof QUICK_ACTIONS)[number]["to"];
  label: string;
  icon: string;
}) {
  return (
    <Link to={to} className="group k2k-quick-chip">
      <img
        src={icon}
        alt=""
        className="h-4 w-4 object-contain opacity-80 transition duration-300 group-hover:scale-110"
        aria-hidden
      />
      {label}
    </Link>
  );
}

function PhoneLink({
  className,
  children,
  variant = "inline",
}: {
  className?: string;
  children: ReactNode;
  variant?: "inline" | "hero" | "cta";
}) {
  return (
    <a
      href={BUSINESS.phoneTel}
      className={cn(
        "group k2k-phone-pulse transition duration-300",
        variant === "hero" &&
          "k2k-surface inline-flex items-center gap-3 rounded-full px-5 py-3 hover:shadow-md",
        variant === "cta" &&
          "block font-display text-4xl leading-none text-ink hover:text-k2k-blue sm:text-5xl lg:text-6xl",
        variant === "inline" && "inline-flex items-center gap-2",
        className,
      )}
    >
      {children}
    </a>
  );
}

function MapPlaceholder() {
  return (
    <div className="k2k-surface group/map overflow-hidden !rounded-[1.75rem] !border-t-2 !border-t-k2k-blue/20 !p-0">
      <div className="flex items-center gap-3 border-b border-k2k-blue/10 bg-[#f8f4ed]/60 px-6 py-4">
        <img
          src={ICONS.pin}
          alt=""
          className="h-6 w-6 object-contain opacity-80 transition duration-300 group-hover/map:scale-110"
          aria-hidden
        />
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-k2k-navy/70">
          Pickup area
        </p>
        <HarborLine className="ml-auto hidden h-2 w-20 sm:block" />
      </div>
      <div className="relative flex aspect-[16/10] flex-col items-center justify-center gap-2 p-8 text-center">
        <div
          className="absolute inset-4 rounded-2xl border border-dashed border-k2k-blue/20 bg-[#f8f4ed]/40"
          aria-hidden
        />
        <div className="absolute inset-4 overflow-hidden rounded-2xl opacity-25" aria-hidden>
          <svg
            viewBox="0 0 400 250"
            fill="none"
            className="h-full w-full text-k2k-blue"
            preserveAspectRatio="xMidYMid slice"
          >
            <path
              d="M0 62h400M0 125h400M0 188h400M67 0v250M133 0v250M200 0v250M267 0v250M333 0v250"
              stroke="currentColor"
              strokeWidth="0.5"
            />
            <path
              d="M40 190c50-70 120-90 190-50s130 30 170-80"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeDasharray="5 4"
            />
            <circle cx="200" cy="120" r="6" fill="currentColor" />
          </svg>
        </div>
        <div className="k2k-pin-pulse relative">
          <img src={ICONS.pin} alt="" className="relative h-14 w-14 object-contain" aria-hidden />
        </div>
        <p className="relative font-display text-xl text-ink">Daniel Island, SC</p>
        <p className="relative max-w-xs text-sm text-muted-foreground">
          {BUSINESS.address}. Exact pickup details confirmed after your order.
        </p>
        {BUSINESS.mapsUrl && (
          <a
            href={BUSINESS.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="relative mt-2 text-xs font-medium uppercase tracking-wider text-k2k-blue hover:text-k2k-navy"
          >
            Open in maps
          </a>
        )}
      </div>
    </div>
  );
}

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Reach the bakery"
        intro="Have a question or ready to place a pre-order? Call Wendy or use the form below."
        image={BAKERY_PHOTOS.hero}
        imageAlt="Fresh bakery spread from Knead To Know"
        imagePosition="right"
      >
        <PhoneLink variant="hero">
          <Phone
            className="h-5 w-5 text-k2k-blue transition duration-300 group-hover:scale-110 group-hover:text-k2k-navy"
            aria-hidden
          />
          <span className="font-display text-lg text-ink">{BUSINESS.phone}</span>
        </PhoneLink>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          {QUICK_ACTIONS.map((action) => (
            <QuickActionChip key={action.to} {...action} />
          ))}
        </div>
      </PageHero>

      <Section bg="beige">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <div className="space-y-6">
            <ScrollReveal delay={0}>
              <div className="k2k-accent-rail k2k-surface overflow-hidden rounded-[1.75rem] border-t-2 border-t-k2k-blue/25 pl-5 p-7 sm:pl-7 sm:p-9">
                <IconSectionHeading icon={ICONS.envelope} title="Bakery details" />

                <div className="k2k-surface mt-8 overflow-hidden !rounded-2xl !border-[#111] !border-t-k2k-blue/30 !bg-[#f8f4ed] !p-0">
                  <div className="border-b border-k2k-blue/10 bg-white px-6 py-4 sm:px-8">
                    <p className="group flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-k2k-blue">
                      <Phone
                        className="h-4 w-4 transition duration-300 group-hover:scale-110"
                        aria-hidden
                      />
                      Call or text — fastest response
                    </p>
                  </div>
                  <div className="px-6 py-8 sm:px-8 sm:py-10">
                    <PhoneLink variant="cta">{BUSINESS.phone}</PhoneLink>
                    <p className="mt-4 max-w-sm text-base leading-relaxed text-muted-foreground">
                      The fastest way to reach {BUSINESS.shortOwner} for orders and questions.
                    </p>
                    <a
                      href={BUSINESS.phoneTel}
                      className="group k2k-button k2k-button-primary k2k-phone-pulse mt-6 inline-flex h-12 items-center gap-2 px-8"
                    >
                      <Phone className="h-4 w-4 transition duration-300 group-hover:scale-110" />
                      Call {BUSINESS.shortOwner} now
                    </a>
                  </div>
                </div>

                <ul className="mt-8 space-y-4 text-base">
                  <li className="k2k-surface rounded-2xl border-l-2 border-l-k2k-blue/25 p-5">
                    <p className="font-medium text-ink">{BUSINESS.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">Owner: {BUSINESS.owner}</p>
                  </li>
                  <li className="k2k-surface group flex items-start gap-4 rounded-2xl border-l-2 border-l-k2k-blue/25 p-5">
                    <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#111] bg-[#f8f4ed] transition duration-300 group-hover:scale-105 group-hover:border-k2k-blue/20">
                      <img
                        src={ICONS.pin}
                        alt=""
                        className="h-6 w-6 object-contain transition duration-300 group-hover:scale-110"
                        aria-hidden
                      />
                    </span>
                    <div>
                      <p className="text-ink">{BUSINESS.address}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{BUSINESS.serviceArea}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            <div className="grid gap-4 sm:grid-cols-2">
              <ScrollReveal delay={1}>
                <InfoTile icon={ICONS.calendar} title="Ordering">
                  <p>{BUSINESS.orderingModel}</p>
                  <p className="mt-1">Est. {BUSINESS.established}</p>
                </InfoTile>
              </ScrollReveal>

              <ScrollReveal delay={2}>
                {BUSINESS.hours ? (
                  <InfoTile icon={ICONS.wheat} title="Hours">
                    <p>{BUSINESS.hours}</p>
                  </InfoTile>
                ) : (
                  <InfoTile icon={ICONS.pickup} title="Fulfillment">
                    <p>{BUSINESS.fulfillment}</p>
                  </InfoTile>
                )}
              </ScrollReveal>
            </div>

            <ScrollReveal delay={3}>
              <InfoTile icon={ICONS.pickup} title="Place an order">
                <p>Call, text, DM, or submit an order request. {BUSINESS.fulfillment}.</p>
              </InfoTile>
            </ScrollReveal>

            <ScrollReveal delay={4}>
              <MapPlaceholder />
            </ScrollReveal>

            <ScrollReveal delay={4}>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/custom-orders"
                  className="group inline-flex k2k-button k2k-button-primary"
                >
                  Request an Order{" "}
                  <ArrowRight className="ml-1 h-4 w-4 transition duration-300 group-hover:translate-x-0.5" />
                </Link>
                <a
                  href={BUSINESS.phoneTel}
                  className="group k2k-button k2k-button-outline k2k-phone-pulse inline-flex"
                >
                  <Phone className="h-4 w-4 transition duration-300 group-hover:scale-110" />
                  Call Wendy
                </a>
              </div>
            </ScrollReveal>
          </div>

          <div className="space-y-8">
            <ScrollReveal delay={1}>
              <div className="k2k-accent-rail k2k-surface overflow-hidden rounded-[1.75rem] border-t-2 border-t-k2k-blue/25 pl-5 p-7 sm:pl-7 sm:p-9">
                <IconSectionHeading icon={ICONS.envelope} eyebrow="Message" title="Send a note" />
                <div className="mt-8 border-t border-k2k-blue/10 pt-8">
                  <ContactForm />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <blockquote className="k2k-surface group rounded-2xl border-l-2 border-l-k2k-blue/30 p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#111] bg-[#f8f4ed] transition duration-300 group-hover:scale-105 group-hover:border-k2k-blue/20">
                    <img
                      src={ICONS.wheat}
                      alt=""
                      className="k2k-breathe h-6 w-6 object-contain opacity-70 transition duration-300 group-hover:scale-110 group-hover:animate-none"
                      aria-hidden
                    />
                  </span>
                  <div>
                    <HarborLine className="mb-3 h-2 w-16" />
                    <p className="font-display text-lg leading-snug text-k2k-navy">
                      &ldquo;I look forward to baking for you.&rdquo;
                    </p>
                    <footer className="mt-2 text-sm text-muted-foreground">
                      — {BUSINESS.owner}, {BUSINESS.name}
                    </footer>
                  </div>
                </div>
              </blockquote>
            </ScrollReveal>
          </div>
        </div>
      </Section>
    </>
  );
}
