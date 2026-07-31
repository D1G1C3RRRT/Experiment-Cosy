import { SYSTEM_PROMPTS } from "@/lib/ai/prompts";
import { aiPromptSchema } from "@/lib/validations/ai";

export function createAuditorPrompt(input: unknown) {
  const parsed = aiPromptSchema.parse(input);
  return `${SYSTEM_PROMPTS.G2}\n\nProject: ${parsed.projectId}\nPrompt: ${parsed.prompt}`;
}
