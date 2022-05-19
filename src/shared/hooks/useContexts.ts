import { AlertContext, AlertContextType } from "../contexts/AlertContext";
import { useContext } from "react";
import { UserContext, UserContextType } from "../contexts/UserContext";
import { SectionContext, SectionContextType } from "../contexts/SectionContext";
import {
  ScheduleContext,
  ScheduleContextType,
} from "../contexts/ScheduleContext";
import {
  CurrentTravelContext,
  CurrentTravelContextType,
} from "../contexts/CurrentTravel";
import {
  AchievementContext,
  AchievementContextType,
} from "../contexts/AchievementContext";

export default function useContexts() {
  return {
    alert: useContext(AlertContext) as AlertContextType,
    user: useContext(UserContext) as UserContextType,
    section: useContext(SectionContext) as SectionContextType,
    schedule: useContext(ScheduleContext) as ScheduleContextType,
    currentTravel: useContext(CurrentTravelContext) as CurrentTravelContextType,
    achievement: useContext(AchievementContext) as AchievementContextType,
  };
}
