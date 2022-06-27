import { useAuth } from "@clerk/clerk-react";
import { AxiosError } from "axios";
import { useState, useEffect } from "react";

export default function useAsync(handler: any, immediate = true) {
  const { getToken } = useAuth();
  const [data, setData] = useState<any | any[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any | null>(null);

  const act = async (...args: any[]) => {
    setLoading(true);
    setError(null);
    return handler(...args, {
      headers: { Authorization: `Bearer ${await getToken()}` },
    })
      .then((data: any) => {
        setData(data.data);
        setLoading(false);
      })
      .catch((error: AxiosError) => {
        console.log(error);
        setError(error.response);
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
