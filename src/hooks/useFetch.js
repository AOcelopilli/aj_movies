import { useState, useEffect } from "react";

export const useFetch = (type, topic) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const BASE_URL = "https://api.themoviedb.org/3/",
    KEY = "6d2950b0059337fed4d25779fc402e79",
    LANG = "language=es-MX";

  useEffect(() => {
    let controller = new AbortController(),
      signal = controller.signal;
    const fetchData = async (e) => {
      setLoading(true);

      try {
        let url = `${BASE_URL}${type}/${topic}?api_key=${KEY}&${LANG}`,
          res = await fetch(url, { signal });

        if (!res.ok) {
          let err = new Error("Ocurrio un error");
          err.status = res.status || "00";
          err.statusText = res.statusText || "Error en petición fetch";
          throw err;
        }

        let json = await res.json();

        if (!signal.aborted) {
          setData(json);
          setError(null);
        }
      } catch (error) {
        if (!signal.aborted) {
          setData(null);
          setError(error);
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
      }

      return () => controller.abort();
    };

    fetchData();

    return () => controller.abort();
  }, [topic, type]);

  return { data, loading, error };

  // return { data, loading, error };
};
