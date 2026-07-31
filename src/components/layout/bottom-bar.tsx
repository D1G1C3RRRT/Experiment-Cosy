export function BottomBar() {
  return (
    <footer className="border-t border-charcoal/10 px-4 py-3 text-sm text-charcoal/70 dark:text-cream/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <p>Multi-agent workflow: G0 Planner → G1 Coder → G2 Auditor</p>
        <p>Escape = close · Enter = approve</p>
      </div>
    </footer>
  );
}
