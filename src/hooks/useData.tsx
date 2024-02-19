import { useState, useEffect } from "react";

const useData = <T,>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let actualData = await response.json();
        setData(actualData.data);
        setError(null);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        }
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [url]);

  return {data, error, loading}
};

export {useData}