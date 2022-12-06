import { z } from "zod";

export const aSchema = z.object({
  name: z.string().min(1),
  desc: z.string().optional(),
});

export type Category = z.infer<typeof aSchema>;
