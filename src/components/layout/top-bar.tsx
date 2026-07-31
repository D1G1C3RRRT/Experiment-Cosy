import { Command } from "lucide-react";

import { ThemeToggle } from "@/components/layout/theme-toggle";
import { OpenPaletteButton } from "@/components/layout/open-palette-button";
import { Logo } from "@/components/shared/logo";

export function TopBar() {
  return (
    <header className="sticky top-0 z-30 border-b border-charcoal/10 bg-background/90 px-4 py-4 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <Logo />
        <div className="flex items-center gap-3">
          <OpenPaletteButton icon={<Command className="h-4 w-4" />} />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
