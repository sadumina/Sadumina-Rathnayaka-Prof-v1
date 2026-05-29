import { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="mb-12 max-w-3xl">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-purple-200/80">{eyebrow}</p>
      <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">{title}</h2>
      {children ? <p className="mt-5 text-base leading-8 text-white/[0.58] sm:text-lg">{children}</p> : null}
    </div>
  );
}
