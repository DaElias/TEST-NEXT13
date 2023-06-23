"use client"
import { useState, useEffect } from "react";

const ERRORCANCELLEED = "Request cancelled";

const useFetch = (url = '', cache = 'no-cache') =>
{
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [{ controller }, setAbortController] = useState({
    controller: null,
  });
  useEffect(() =>
  {
    const abortController = new AbortController();
    setAbortController({ controller: abortController });
    setLoading(true);
    fetch(url, { cache, signal: abortController.signal })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) =>
      {
        if (error.name === "AbortError")
        {
          console.log(ERRORCANCELLEED);
        } else
        {
          setError(error);
        }
      })
      .finally(() => setLoading(false));
    return () => abortController.abort();
  }, []);
  const handleCancelRequest = () =>
  {
    if (controller)
    {
      controller.abort();
      setError(ERRORCANCELLEED);
    }
  };
  return { loading, data, error, handleCancelRequest };
};

export default useFetch;
