import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Props {
  items: ReadonlyArray<{ q: string; a: string }>;
}

export function FAQAccordion({ items }: Props) {
  return (
    <Accordion type="single" collapsible className="w-full divide-y divide-border/70">
      {items.map((item, i) => (
        <AccordionItem key={i} value={`item-${i}`} className="border-0">
          <AccordionTrigger className="py-6 text-left font-display text-xl text-ink hover:no-underline">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
