import AlertProvider from "./AlertContext";
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
          <ScheduleProvider> {children} </ScheduleProvider>
        </SectionProvider>
      </AlertProvider>
    </UserProvider>
  );
}
