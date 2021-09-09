import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import Loader from "./Loader";
import "./MovieDetails.css";
import MovieInfo from "./MovieInfo";
import MovieCast from "./MovieCast";
import MoviePeople from "./MoviePeople";
import CarouselSimilar from "./CarouselSimilar";

const MovieDetails = ({ type, id, handleOpenClose }) => {
  const [show, setShow] = useState(1);

  let { data, loading, error } = useFetch(type, id);

  if (!data) return null;

  let { details, credits, similar } = data;

  return (
    <div className="details">
      {loading ? (
        <Loader />
      ) : (
        <article className="movie-details">
          <h2>{details.title}</h2>
          <button className="close-details-btn" onClick={handleOpenClose}>
            X
          </button>

          <MovieInfo details={details} />
          <div className="details-nav">
            <button
              className={`${show === 1 && "active"}`}
              onClick={() => setShow(1)}
            >
              Cast
            </button>
            <button
              className={`${show === 2 && "active"}`}
              onClick={() => setShow(2)}
            >
              Producción
            </button>
            <button
              className={`${show === 3 && "active"}`}
              onClick={() => setShow(3)}
            >
              Similares
            </button>
          </div>
          {show === 1 && <MovieCast cast={credits.cast} />}
          {show === 2 && <MoviePeople credits={credits} />}
          {show === 3 && (
            <CarouselSimilar
              similar={similar}
              handleOpenClose={handleOpenClose}
            />
          )}
        </article>
      )}
      {error && <h2>Ocurrio un error</h2>}
    </div>
  );
};

export default MovieDetails;
