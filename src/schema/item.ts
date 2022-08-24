import { z } from "zod";

export const createItemSchema = z.object({
  name: z.string(),
  quantity: z.number().nonnegative()
})

export type CreateItemInput = z.TypeOf<typeof createItemSchema>
