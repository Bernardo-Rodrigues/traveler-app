import { AlertContext, AlertContextType } from "../contexts/AlertContext";
import { useContext } from "react";
import { UserContext, UserContextType } from "../contexts/UserContext";

export default function useContexts() {
  return {
    alert: useContext(AlertContext) as AlertContextType,
    user: useContext(UserContext) as UserContextType,
  };
}
