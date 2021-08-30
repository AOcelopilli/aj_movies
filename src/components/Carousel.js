import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import "./Carousel.css";
import Loader from "./Loader";
import MovieDetails from "./MovieDetails";
import MovieImg from "./MovieImg";

const Carousel = ({ topic }) => {
  const [details, setDetails] = useState(false);
  const [idMovie, setIdMovie] = useState(null);
  let { data, loading, error } = useFetch(topic);

  if (!data) return null;

  const handleClick = (e) => {
    let id = e.target.getAttribute("data-id");

    setIdMovie(id);
    setDetails(true);
  };

  return (
    <div className="carousel">
      <h2>En streaming ahora</h2>
      {loading && <Loader />}
      {error && <h3>{error}</h3>}
      <div className="carousel-movies">
        {data.map((e) => {
          return (
            <div
              className="movie"
              key={e.id}
              onClick={handleClick}
              data-id={e.id}
            >
              <h3>{e.title}</h3>
              <MovieImg path={e.backdrop_path} />
            </div>
          );
        })}
      </div>
      {details && <MovieDetails id={idMovie} />}
    </div>
  );
};

export default Carousel;
