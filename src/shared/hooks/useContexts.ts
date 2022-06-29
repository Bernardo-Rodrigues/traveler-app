import { AlertContext, AlertContextType } from "../contexts/AlertContext";
import { useContext } from "react";
import { SectionContext, SectionContextType } from "../contexts/SectionContext";
import {
  ScheduleContext,
  ScheduleContextType,
} from "../contexts/ScheduleContext";
import {
  CurrentTripContext,
  CurrentTripContextType,
} from "../contexts/CurrentTrip";
import {
  AchievementContext,
  AchievementContextType,
} from "../contexts/AchievementContext";

export default function useContexts() {
  return {
    alert: useContext(AlertContext) as AlertContextType,
    section: useContext(SectionContext) as SectionContextType,
    schedule: useContext(ScheduleContext) as ScheduleContextType,
    currentTrip: useContext(CurrentTripContext) as CurrentTripContextType,
    achievement: useContext(AchievementContext) as AchievementContextType,
  };
}
