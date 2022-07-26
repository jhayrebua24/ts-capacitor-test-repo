/* eslint-disable @typescript-eslint/no-explicit-any */
import { todoApi } from "modules/todo/api";

const middleware = (getDefaultMiddleware: any) =>
  getDefaultMiddleware().concat(todoApi.middleware);

export default middleware;
