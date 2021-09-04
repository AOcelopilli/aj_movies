export const helpFetch = () => {
  const BASE_URL = "https://api.themoviedb.org/3/",
    KEY = "6d2950b0059337fed4d25779fc402e79",
    LANG = "language=es-MX";

  const fetchCategory = async (type, category, trending) => {
    let url = `${BASE_URL}${
      trending ? "trending/" : ""
    }${type}/${category}?api_key=${KEY}&${LANG}`;

    try {
      let res = await fetch(url);

      if (!res.ok) {
        let err = new Error("Ocurrio un error");
        err.status = res.status || "00";
        err.statusText = res.statusText || "Error en petición fetch";
        throw err;
      }

      let json = await res.json();

      return json.results;
    } catch (err) {
      console.log(err);
    }
  };

  const getCategory = (type, category, trending) =>
    fetchCategory(type, category, trending);

  return { getCategory };
};
