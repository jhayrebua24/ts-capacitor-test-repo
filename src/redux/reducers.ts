import { combineReducers } from "@reduxjs/toolkit";
import { todoApi } from "modules/todo/api";

const rootReducer = combineReducers({
  [todoApi.reducerPath]: todoApi.reducer,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
