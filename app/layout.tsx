import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/site";

export const metadata = {
  metadataBase: new URL("https://afendiproperty.com"),
  alternates: {
    canonical: "https://afendiproperty.com",
  },

  title: {
    default: "Global Corporate Relocation & Serviced Accommodation | Afendi Property",
    template: "%s | Afendi Property",
  },
  description:
    "Afendi Property is a UAE-based global accommodation partner providing corporate relocation, workforce housing and emergency serviced accommodation solutions worldwide.",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: "https://afendiproperty.com",
    siteName: "Afendi Property",
    title: "Global Corporate Relocation & Serviced Accommodation | Afendi Property",
    description:
      "UAE-based global accommodation partner for corporate relocation, workforce housing and emergency serviced accommodation worldwide.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Afendi Property — Global Corporate Relocation & Serviced Accommodation",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Global Corporate Relocation & Serviced Accommodation | Afendi Property",
    description:
      "UAE-based global accommodation partner for corporate relocation, workforce housing and emergency serviced accommodation worldwide.",
    images: ["/og.png"],
  },
} satisfies Metadata;

function siteSchema() {
  const url = siteConfig.siteUrl || "https://afendiproperty.com";

  const graph = [
    // Website entity (brand/site understanding)
    {
      "@type": "WebSite",
      "@id": `${url}#website`,
      url,
      name: siteConfig.name,
      inLanguage: "en",
      publisher: { "@id": `${url}#organization` },
      // Optional: keep or remove. If you don't have /search, it's still OK, but you can remove later.
      potentialAction: {
        "@type": "SearchAction",
        target: `${url}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },

    // Organization entity
    {
      "@type": "Organization",
      "@id": `${url}#organization`,
      name: siteConfig.name,
      url,
      email: siteConfig.email,
      telephone: siteConfig.whatsapp,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address,
        addressCountry: "AE",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          email: siteConfig.email,
          telephone: siteConfig.whatsapp,
          availableLanguage: ["en"],
        },
      ],
    },

    // LocalBusiness entity (UAE authority signal)
    {
      "@type": "LocalBusiness",
      "@id": `${url}#localbusiness`,
      name: siteConfig.name,
      url,
      email: siteConfig.email,
      telephone: siteConfig.whatsapp,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address,
        addressLocality: "Ras Al Khaimah",
        addressCountry: "AE",
      },
      parentOrganization: { "@id": `${url}#organization` },
      areaServed: "Worldwide",
    },
  ];

  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": graph,
  });
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
          dangerouslySetInnerHTML={{ __html: siteSchema() }}
        />
      </body>
    </html>
  );
}