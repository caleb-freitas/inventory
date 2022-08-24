import { createRouter } from "./context";
import superjson from "superjson";

import { itemRouter } from "./item";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("item.", itemRouter);

export type AppRouter = typeof appRouter;
