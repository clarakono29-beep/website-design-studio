import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Nova Rise — Zimbabwe's Premier Cleaning & Placement Company" },
      { name: "description", content: "Professional deep cleaning, certified Maid Training Academy, and Zimbabwe's first digital domestic worker placement platform." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "geo.region", content: "ZW" },
      { name: "geo.placename", content: "Harare" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: appCss },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Nova Rise Private Limited",
          description: "Zimbabwe's premier professional cleaning services, maid training academy, and domestic worker placement platform.",
          url: "https://novarisezw.co.zw",
          telephone: "+263000000000",
          email: "info@novarisezw.co.zw",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Central Business District",
            addressLocality: "Harare",
            addressCountry: "ZW",
          },
          geo: { "@type": "GeoCoordinates", latitude: -17.8292, longitude: 31.0522 },
          openingHours: "Mo-Fr 08:00-17:00",
          priceRange: "$$",
          sameAs: [],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <a
          href="#main"
          style={{
            position: "absolute",
            top: "-100%",
            left: "1rem",
            background: "var(--gold)",
            color: "var(--navy)",
            padding: "0.5rem 1rem",
            fontFamily: "var(--font-sans)",
            fontWeight: 600,
            fontSize: "0.85rem",
            zIndex: 99999,
            borderRadius: 2,
            textDecoration: "none",
          }}
          onFocus={(e) => (e.currentTarget.style.top = "1rem")}
          onBlur={(e) => (e.currentTarget.style.top = "-100%")}
        >
          Skip to content
        </a>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
