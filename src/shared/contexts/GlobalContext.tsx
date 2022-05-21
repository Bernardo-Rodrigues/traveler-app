import AchievementProvider from "./AchievementContext";
import AlertProvider from "./AlertContext";
import CurrentTripProvider from "./CurrentTrip";
import ScheduleProvider from "./ScheduleContext";
import SectionProvider from "./SectionContext";
import UserProvider from "./UserContext";

interface Props {
  children: React.ReactNode;
}

export default function GlobalProvider({ children }: Props) {
  return (
    <UserProvider>
      <AchievementProvider>
        <AlertProvider>
          <SectionProvider>
            <ScheduleProvider>
              <CurrentTripProvider> {children} </CurrentTripProvider>
            </ScheduleProvider>
          </SectionProvider>
        </AlertProvider>
      </AchievementProvider>
    </UserProvider>
  );
}
