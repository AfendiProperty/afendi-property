import { ReactNode } from "react";

export function SectionHeading({
  title,
  subtitle,
  right,
}: {
  title: ReactNode;
  subtitle?: ReactNode;
  right?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div>
        <h2 className="text-xl font-bold text-brand-navy md:text-2xl">{title}</h2>
        {subtitle ? <p className="mt-2 max-w-[70ch] text-sm text-text-muted">{subtitle}</p> : null}
      </div>
      {right ? <div className="shrink-0">{right}</div> : null}
    </div>
  );
}
