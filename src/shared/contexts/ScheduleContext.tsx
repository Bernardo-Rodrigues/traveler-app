import { createContext, useState } from "react";

export interface ScheduleContextType {
  update: boolean;
  setUpdate: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ScheduleContext = createContext<ScheduleContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

export default function ScheduleProvider({ children }: Props) {
  const [update, setUpdate] = useState<boolean>(false);

  return (
    <ScheduleContext.Provider value={{ update, setUpdate }}>
      {children}
    </ScheduleContext.Provider>
  );
}
