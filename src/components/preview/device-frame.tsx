import type { ReactNode } from "react";

export function DeviceFrame({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-[2rem] border-2 border-charcoal bg-charcoal p-3 shadow-brutal">
      <div className="rounded-[1.5rem] bg-cream p-2 dark:bg-slate-card">{children}</div>
    </div>
  );
}
