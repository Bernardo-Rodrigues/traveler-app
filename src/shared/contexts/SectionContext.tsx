import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router";

export interface SectionContextType {
  section: string;
  setSection: React.Dispatch<React.SetStateAction<string>>;
}

export const SectionContext = createContext<SectionContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

export default function SectionProvider({ children }: Props) {
  const pathname = useLocation().pathname.split("/");
  const [section, setSection] = useState<string>("dashboard");

  useEffect(() => {
    if (pathname.length > 2) setSection(pathname[2]);
    else setSection(pathname[1]);
    //eslint-disable-next-line
  }, [pathname]);

  return (
    <SectionContext.Provider value={{ section, setSection }}>
      {children}
    </SectionContext.Provider>
  );
}
