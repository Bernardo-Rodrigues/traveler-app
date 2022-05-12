import { AxiosError } from "axios";
import { useState, useEffect } from "react";

export default function useAsync(handler: any, immediate = true) {
  const [data, setData] = useState<any[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
      act();
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
