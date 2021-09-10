import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import Loader from "./Loader";
import "./MovieDetails.css";
import TvInfo from "./TvInfo";
import TvCast from "./TvCast";
import TvPeople from "./TvPeople";
import CarouselSimilar from "./CarouselSimilar";

const TvDetails = ({ type, id, handleOpenClose }) => {
  const [show, setShow] = useState(1);
  let { data, loading, error } = useFetch(type, id);

  if (!data) return null;

  let { details, credits, similar } = data;

  return (
    <div className="details">
      {loading && <Loader />}

      <div className="movie-details">
        <h2>{details.name}</h2>
        <button className="close-details-btn" onClick={handleOpenClose}>
          X
        </button>
        <TvInfo details={details} />
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
        {show === 1 && <TvCast cast={credits.cast} />}
        {show === 2 && <TvPeople crew={credits.crew} />}
        {show === 3 && (
          <CarouselSimilar
            similar={similar}
            handleOpenClose={handleOpenClose}
          />
        )}
      </div>
      {error && <h2>Ocurrio un error</h2>}
    </div>
  );
};

export default TvDetails;
