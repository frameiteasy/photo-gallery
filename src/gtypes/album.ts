import { z } from 'zod';

export const aSchema = z.object({
  name: z.string().min(1),
  title: z.string().min(1).max(12),
  cover: z.string().min(1),
  description: z.union([z.string().optional(), z.undefined()]),
  onHomePage: z.union([
    z.boolean().optional(),
    z.undefined(),
    z.string().optional(),
  ]),
});

export type Album = z.infer<typeof aSchema>;
