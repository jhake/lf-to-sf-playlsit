import { useState, useEffect } from "react";
import axios from "axios";
import { useCurrentUser } from "./useCurrentUser";

export const useAxiosGet = <T>(url: string) => {
  const { authHeader } = useCurrentUser();
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    (async () => {
      try {
        let axiosResult = await axios.get(url, {
          headers: authHeader,
          timeout: 10000,
        });

        setData(axiosResult.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    })();
    // eslint-disable-next-line
  }, [url]);

  return { data, loading, error };
};