"use client";

import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { useUiStore } from "@/stores/use-ui-store";

export function OpenPaletteButton({ icon }: { icon: ReactNode }) {
  const openPalette = useUiStore((state) => state.openPalette);

  return (
    <Button onClick={openPalette} variant="secondary">
      {icon}
      <span className="ml-2">Command</span>
      <span className="ml-3 rounded-lg border border-charcoal/20 px-2 py-0.5 text-xs dark:border-cream/20">⌘K</span>
    </Button>
  );
}
