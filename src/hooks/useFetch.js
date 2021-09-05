import { useState, useEffect } from "react";

export const useFetch = (type, id) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const BASE_URL = "https://api.themoviedb.org/3/",
    KEY = "6d2950b0059337fed4d25779fc402e79",
    LANG = "language=es-MX";

  useEffect(() => {
    if (!id) return null;

    let controller = new AbortController(),
      signal = controller.signal;

    const fetchData = async (e) => {
      setLoading(true);
      try {
        let urlId = `${BASE_URL}${type}/${id}?api_key=${KEY}&${LANG}`,
          urlCredits = `${BASE_URL}${type}/${id}/credits?api_key=${KEY}&${LANG}`,
          urlReviews = `${BASE_URL}${type}/${id}/reviews?api_key=${KEY}&${LANG}`,
          urlSimilar = `${BASE_URL}${type}/${id}/similar?api_key=${KEY}&${LANG}`,
          resDetails = await fetch(urlId, { signal }),
          resCredits = await fetch(urlCredits, { signal }),
          resReviews = await fetch(urlReviews, { signal }),
          resSimilar = await fetch(urlSimilar, { signal });

        if (!resDetails.ok) {
          let detailsErr = new Error("Error al solicitar detalles");
          detailsErr.status = resDetails.status || "00";
          detailsErr.statusText =
            resDetails.statusText || "Error en petición fetch";
          throw detailsErr;
        }

        if (!resCredits.ok) {
          let creditsErr = new Error("Error al solicitar similares");
          creditsErr.status = resCredits.status || "00";
          creditsErr.statusText =
            resCredits.statusText || "Error en petición fetch";
          throw creditsErr;
        }

        if (!resReviews.ok) {
          let reviewsErr = new Error("Error al solicitar similares");
          reviewsErr.status = resReviews.status || "00";
          reviewsErr.statusText =
            resReviews.statusText || "Error en petición fetch";
          throw reviewsErr;
        }

        if (!resSimilar.ok) {
          let similarErr = new Error("Error al solicitar similares");
          similarErr.status = resSimilar.status || "00";
          similarErr.statusText =
            resSimilar.statusText || "Error en petición fetch";
          throw similarErr;
        }

        let details = await resDetails.json(),
          credits = await resCredits.json(),
          reviews = await resReviews.json(),
          similar = await resSimilar.json();

        if (!signal.aborted) {
          setData({ details, credits, reviews, similar });
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
  }, [id, type]);

  return { data, loading, error };
};
