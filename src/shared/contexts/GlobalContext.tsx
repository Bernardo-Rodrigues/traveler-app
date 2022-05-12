import AlertContext from "./AlertContext";

interface Props {
  children: React.ReactNode;
}

export default function GlobalProvider({ children }: Props) {
  return <AlertContext>{children}</AlertContext>;
}
