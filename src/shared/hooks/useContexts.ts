import { AlertContext, AlertContextType } from "../contexts/AlertContext";
import { useContext } from "react";
import { AuthContext, AuthContextType } from "../contexts/AuthContext";

export default function useContexts() {
  return {
    alert: useContext(AlertContext) as AlertContextType,
    auth: useContext(AuthContext) as AuthContextType,
  };
}
