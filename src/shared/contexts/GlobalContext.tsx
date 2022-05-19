import AlertProvider from "./AlertContext";
import CurrentTravelProvider from "./CurrentTravel";
import ScheduleProvider from "./ScheduleContext";
import SectionProvider from "./SectionContext";
import UserProvider from "./UserContext";

interface Props {
  children: React.ReactNode;
}

export default function GlobalProvider({ children }: Props) {
  return (
    <UserProvider>
      <AlertProvider>
        <SectionProvider>
          <ScheduleProvider>
            <CurrentTravelProvider> {children} </CurrentTravelProvider>
          </ScheduleProvider>
        </SectionProvider>
      </AlertProvider>
    </UserProvider>
  );
}
