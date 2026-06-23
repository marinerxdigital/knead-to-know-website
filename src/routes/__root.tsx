import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { KTK_ICONS } from "../lib/design-assets";
import { SITE_URL } from "../lib/business";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import {
  isMobileOrderBarVisible,
  MobileOrderBar,
} from "../components/layout/MobileOrderBar";
import { cn } from "../lib/utils";
import { Toaster } from "../components/ui/sonner";

const OG_IMAGE = "/assets/knead-to-know/logo/og-image-1200x630.png";

function NotFoundComponent() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f8f4ed] px-4 py-12">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(106,158,192,0.12),transparent_55%)]"
        aria-hidden
      />
      <div className="k2k-bordered k2k-surface relative w-full max-w-md rounded-[1.75rem] px-6 py-10 text-center sm:px-8 sm:py-12">
        <div className="mb-6 flex items-center justify-center gap-3" aria-hidden>
          <span className="h-px w-10 bg-k2k-blue/25" />
          <img src={KTK_ICONS.wheat} alt="" className="h-5 w-5 opacity-60" aria-hidden />
          <span className="h-px w-10 bg-k2k-blue/25" />
        </div>
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-k2k-blue">404</p>
        <h1 className="mt-4 font-display text-3xl text-ink sm:text-4xl">Page not found</h1>
        <p className="k2k-text-secondary mx-auto mt-3 max-w-xs text-sm leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-4 flex flex-col items-center gap-1">
          <p className="k2k-wordmark-title text-base">Knead To Know</p>
          <p className="k2k-wordmark-tagline">Sweet &amp; Sour</p>
        </div>
        <div className="mt-8">
          <Link to="/" className="k2k-button k2k-button-primary inline-flex !min-h-12 !px-8">
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
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f8f4ed] px-4">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(194,168,120,0.1),transparent_50%)]"
        aria-hidden
      />
      <div className="relative max-w-md text-center">
        <div className="mb-6 flex items-center justify-center gap-3" aria-hidden>
          <span className="h-px w-10 bg-wheat/50" />
          <img src={KTK_ICONS.wheat} alt="" className="h-5 w-5 opacity-50" aria-hidden />
          <span className="h-px w-10 bg-wheat/50" />
        </div>
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-k2k-blue">
          Unexpected error
        </p>
        <h1 className="mt-4 font-display text-3xl text-ink sm:text-4xl">Something went wrong</h1>
        <p className="k2k-text-secondary mt-3 text-sm leading-relaxed">
          Please try again or head back home.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="k2k-button k2k-button-primary inline-flex"
          >
            Try again
          </button>
          <a href="/" className="k2k-button k2k-button-outline inline-flex">
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
      {
        title: "Knead To Know Bakery | Boutique Sourdough & Small-Batch Bakes on Daniel Island",
      },
      {
        name: "description",
        content:
          "Knead To Know is a boutique home bakery on Daniel Island, South Carolina offering small-batch sourdough bread, cookies, bagels, pastries, bakery boxes, seasonal baked goods, and custom orders by inquiry or pre-order.",
      },
      { name: "theme-color", content: "#FFFDF8" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Knead To Know" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        property: "og:title",
        content: "Knead To Know Bakery | Boutique Sourdough & Small-Batch Bakes on Daniel Island",
      },
      {
        name: "twitter:title",
        content: "Knead To Know Bakery | Boutique Sourdough & Small-Batch Bakes on Daniel Island",
      },
      {
        property: "og:description",
        content:
          "Knead To Know is a boutique home bakery on Daniel Island, South Carolina offering small-batch sourdough bread, cookies, bagels, pastries, bakery boxes, seasonal baked goods, and custom orders by inquiry or pre-order.",
      },
      {
        name: "twitter:description",
        content:
          "Knead To Know is a boutique home bakery on Daniel Island, South Carolina offering small-batch sourdough bread, cookies, bagels, pastries, bakery boxes, seasonal baked goods, and custom orders by inquiry or pre-order.",
      },
      {
        property: "og:image",
        content: `${SITE_URL}${OG_IMAGE}`,
      },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        name: "twitter:image",
        content: `${SITE_URL}${OG_IMAGE}`,
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Bakery",
          name: "Knead To Know",
          url: SITE_URL,
          description:
            "Knead To Know is a boutique home bakery on Daniel Island, South Carolina offering small-batch sourdough bread, cookies, bagels, pastries, bakery boxes, and custom orders.",
          image: `${SITE_URL}${OG_IMAGE}`,
          areaServed: "Daniel Island, South Carolina",
          founder: { "@type": "Person", name: "Wendy Mercado" },
        }),
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "icon", type: "image/png", sizes: "48x48", href: "/favicon-48.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700;9..144,800;9..144,900&family=Inter:wght@300;400;500;600&display=swap",
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
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const showMobileBar = isMobileOrderBarVisible(pathname);
  const showMenuTrayPad = pathname === "/menu";

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-white">
        <a href="#main-content" className="k2k-skip-link">
          Skip to content
        </a>
        <Header />
        <main
          id="main-content"
          className={cn(
            "k2k-page-enter flex-1",
            showMobileBar && "k2k-main-mobile-pad",
            showMenuTrayPad && "k2k-main-menu-tray-pad",
          )}
        >
          <Outlet />
        </main>
        <Footer showMobileBarOffset={showMobileBar} showMenuTrayOffset={showMenuTrayPad} />
        <MobileOrderBar />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}
