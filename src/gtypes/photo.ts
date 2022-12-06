import { z } from "zod";

export const aSchema = z.object({
  name: z.string().min(1),
  title: z.string().min(1),
  description: z.string().optional(),
});

export type Photo = z.infer<typeof aSchema>;
