import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import ogImage from "../assets/og-image.jpg.asset.json";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SITE_URL } from "../lib/business";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Toaster } from "../components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-cream px-4">
      <div className="max-w-md text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">404</p>
        <h1 className="mt-4 font-display text-4xl text-ink">Page not found</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex h-11 items-center justify-center rounded-full bg-forest px-6 text-sm font-medium text-primary-foreground transition hover:bg-forest-dark"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-cream px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl text-ink">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Please try again or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex h-11 items-center justify-center rounded-full bg-forest px-6 text-sm font-medium text-primary-foreground hover:bg-forest-dark"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-background px-6 text-sm font-medium text-foreground hover:bg-muted"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Knead To Know | Charleston Custom Cakes" },
      {
        name: "description",
        content:
          "Modern custom cakes for weddings, birthdays, engagements, and beautiful celebrations in Charleston, SC.",
      },
      { name: "theme-color", content: "#FFFDF8" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Knead To Know" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Knead To Know | Charleston Custom Cakes" },
      { name: "twitter:title", content: "Knead To Know | Charleston Custom Cakes" },
      { name: "description", content: "Modern custom cakes for weddings, birthdays, engagements, and special celebrations in Charleston, SC. Browse designs and submit an inquiry." },
      { property: "og:description", content: "Modern custom cakes for weddings, birthdays, engagements, and special celebrations in Charleston, SC. Browse designs and submit an inquiry." },
      { name: "twitter:description", content: "Modern custom cakes for weddings, birthdays, engagements, and special celebrations in Charleston, SC. Browse designs and submit an inquiry." },
      { property: "og:image", content: `${SITE_URL}${ogImage.url}` },
      { property: "og:image:width", content: "1280" },
      { property: "og:image:height", content: "672" },
      { name: "twitter:image", content: `${SITE_URL}${ogImage.url}` },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-white">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}
