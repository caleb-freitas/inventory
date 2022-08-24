import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import * as trpc from "@trpc/server"
import { createServiceSchema } from "../../schema";
import { createRouter } from "./context";

export const serviceRouter = createRouter()
  .mutation("register-service", {
    input: createServiceSchema,
    async resolve({ input, ctx }) {
      try {
        return await ctx.prisma.service.create({
          data: {
            ...input
          }
        })
      } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
          if (error.code === "P2003") {
            throw new trpc.TRPCError({
              code: "NOT_FOUND",
              message: "Supplied item does not exist"
            })
          }
        }
      }
    }
  })
