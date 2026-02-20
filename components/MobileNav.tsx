"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { cn } from "@/lib/utils";

export function MobileNav({
  items,
}: {
  items: Array<{ href: string; label: string }>;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <button
        aria-label="Open menu"
        className="rounded-lg border border-border bg-white px-3 py-2 text-sm font-semibold text-brand-navy shadow-soft"
        onClick={() => setOpen(true)}
      >
        Menu
      </button>

      <div
        className={cn(
          "fixed inset-0 z-50 transition",
          open ? "pointer-events-auto" : "pointer-events-none"
        )}
        aria-hidden={!open}
      >
        <div
          className={cn(
            "absolute inset-0 bg-black/30 transition-opacity",
            open ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setOpen(false)}
        />
        <div
          className={cn(
            "absolute right-0 top-0 h-full w-[86%] max-w-sm bg-white p-5 shadow-card transition-transform",
            open ? "translate-x-0" : "translate-x-full"
          )}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation"
        >
          <div className="flex items-center justify-between">
            <div className="text-sm font-bold text-brand-navy">Afendi Property</div>
            <button
              className="rounded-lg border border-border bg-white px-3 py-2 text-sm font-semibold text-brand-navy"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>

          <div className="mt-4 grid gap-2">
            {items.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-brand-navy hover:bg-surface-soft"
                onClick={() => setOpen(false)}
              >
                {i.label}
              </Link>
            ))}
          </div>

          <div className="mt-6 grid gap-2">
            <Button href="/for-suppliers" variant="secondary" className="w-full" onClick={() => setOpen(false)}>
              Become a Supplier
            </Button>
            <Button href="/contact" className="w-full" onClick={() => setOpen(false)}>
              Request Accommodation
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
