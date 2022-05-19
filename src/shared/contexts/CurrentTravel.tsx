import { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export interface CurrentTravelContextType {
  currentTravel: any;
  setCurrentTravel: any;
}

export const CurrentTravelContext =
  createContext<CurrentTravelContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

export default function CurrentTravelProvider({ children }: Props) {
  const [currentTravel, setCurrentTravel] = useLocalStorage(
    "currentTrip",
    null
  );

  return (
    <CurrentTravelContext.Provider value={{ currentTravel, setCurrentTravel }}>
      {children}
    </CurrentTravelContext.Provider>
  );
}
