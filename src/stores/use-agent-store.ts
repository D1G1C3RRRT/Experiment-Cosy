import { create } from "zustand";

import type { AgentStatusSnapshot } from "@/types/agent";

const initialStatuses: AgentStatusSnapshot[] = [
  { agent: "G0", label: "Planner", status: "running" },
  { agent: "G1", label: "Coder", status: "waiting" },
  { agent: "G2", label: "Auditor", status: "idle" }
];

interface AgentStore {
  statuses: AgentStatusSnapshot[];
}

export const useAgentStore = create<AgentStore>(() => ({
  statuses: initialStatuses
}));
