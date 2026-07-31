import { SYSTEM_PROMPTS } from "@/lib/ai/prompts";
import { aiPromptSchema } from "@/lib/validations/ai";

export function createPlannerPrompt(input: unknown) {
  const parsed = aiPromptSchema.parse(input);
  return `${SYSTEM_PROMPTS.G0}\n\nProject: ${parsed.projectId}\nPrompt: ${parsed.prompt}`;
}
