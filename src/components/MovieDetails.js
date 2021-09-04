import { useFetch } from "../hooks/useFetch";
import Loader from "./Loader";
import "./MovieDetails.css";
import MovieImg from "./MovieImg";

const MovieDetails = ({ type, id, handleOpenClose }) => {
  let { data, loading, error } = useFetch(type, id);

  if (!data) return null;

  let { details, credits, reviews, similar } = data;

  console.log(credits);

  return (
    <>
      {loading && <Loader />}

      <div className={`movie-details`}>
        <h3>{details.title}</h3>
        <button className="close-details-btn" onClick={handleOpenClose}>
          X
        </button>
        <div className="movie-details-container">
          <div className="poster">
            <MovieImg path={details.poster_path} />
            <p>Titulo original: {details.original_title}</p>
            <p>
              Fecha de lanzamiento:{" "}
              {details.release_date.split("-").reverse().join(" ")}
            </p>
          </div>

          <div className="overview">{details.overview}</div>

          <div className="castin">
            <h3>Castin</h3>
            {credits.cast.map((actor) => {
              return (
                <div key={actor.id}>
                  <h4>Personaje: {actor.character}</h4>
                  <MovieImg path={actor.profile_path} />
                  <p>Nombre: {actor.original_name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {error && <h2>Ocurrio un error</h2>}
    </>
  );
};

export default MovieDetails;
