"use client";

import { cn } from "@/lib/utils";

export function Stepper({
  steps,
  activeIndex,
}: {
  steps: string[];
  activeIndex: number;
}) {
  return (
    <ol className="flex flex-wrap gap-2">
      {steps.map((s, i) => {
        const active = i === activeIndex;
        const done = i < activeIndex;
        return (
          <li
            key={s}
            className={cn(
              "flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold",
              active ? "border-brand-coral bg-brand-coral/10 text-brand-navy" : "border-border bg-white text-text-muted",
              done ? "opacity-90" : ""
            )}
            aria-current={active ? "step" : undefined}
          >
            <span
              className={cn(
                "grid h-5 w-5 place-items-center rounded-full text-[11px]",
                active ? "bg-brand-coral text-white" : done ? "bg-brand-navy text-white" : "bg-border text-brand-navy"
              )}
            >
              {i + 1}
            </span>
            {s}
          </li>
        );
      })}
    </ol>
  );
}
