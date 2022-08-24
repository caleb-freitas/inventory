import { z } from "zod";
import { createRouter } from "./context";

export const itemRouter = createRouter()
  .query("get-all", {
    async resolve({ ctx }) {
      return await ctx.prisma.item.findMany();
    },
  })
  .mutation("create", {
    input: z.object({
      name: z.string().min(5).max(255),
      quantity: z.number()
    }),
    async resolve({ input, ctx }) {
      return await ctx.prisma.item.create({
        data: {
          ...input
        }
      })
    }
  })
