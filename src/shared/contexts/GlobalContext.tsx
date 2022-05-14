import AlertProvider from "./AlertContext";
import UserProvider from "./UserContext";

interface Props {
  children: React.ReactNode;
}

export default function GlobalProvider({ children }: Props) {
  return (
    <UserProvider>
      <AlertProvider>{children}</AlertProvider>
    </UserProvider>
  );
}
