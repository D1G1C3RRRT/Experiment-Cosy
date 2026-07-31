import type { ReactNode } from "react";

import { BottomBar } from "@/components/layout/bottom-bar";
import { CommandPalette } from "@/components/layout/command-palette";
import { TopBar } from "@/components/layout/top-bar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <TopBar />
      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 py-6">{children}</main>
      <BottomBar />
      <CommandPalette />
    </div>
  );
}
