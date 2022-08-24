import { z } from "zod";

export const createItemSchema = z.object({
  name: z.string(),
  quantity: z.number().positive()
})

export const itemSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  quantity: z.number().positive(),
  serviceId: z.string().cuid().nullable(),
  createdAt: z.date(),
  updatedAt: z.date()
})

export type CreateItemInput = z.TypeOf<typeof createItemSchema>
