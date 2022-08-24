import { z } from "zod";
import { itemSchema } from "./item";

export const createServiceSchema = z.object({
  name: z.string(),
  price: z.number().nonnegative(),
  items: itemSchema.array()
})

export const serviceSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  price: z.number().nonnegative(),
  items: itemSchema.array(),
  createdAt: z.date(),
  updatedAt: z.date()
})

export type CreateServiceInput = z.TypeOf<typeof createServiceSchema>
export type ServiceSchema = z.TypeOf<typeof serviceSchema>
