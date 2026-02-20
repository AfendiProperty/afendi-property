"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function Field({
  label,
  hint,
  error,
  children,
}: {
  label: string;
  hint?: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-1.5">
      <label className="text-sm font-semibold text-brand-navy">{label}</label>
      {children}
      {hint ? <div className="text-xs text-text-muted">{hint}</div> : null}
      {error ? <div className="text-xs font-semibold text-error">{error}</div> : null}
    </div>
  );
}

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={cn(
        "w-full rounded-lg border border-border bg-white px-3 py-2 text-sm text-text-strong shadow-soft outline-none",
        "focus:border-brand-coral focus:ring-2 focus:ring-brand-coral/30",
        props.className
      )}
    />
  );
}

export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={cn(
        "w-full rounded-lg border border-border bg-white px-3 py-2 text-sm text-text-strong shadow-soft outline-none",
        "focus:border-brand-coral focus:ring-2 focus:ring-brand-coral/30",
        props.className
      )}
    />
  );
}

export function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className={cn(
        "w-full rounded-lg border border-border bg-white px-3 py-2 text-sm text-text-strong shadow-soft outline-none",
        "focus:border-brand-coral focus:ring-2 focus:ring-brand-coral/30",
        props.className
      )}
    />
  );
}

export function Checkbox({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
}) {
  return (
    <label className="flex cursor-pointer items-start gap-2 text-sm text-text-strong">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-0.5 h-4 w-4 rounded border-border text-brand-coral focus:ring-brand-coral"
      />
      <span>{label}</span>
    </label>
  );
}
