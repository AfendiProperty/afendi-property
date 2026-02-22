import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "./Button";
import { siteConfig } from "@/lib/site";
import { MobileNav } from "@/components/MobileNav";

const nav = [
  { href: "/corporate-relocation", label: "Corporate Relocation" },
  { href: "/global-mobility-accommodation", label: "Global Mobility" },
  { href: "/services", label: "Services" },
  { href: "/for-businesses", label: "For Businesses" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-white/90 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative h-10 w-10 overflow-hidden rounded-lg bg-brand-coral shadow-soft">
            <Image
              src="/logo.png"
              alt={`${siteConfig.name} logo`}
              fill
              sizes="40px"
              className="object-cover"
              priority
            />
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="text-sm font-bold text-brand-navy">{siteConfig.name}</span>
            <span className="text-xs text-text-muted">{siteConfig.tagline}</span>
          </span>
        </Link>

        <nav className="hidden md:flex flex-1 justify-center items-center space-x-5 text-sm font-semibold text-brand-navy">
          {nav.map((i) => (
            <Link key={i.href} href={i.href} className="hover:opacity-80 whitespace-nowrap">
              {i.label}
            </Link>
          ))}
        </nav>

        {/* Smaller header buttons + extra spacing from nav */}
        <div className="hidden md:flex items-center gap-2 pl-6">
          <Button href="/for-suppliers" variant="secondary" className="px-3 py-1.5 text-xs">
            Become a Supplier
          </Button>
          <Button href="/contact" className="px-3 py-1.5 text-xs">
            Request Accommodation
          </Button>
        </div>

        <div className="md:hidden">
          <MobileNav items={nav} />
        </div>
      </Container>
    </header>
  );
}