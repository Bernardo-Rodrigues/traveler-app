import { AlertContext, AlertContextType } from "../contexts/AlertContext";
import { useContext } from "react";

export default function useContexts() {
  return {
    alert: useContext(AlertContext) as AlertContextType,
  };
}
