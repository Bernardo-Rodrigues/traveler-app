import useContexts from "../hooks/useContexts";

export default function useHeaders() {
  const contexts = useContexts();
  const { auth } = contexts.user;
  const headers = { headers: { Authorization: `Bearer ${auth.token}` } };

  return headers;
}
