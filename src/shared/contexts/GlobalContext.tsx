import AlertProvider from "./AlertContext";
import AuthProvider from "./AuthContext";

interface Props {
  children: React.ReactNode;
}

export default function GlobalProvider({ children }: Props) {
  return (
    <AuthProvider>
      <AlertProvider>{children}</AlertProvider>
    </AuthProvider>
  );
}
