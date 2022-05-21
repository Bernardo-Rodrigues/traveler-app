import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export interface CurrentTripContextType {
  currentTrip: any;
  setCurrentTrip: any;
}

export const CurrentTripContext = createContext<CurrentTripContextType | null>(
  null
);

interface Props {
  children: React.ReactNode;
}

export default function CurrentTripProvider({ children }: Props) {
  const [currentTrip, setCurrentTrip] = useLocalStorage("currentTrip", null);

  return (
    <CurrentTripContext.Provider value={{ currentTrip, setCurrentTrip }}>
      {children}
    </CurrentTripContext.Provider>
  );
}
