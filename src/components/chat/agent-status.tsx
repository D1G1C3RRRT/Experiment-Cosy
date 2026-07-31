"use client";

import { useAgentStore } from "@/stores/use-agent-store";

const statusTone: Record<"idle" | "running" | "waiting", string> = {
  idle: "bg-cream-secondary text-charcoal dark:bg-white/10 dark:text-cream",
  running: "bg-terracotta/20 text-rust dark:bg-terracotta/30 dark:text-cream",
  waiting: "bg-charcoal/10 text-charcoal dark:bg-white/10 dark:text-cream"
};

export function AgentStatus() {
  const statuses = useAgentStore((state) => state.statuses);

  return (
    <div className="flex flex-wrap gap-2">
      {statuses.map((status) => (
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${statusTone[status.status]}`}
          key={status.agent}
        >
          {status.agent} · {status.label}
        </span>
      ))}
    </div>
  );
}
