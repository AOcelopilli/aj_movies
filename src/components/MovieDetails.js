import { useFetch } from "../hooks/useFetch";
import Loader from "./Loader";
import "./MovieDetails.css";
import MovieImg from "./MovieImg";

const MovieDetails = ({ type, idMovie, handleOpenClose }) => {
  let { data, loading, error } = useFetch(type, idMovie);
  if (!data || !error) return null;

  let { overview, title, original_title, poster_path, genres, release_date } =
    data;

  return (
    <>
      {loading && <Loader />}

      {!loading && (
        <div className={`movie-details`}>
          <h3>{title}</h3>
          <button className="close-details-btn" onClick={handleOpenClose}>
            X
          </button>
          <div className="movie-details-container">
            <div>
              <MovieImg path={poster_path} />
              <p className="date">
                Fecha de lanzamiento <br />{" "}
                {release_date.split("-").reverse().join(",")}
              </p>
            </div>
            <div className="movie-description">
              <h4>Resumen</h4>
              <p>{overview}</p>
              <h4>Generos: </h4>
              <p>
                {genres.map((el) => (
                  <span key={el.id}>{el.name}, </span>
                ))}
              </p>
              <h4>Titulo original</h4>
              <p> {original_title}</p>
            </div>
          </div>
        </div>
      )}
      {error && <h2>Ocurrio un error</h2>}
    </>
  );
};

export default MovieDetails;
