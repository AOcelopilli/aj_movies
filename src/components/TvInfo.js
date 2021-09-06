import MovieImg from "./MovieImg";

const TvInfo = ({ details }) => {
  return (
    <div>
      <div>
        <MovieImg path={details.poster_path} />
        <p>Nombre original: {details.original_name}</p>
        <p>Fecha de estreno: {details.first_air_date}</p>
        <p>Fecha de ultimo episodio: {details.last_air_date}</p>
      </div>
      <div>
        <h3>Resumen</h3>
        <p>{details.overview ? details.overview : "Sin descripción"}</p>
      </div>
    </div>
  );
};

export default TvInfo;
