import { z } from "zod";

export const agentTypeSchema = z.enum(["G0", "G1", "G2", "ORCHESTRATOR"]);

export const aiPromptSchema = z.object({
  projectId: z.string().uuid().or(z.literal("demo-project")),
  prompt: z.string().min(1),
  agentType: agentTypeSchema
});

export const aiDecisionSchema = z.object({
  decision: z.enum(["APPROVED", "REJECTED"]),
  rejectionReason: z.string().optional()
});
