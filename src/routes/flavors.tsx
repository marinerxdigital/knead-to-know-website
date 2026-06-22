import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/sections/Section";
import { SITE_URL } from "@/lib/business";

export const Route = createFileRoute("/flavors")({
  head: () => ({
    meta: [
      { title: "Offerings | Knead To Know" },
      { property: "og:url", content: `${SITE_URL}/menu` },
    ],
  }),
  component: FlavorsRedirect,
});

function FlavorsRedirect() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-20 text-center">
      <SectionHeading title="Our menu has moved" intro="Please visit the full Menu page for breads, cookies, bagels and more." />
      <Link to="/menu" className="mt-8 inline-flex h-11 rounded-full bg-forest px-8 text-white items-center">View the Menu</Link>
    </div>
  );
}
