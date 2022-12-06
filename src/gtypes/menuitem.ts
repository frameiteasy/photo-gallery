import { z } from "zod";

export const aSchema = z.object({
  name: z.string().min(1),
  path: z.string().min(1),
  className: z.union([z.string().optional(), z.undefined()]),
});

export type MenuItemType = z.infer<typeof aSchema>;
