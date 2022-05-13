import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import React from "react";

interface Props {
  children: React.ReactNode;
}

interface Auth {
  token: string;
}

export interface AuthContextType {
  auth: Auth;
  login: (authData: any) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export default function AuthProvider({ children }: Props) {
  const [auth, setAuth] = useLocalStorage("auth", null);

  function login(authData: any) {
    setAuth(authData);
  }

  function logout() {
    setAuth(null);
  }

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
