import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export interface AchievementContextType {
  haveAchievement: any;
  setHaveAchievement: any;
}

export const AchievementContext = createContext<AchievementContextType | null>(
  null
);

interface Props {
  children: React.ReactNode;
}

export default function AchievementProvider({ children }: Props) {
  const [haveAchievement, setHaveAchievement] = useLocalStorage(
    "achievement",
    null
  );

  return (
    <AchievementContext.Provider
      value={{ haveAchievement, setHaveAchievement }}
    >
      {children}
    </AchievementContext.Provider>
  );
}
