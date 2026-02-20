import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Global serviced accommodation, workforce housing and emergency stays — sourced and booked with confidence.",
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description:
      "Business stays, delivered properly. Sourcing and booking serviced accommodation worldwide.",
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

function orgSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    email: siteConfig.email,
    telephone: siteConfig.whatsapp,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressCountry: "UAE",
    },
  };
  return JSON.stringify(schema);
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-[60vh]">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: orgSchema() }}
        />
      </body>
    </html>
  );
}
