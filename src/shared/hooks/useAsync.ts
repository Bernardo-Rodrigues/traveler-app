import { AxiosError } from "axios";
import { useState, useEffect } from "react";
import useContexts from "./useContexts";

export default function useAsync(
  handler: any,
  immediate = true,
  headers = false
) {
  const [data, setData] = useState<any[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const contexts = useContexts();
  const { auth } = contexts.user;

  const act = (...args: any[]) => {
    setLoading(true);
    setError(null);
    return handler(...args)
      .then((data: any) => {
        setData(data.data);
        setLoading(false);
      })
      .catch((error: AxiosError) => {
        console.log(error);
        setError(error.response?.data as string);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (immediate) {
      if (headers) {
        const headers = { headers: { Authorization: `Bearer ${auth.token}` } };
        act(headers);
      } else act();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data,
    loading,
    error,
    act,
  };
}
