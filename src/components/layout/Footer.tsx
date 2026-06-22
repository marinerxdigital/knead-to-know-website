import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin } from "lucide-react";
import { BUSINESS } from "@/lib/business";

const LOGO_SRC = "/assets/knead-to-know/logo/Knead_To_Know_Primary_Circular_Logo.png";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <img src={LOGO_SRC} alt="Knead To Know" className="h-16 w-auto" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            A Daniel Island bakery for fresh artisan breads, sourdough cookies, bagels, pastries,
            bakery boxes, and custom orders. Serving the Charleston area since 2026.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-medium uppercase tracking-[0.18em] text-forest">Explore</h4>
          <ul className="mt-5 space-y-3 text-sm text-ink/80">
            <li><Link to="/gallery" className="hover:text-forest">Gallery</Link></li>
            <li><Link to="/flavors" className="hover:text-forest">Offerings</Link></li>
            <li><Link to="/inquiry" className="hover:text-forest">Order Inquiry</Link></li>
            <li><Link to="/about" className="hover:text-forest">About</Link></li>
            <li><Link to="/featured" className="hover:text-forest">Community</Link></li>
            <li><Link to="/contact" className="hover:text-forest">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-medium uppercase tracking-[0.18em] text-forest">Visit</h4>
          <ul className="mt-5 space-y-3 text-sm text-ink/80">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-forest" />
              <span>
                {BUSINESS.city}
                <br />
                <span className="text-muted-foreground">{BUSINESS.serviceArea}</span>
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-forest" />
              <a href={`mailto:${BUSINESS.email}`} className="hover:text-forest">
                {BUSINESS.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Instagram className="h-4 w-4 shrink-0 text-forest" />
              <a
                href={BUSINESS.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-forest"
              >
                {BUSINESS.instagramHandle}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:px-8">
          <p>© {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-forest">Privacy Policy</Link>
            <p className="font-display italic">Made with care in Charleston.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
