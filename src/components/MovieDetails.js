import { useFetch } from "../hooks/useFetch";
import Loader from "./Loader";
import "./MovieDetails.css";
import MovieInfo from "./MovieInfo";
import MoviePeople from "./MoviePeople";
import MovieSimilar from "./MovieSimilar";

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

        <MovieInfo details={details} />
        <MoviePeople credits={credits} />
        <MovieSimilar similar={similar} />
      </div>
      {error && <h2>Ocurrio un error</h2>}
    </div>
  );
};

export default MovieDetails;
