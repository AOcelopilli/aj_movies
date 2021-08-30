export const fetchDetails = async ({ id }) => {
  const KEY = "6d2950b0059337fed4d25779fc402e79";
  let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=es-MX
`;

  try {
    let res = await fetch(url);

    if (!res.ok) {
      let err = new Error("Error en petición Fetch");
      err.status = res.status || "00";
      err.statusText = res.statusText || "Ocurrio un error";
      throw err;
    }

    let json = await res.json();

    return Promise.resolve(json);
  } catch (err) {
    console.log(err);
  }
};
