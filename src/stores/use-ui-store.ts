import { create } from "zustand";

interface UiStore {
  isPaletteOpen: boolean;
  openPalette: () => void;
  closePalette: () => void;
  togglePalette: () => void;
}

export const useUiStore = create<UiStore>((set) => ({
  isPaletteOpen: false,
  openPalette: () => set({ isPaletteOpen: true }),
  closePalette: () => set({ isPaletteOpen: false }),
  togglePalette: () => set((state) => ({ isPaletteOpen: !state.isPaletteOpen }))
}));
