import "./MovieDetails.css";
import CarouselSimilar from "./CarouselSimilar";
import { useFetch } from "../hooks/useFetch";
import Loader from "./Loader";
import TvInfo from "./TvInfo";
import TvPeople from "./TvPeople";

const TvDetails = ({ type, id, handleOpenClose }) => {
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
        <TvPeople credits={credits} />
        <CarouselSimilar similar={similar} handleOpenClose={handleOpenClose} />
      </div>
      {error && <h2>Ocurrio un error</h2>}
    </div>
  );
};

export default TvDetails;
