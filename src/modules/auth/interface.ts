/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IAuthProvider {
  children: JSX.Element;
}

export interface IAuthContext {
  isAuth: boolean;
  setAuth: (key: any) => void;
}
