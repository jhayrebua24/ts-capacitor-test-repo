import { createContext } from "react";
import { IAuthContext } from "./interface";

export const AuthContext = createContext<IAuthContext>({
  isAuth: false,
  setAuth: () => false,
});
