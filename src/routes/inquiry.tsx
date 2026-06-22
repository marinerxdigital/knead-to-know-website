import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { SITE_URL } from "@/lib/business";

export const Route = createFileRoute("/inquiry")({
  beforeLoad: () => {
    // Map old inquiry route to the new custom orders flow
    throw redirect({ to: "/custom-orders" });
  },
  head: () => ({
    meta: [
      { title: "Custom Orders | Knead To Know" },
      { property: "og:url", content: `${SITE_URL}/custom-orders` },
    ],
  }),
  component: () => null,
});
