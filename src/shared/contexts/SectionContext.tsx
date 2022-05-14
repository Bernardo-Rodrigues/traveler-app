import { createContext, useState } from "react";

export interface SectionContextType {
  section: string;
  setSection: React.Dispatch<React.SetStateAction<string>>;
}

export const SectionContext = createContext<SectionContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

export default function SectionProvider({ children }: Props) {
  const [section, setSection] = useState<string>("dashboard");

  return (
    <SectionContext.Provider value={{ section, setSection }}>
      {children}
    </SectionContext.Provider>
  );
}
