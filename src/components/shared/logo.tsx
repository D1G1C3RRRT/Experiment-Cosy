export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-11 w-11 place-items-center rounded-2xl border-2 border-charcoal bg-terracotta text-cream shadow-brutal-sm">
        CS
      </div>
      <div>
        <p className="font-display text-lg font-semibold">COSY Studio</p>
        <p className="text-xs uppercase tracking-[0.25em] text-charcoal/60 dark:text-cream/60">Warm Brutal IDE</p>
      </div>
    </div>
  );
}
