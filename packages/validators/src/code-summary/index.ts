import { z } from "zod";

export const summaryRequestSchema = z.object({
  code: z.string().min(1, "Code snippet is required").trim(),
  languageId: z.string().min(1, "Language ID is required"),
  context: z.string().trim().optional(),
});

export const summaryResponseSchema = z.object({
  summary: z.string(),
  cached: z.boolean(),
  timestamp: z.number(),
});

export type SummaryRequest = z.infer<typeof summaryRequestSchema>;
export type SummaryResponse = z.infer<typeof summaryResponseSchema>;
