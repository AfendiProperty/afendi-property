import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

export function Button({
  href,
  onClick,
  children,
  variant = "primary",
  type,
  className,
}: {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: Variant;
  type?: "button" | "submit";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition active:translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-coral focus-visible:ring-offset-2 focus-visible:ring-offset-surface-base";
  const styles: Record<Variant, string> = {
    primary:
      "bg-brand-coral text-white shadow-soft hover:bg-brand-coralHover",
    secondary:
      "border border-[rgba(11,27,52,0.25)] bg-transparent text-brand-navy hover:border-brand-navy hover:bg-[rgba(11,27,52,0.06)]",
    ghost:
      "bg-transparent text-brand-navy hover:bg-[rgba(11,27,52,0.06)]",
  };

  const cls = cn(base, styles[variant], className);

  if (href) return <Link className={cls} href={href}>{children}</Link>;
  return <button type={type ?? "button"} className={cls} onClick={onClick}>{children}</button>;
}
