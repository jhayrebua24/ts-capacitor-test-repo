import { useState } from "react";
import { AuthContext } from "../context";
import { IAuthProvider } from "../interface";

const AuthContextProvider = ({ children }: IAuthProvider): JSX.Element => {
  const [isAuth, setAuth] = useState<boolean>(false);
  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
