import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import * as trpc from "@trpc/server"
import { createItemSchema } from "../../schema";
import { createRouter } from "./context";

export const itemRouter = createRouter()
  .query("get-all", {
    async resolve({ ctx }) {
      return await ctx.prisma.item.findMany();
    },
  })
  .mutation("register-item", {
    input: createItemSchema,
    async resolve({ input, ctx }) {
      try {
        return await ctx.prisma.item.create({
          data: {
            ...input
          }
        })
      } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
          if (error.code === "P2002") {
            throw new trpc.TRPCError({
              code: "CONFLICT",
              message: "Item already exists"
            })
          }
        }
      }
    }
  })
