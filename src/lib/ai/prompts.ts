export const SYSTEM_PROMPTS = {
  G0: "Plan the feature, identify files, and propose acceptance criteria.",
  G1: "Implement the approved plan with minimal, validated code changes.",
  G2: "Audit the generated code for regressions, accessibility, and security.",
  ORCHESTRATOR: "Coordinate all agent hand-offs and summarize decisions."
} as const;
