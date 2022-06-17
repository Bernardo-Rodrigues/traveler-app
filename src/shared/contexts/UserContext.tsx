import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import React from "react";
import { useNavigate } from "react-router";
import useContexts from "../hooks/useContexts";

interface Props {
  children: React.ReactNode;
}

interface Auth {
  token: string;
}

interface User {
  username: string;
  imageLink: string;
  title: string;
  calendar: boolean;
}

export interface UserContextType {
  auth: Auth;
  user: User;
  login: (userData: any) => void;
  logout: () => void;
  setUser: any;
}

export const UserContext = createContext<UserContextType | null>(null);

export default function UserProvider({ children }: Props) {
  const [auth, setAuth] = useLocalStorage("auth", null);
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();

  function login(authData: any) {
    const { token, username, imageLink, title } = authData;
    setAuth({ token });
    setUser({ username, imageLink, title, calendar: false });
  }

  function logout() {
    setAuth(null);
    setUser(null);
    navigate("/sign-in");
  }

  return (
    <UserContext.Provider value={{ auth, user, login, logout, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
