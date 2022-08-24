import { createRouter } from "./context";
import superjson from "superjson";
import { itemRouter } from "./item";
import { serviceRouter } from "./service";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("items.", itemRouter)
  .merge("services.", serviceRouter)

export type AppRouter = typeof appRouter;
