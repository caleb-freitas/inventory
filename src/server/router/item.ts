import { createRouter } from "./context";

export const itemRouter = createRouter()
  .query("get-all", {
    async resolve({ ctx }) {
      return await ctx.prisma.item.findMany();
    },
  });
