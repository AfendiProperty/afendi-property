import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("rounded-xl border border-border bg-surface-card shadow-soft p-5", className)}>
      {children}
    </div>
  );
}
