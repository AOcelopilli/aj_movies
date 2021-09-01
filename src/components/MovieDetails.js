import { useFetch } from "../hooks/useFetch";
import Loader from "./Loader";
import "./MovieDetails.css";
import MovieImg from "./MovieImg";

const MovieDetails = ({ topic }) => {
  let { data, loading, error } = useFetch(topic);

  if (!data) return null;

  let {
    overview,
    title,
    original_title,
    poster_path,
    release_date,
    vote_average,
    popularity,
    budget,
  } = data;

  return (
    <>
      {loading && <Loader />}

      {!loading && (
        <div className="movie-container">
          <h2>{title}</h2>
          <div className="movie-details">
            <MovieImg path={poster_path} />
            <div className="movie-description">
              <p>{overview}</p>
              <p>Fecha de lanzamiento {release_date}</p>
              <p>Puntuación de TheMovieDb {vote_average}</p>
              <p>Popularidad {popularity}</p>
              <p>Presupuesto utilizado ${budget} dolares</p>
              <p>Titulo original: {original_title}</p>
            </div>
          </div>
        </div>
      )}
      {error && <h2>Ocurrio un error</h2>}
    </>
  );
};

export default MovieDetails;
