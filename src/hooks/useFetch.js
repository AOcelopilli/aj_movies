import { useState, useEffect } from "react";

export const useFetch = (topic) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const KEY = "6d2950b0059337fed4d25779fc402e79";

  useEffect(() => {
    let controller = new AbortController(),
      signal = controller.signal;

    const fetchData = async (e) => {
      setLoading(true);

      try {
        let url = `https://api.themoviedb.org/3/movie/${topic}?api_key=${KEY}&language=en-US`,
          res = await fetch(url, { signal });

        if (!res.ok) {
          let err = new Error("Ocurrio un error");
          err.status = res.status || "00";
          err.statusText = res.statusText || "Error en petición fetch";

          throw err;
        }

        let json = await res.json();

        if (!signal.aborted) {
          setData(json.results);
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
  }, [topic]);

  return { data, loading, error };
};
