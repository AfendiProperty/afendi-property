import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { siteConfig } from "@/lib/site";
import { MobileNav } from "@/components/MobileNav";

const nav = [
  { href: "/corporate-relocation", label: "Corporate Relocation" },
  { href: "/services", label: "Services" },
  { href: "/for-businesses", label: "For Businesses" },
  { href: "/for-suppliers", label: "For Suppliers" },
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

        <nav className="hidden md:flex items-center space-x-5 text-sm font-semibold text-brand-navy">
  {nav.map((i) => (
    <Link
      key={i.href}
      href={i.href}
      className="hover:opacity-80 whitespace-nowrap"
    >
      {i.label}
    </Link>
  ))}
</nav>

        <div className="hidden md:flex items-center gap-2">
          <Button href="/for-suppliers" variant="secondary">Become a Supplier</Button>
          <Button href="/contact">Request Accommodation</Button>
        </div>

        <div className="md:hidden">
          <MobileNav items={nav} />
        </div>
      </Container>
    </header>
  );
}
