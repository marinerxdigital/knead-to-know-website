import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { cn } from "@/lib/utils";

export interface FAQItem {
  q: string;
  a: string;
}

export interface FAQGroup {
  title: string;
  items: ReadonlyArray<FAQItem>;
}

interface Props {
  items?: ReadonlyArray<FAQItem>;
  groups?: ReadonlyArray<FAQGroup>;
  className?: string;
}

function FAQAccordionList({
  items,
  idPrefix,
}: {
  items: ReadonlyArray<FAQItem>;
  idPrefix: string;
}) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, i) => (
        <AccordionItem
          key={`${idPrefix}-${i}`}
          value={`${idPrefix}-item-${i}`}
          className={cn(
            "group/item mb-3 overflow-hidden rounded-2xl border border-k2k-black border-t-2 border-t-k2k-blue/10 bg-white shadow-[0_4px_20px_-12px_rgba(17,17,17,0.08)] transition-all duration-300 ease-out last:mb-0",
            "hover:shadow-[var(--k2k-shadow-md)] data-[state=closed]:hover:-translate-y-0.5",
            "data-[state=open]:border-k2k-blue data-[state=open]:border-t-k2k-blue/30 data-[state=open]:shadow-[0_8px_28px_-14px_rgba(59,110,145,0.18)] data-[state=open]:translate-y-0",
          )}
        >
          <AccordionTrigger
            className={cn(
              "relative px-5 py-4 text-left text-lg font-medium text-ink transition-colors duration-300 hover:no-underline sm:px-6 sm:py-5 sm:text-xl",
              "before:absolute before:inset-y-3 before:left-0 before:w-1 before:rounded-r-full before:bg-transparent before:transition-colors before:duration-300",
              "[&[data-state=open]]:text-k2k-navy [&[data-state=open]]:before:bg-wheat",
              "[&>svg]:text-k2k-blue/60 [&>svg]:transition-transform [&>svg]:duration-300 [&>svg]:ease-out",
            )}
          >
            <span className="pr-4 leading-snug">{item.q}</span>
          </AccordionTrigger>
          <AccordionContent className="px-5 pb-5 text-sm leading-relaxed text-k2k-navy/90 transition-opacity duration-300 sm:px-6 sm:pb-6">
            <div className="border-t border-k2k-blue/10 pt-4">{item.a}</div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function FAQAccordion({ items, groups, className }: Props) {
  if (groups && groups.length > 0) {
    return (
      <div className={cn("space-y-12", className)}>
        {groups.map((group, gi) => (
          <ScrollReveal key={group.title} delay={Math.min(gi, 4) as 0 | 1 | 2 | 3 | 4}>
            <div className="min-w-0">
              <div className="mb-5 flex min-w-0 items-center gap-3">
                <span className="h-px min-w-4 flex-1 bg-k2k-blue/12" aria-hidden />
                <h3 className="shrink-0 font-display text-lg text-ink sm:text-xl">{group.title}</h3>
                <span className="h-px min-w-4 flex-1 bg-k2k-blue/12" aria-hidden />
              </div>
              <FAQAccordionList items={group.items} idPrefix={`group-${gi}`} />
            </div>
          </ScrollReveal>
        ))}
      </div>
    );
  }

  return (
    <ScrollReveal className={className}>
      <FAQAccordionList items={items ?? []} idPrefix="faq" />
    </ScrollReveal>
  );
}
