import { useFetch } from "../hooks/useFetch";
import Loader from "./Loader";
import "./MovieDetails.css";
import MovieImg from "./MovieImg";

const MovieDetails = ({ type, id, handleOpenClose }) => {
  let { data, loading, error } = useFetch(type, id);

  if (!data) return null;

  let { details, credits, similar } = data;

  return (
    <div className="details">
      {loading && <Loader />}

      <div className="movie-details">
        <h2>{details.title}</h2>
        <button className="close-details-btn" onClick={handleOpenClose}>
          X
        </button>
        <div className="movie-details-container">
          <div className="poster">
            <MovieImg path={details.poster_path} />
            <p>Titulo original: {details.original_title}</p>
            <p className="date">
              Fecha de lanzamiento:{" "}
              {details.release_date.split("-").reverse().join(" ")}
            </p>
          </div>

          <div className="overview">
            <h3>Resumen</h3>
            <p>{details.overview || "No hay descripción"}</p>
          </div>
        </div>
        <div className="people">
          <div className="castin">
            <h3>Castin</h3>
            <div className="grid-1-auto small-container">
              {credits.cast.map((actor) => {
                return (
                  <div key={actor.id} className="person">
                    <h4>Personaje: {actor.character}</h4>
                    <MovieImg path={actor.profile_path} />
                    <p>Nombre: {actor.original_name}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="production">
            <h3>Producción</h3>
            <div className="grid-1-auto small-container">
              {credits.crew.map((prod) => {
                return (
                  <div key={prod.credit_id} className="person">
                    <h4>Puesto: {prod.job}</h4>
                    <MovieImg path={prod.profile_path} />
                    <p>Nombre: {prod.original_name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="similar-movies">
          <h3>Peliculas similares</h3>
          <div className="grid-1-auto">
            {similar.results.map((movie) => {
              return (
                <div
                  key={movie.id}
                  className="similar-movie"
                  data-id={movie.id}
                  onClick={handleOpenClose}
                >
                  <h4>{movie.title || movie.original_title}</h4>
                  <MovieImg path={movie.poster_path} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {error && <h2>Ocurrio un error</h2>}
    </div>
  );
};

export default MovieDetails;
