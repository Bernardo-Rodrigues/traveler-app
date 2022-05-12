import { createContext, useState } from "react";

interface AlertMessage {
  type: "success" | "error" | "info";
  text: string;
}

export interface AlertContextType {
  message: AlertMessage | null;
  setMessage: (newMessage: AlertMessage | null) => void;
  handleClose: () => void;
}

export const AlertContext = createContext<AlertContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

export default function AlertProvider({ children }: Props) {
  const [message, setMessage] = useState<AlertMessage | null>(null);

  function handleClose() {
    setMessage(null);
  }

  return (
    <AlertContext.Provider value={{ message, setMessage, handleClose }}>
      {children}
    </AlertContext.Provider>
  );
}
