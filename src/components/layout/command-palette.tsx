"use client";

import { Command } from "cmdk";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";

import { useCommandShortcut } from "@/hooks/use-command-shortcut";
import { useUiStore } from "@/stores/use-ui-store";

export function CommandPalette() {
  const router = useRouter();
  const { resolvedTheme, setTheme } = useTheme();
  const isPaletteOpen = useUiStore((state) => state.isPaletteOpen);
  const closePalette = useUiStore((state) => state.closePalette);
  const togglePalette = useUiStore((state) => state.togglePalette);

  const handleNavigate = useCallback(
    (href: string) => {
      router.push(href);
      closePalette();
    },
    [closePalette, router]
  );

  useCommandShortcut(togglePalette);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePalette();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [closePalette]);

  if (!isPaletteOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-charcoal/50 px-4 py-20" onClick={closePalette}>
      <Command
        className="glass-panel w-full max-w-2xl overflow-hidden rounded-3xl border border-charcoal/20 shadow-brutal"
        label="Global command palette"
        onClick={(event) => event.stopPropagation()}
      >
        <Command.Input className="w-full border-b border-charcoal/10 bg-transparent px-4 py-4 outline-none" placeholder="Jump to dashboard, studio, or switch theme..." />
        <Command.List className="max-h-80 overflow-y-auto p-2">
          <Command.Empty className="px-3 py-6 text-sm">No command found.</Command.Empty>
          <Command.Group heading="Navigate" className="text-sm text-charcoal/70 dark:text-cream/70">
            <Command.Item className="rounded-2xl px-3 py-3 aria-selected:bg-charcoal/10 dark:aria-selected:bg-white/10" onSelect={() => handleNavigate("/")}>Dashboard</Command.Item>
            <Command.Item className="rounded-2xl px-3 py-3 aria-selected:bg-charcoal/10 dark:aria-selected:bg-white/10" onSelect={() => handleNavigate("/studio/demo-project")}>Open demo studio</Command.Item>
          </Command.Group>
          <Command.Group heading="Workspace" className="text-sm text-charcoal/70 dark:text-cream/70">
            <Command.Item
              className="rounded-2xl px-3 py-3 aria-selected:bg-charcoal/10 dark:aria-selected:bg-white/10"
              onSelect={() => {
                setTheme(resolvedTheme === "dark" ? "light" : "dark");
                closePalette();
              }}
            >
              Toggle theme
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command>
    </div>
  );
}
