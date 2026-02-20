import Link from "next/link";
import { Container } from "@/components/Container";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-[rgba(255,255,255,0.12)] bg-brand-navy text-white">
      <Container className="py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="text-base font-bold">{siteConfig.name}</div>
            <p className="mt-2 text-sm text-white/85">
              Sourcing and booking serviced accommodation, workforce housing, and emergency stays worldwide.
            </p>
            <div className="mt-4 space-y-1 text-sm text-white/85">
              <div><span className="font-semibold text-white">Email:</span> {siteConfig.email}</div>
              <div><span className="font-semibold text-white">WhatsApp:</span> {siteConfig.whatsapp}</div>
              <div><span className="font-semibold text-white">Address:</span> {siteConfig.address}</div>
            </div>
          </div>

          <div>
            <div className="text-sm font-bold">Explore</div>
            <div className="mt-3 grid gap-2 text-sm">
              <Link className="text-white/85 hover:text-brand-coral" href="/services">Services</Link>
              <Link className="text-white/85 hover:text-brand-coral" href="/for-businesses">For Businesses</Link>
              <Link className="text-white/85 hover:text-brand-coral" href="/for-suppliers">For Suppliers</Link>
              <Link className="text-white/85 hover:text-brand-coral" href="/faqs">FAQs</Link>
              <Link className="text-white/85 hover:text-brand-coral" href="/contact">Contact</Link>
            </div>
          </div>

          <div>
            <div className="text-sm font-bold">Legal</div>
            <div className="mt-3 grid gap-2 text-sm">
              <Link className="text-white/85 hover:text-brand-coral" href="/privacy">Privacy Policy</Link>
              <Link className="text-white/85 hover:text-brand-coral" href="/terms">Terms</Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-xs text-white/75">
          Afendi Property provides sourcing and booking services. All bookings are subject to availability and supplier terms.
        </div>
      </Container>
    </footer>
  );
}
