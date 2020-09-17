import { createContext } from "react";

export const AuthContext = createContext({
  userId: null,
  login: () => {},
  logout: () => {},
  isLoggedIn: false,
  token: null,
});
