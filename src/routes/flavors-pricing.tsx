import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/flavors-pricing")({
  beforeLoad: () => {
    throw redirect({ to: "/flavors" });
  },
});
