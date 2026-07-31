import { z } from "zod";

export const projectSettingsSchema = z.object({
  defaultDevice: z.enum(["desktop", "tablet", "mobile"]).default("desktop"),
  theme: z.enum(["light", "dark", "system"]).default("system")
});

export const fileSchema = z.object({
  path: z.string().min(1),
  content: z.string(),
  language: z.enum(["ts", "tsx", "css", "json"])
});

export const projectSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(1),
  description: z.string().default(""),
  updatedAtLabel: z.string().min(1)
});
