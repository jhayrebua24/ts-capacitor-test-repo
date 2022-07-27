import { useContext } from "react";
import { AuthContext } from "./context";
import { IAuthContext } from "./interface";

export const useAuth = (): IAuthContext => useContext(AuthContext);
