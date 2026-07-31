export type AgentType = "G0" | "G1" | "G2" | "ORCHESTRATOR";

export interface AgentStatusSnapshot {
  agent: AgentType;
  label: string;
  status: "idle" | "running" | "waiting";
}
