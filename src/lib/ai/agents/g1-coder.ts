import { SYSTEM_PROMPTS } from "@/lib/ai/prompts";
import { aiPromptSchema } from "@/lib/validations/ai";

export function createCoderPrompt(input: unknown) {
  const parsed = aiPromptSchema.parse(input);
  return `${SYSTEM_PROMPTS.G1}\n\nProject: ${parsed.projectId}\nPrompt: ${parsed.prompt}`;
}
