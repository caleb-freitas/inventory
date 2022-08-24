import { z } from "zod";

export const createItemSchema = z.object({
  name: z.string(),
  quantity: z.number().nonnegative().refine((value) => parseInt((value.toString())))
})

export type CreateItemInput = z.TypeOf<typeof createItemSchema>
