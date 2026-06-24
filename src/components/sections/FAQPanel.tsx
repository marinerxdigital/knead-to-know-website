import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Standard FAQ container — balanced padding, natural height, no clipped accordions.
 */
export function FAQPanel({
  header,
  children,
  className,
  accentRail = false,
}: {
  header?: ReactNode;
  children: ReactNode;
  className?: string;
  accentRail?: boolean;
}) {
  return (
    <div className={cn("k2k-faq-panel", accentRail && "k2k-accent-rail", className)}>
      {header ? <div className="k2k-faq-panel-header">{header}</div> : null}
      <div className="k2k-faq-panel-body min-w-0">{children}</div>
    </div>
  );
}
