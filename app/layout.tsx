import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: {
    default: "Global Corporate Relocation & Serviced Accommodation | Afendi Property",
    template: "%s | Afendi Property",
  },
  description:
    "Afendi Property is a UAE-based global accommodation partner providing corporate relocation, workforce housing and emergency serviced accommodation solutions worldwide.",
  metadataBase: new URL("https://afendiproperty.com"),
  alternates: {
    canonical: "https://afendiproperty.com",
  },
  openGraph: {
    type: "website",
    url: "https://afendiproperty.com",
    siteName: "Afendi Property",
    title: "Global Corporate Relocation & Serviced Accommodation | Afendi Property",
    description:
      "UAE-based global accommodation partner for corporate relocation, workforce housing and emergency serviced accommodation worldwide.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Corporate Relocation & Serviced Accommodation | Afendi Property",
    description:
      "UAE-based global accommodation partner for corporate relocation, workforce housing and emergency serviced accommodation worldwide.",
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
