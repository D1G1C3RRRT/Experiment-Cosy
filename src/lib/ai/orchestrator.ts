import { SYSTEM_PROMPTS } from "@/lib/ai/prompts";
import { aiDecisionSchema, aiPromptSchema } from "@/lib/validations/ai";

export function summarizeOrchestration(promptInput: unknown, decisionInput: unknown) {
  const prompt = aiPromptSchema.parse(promptInput);
  const decision = aiDecisionSchema.parse(decisionInput);

  return `${SYSTEM_PROMPTS.ORCHESTRATOR}\n\n${prompt.agentType} -> ${decision.decision}`;
}
