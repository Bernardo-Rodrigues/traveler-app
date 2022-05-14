import AlertProvider from "./AlertContext";
import SectionProvider from "./SectionContext";
import UserProvider from "./UserContext";

interface Props {
  children: React.ReactNode;
}

export default function GlobalProvider({ children }: Props) {
  return (
    <UserProvider>
      <AlertProvider>
        <SectionProvider>{children}</SectionProvider>
      </AlertProvider>
    </UserProvider>
  );
}
