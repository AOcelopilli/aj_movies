import { useRef, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import "./Carousel.css";
import Loader from "./Loader";
import MovieDetails from "./MovieDetails";
import MovieImg from "./MovieImg";

const Carousel = ({ topic, title }) => {
  const [details, setDetails] = useState(false);
  const [idMovie, setIdMovie] = useState(null);

  const refCarousel = useRef(null);

  let { data, loading, error } = useFetch(topic);

  if (!data) return null;

  const handleMovieClick = (e) => {
    let id = e.target.getAttribute("data-id");

    if (id !== idMovie) {
      setIdMovie(id);
      setDetails(true);
    } else {
      setIdMovie(null);
      setDetails(false);
    }
  };

  //TODO: handleClick to make scroll in carousel-container
  const handleLeftClick = () => {
    refCarousel.current.scrollLeft -= refCarousel.current.offsetWidth;
  };

  const handleRightClick = () => {
    refCarousel.current.scrollLeft += refCarousel.current.offsetWidth;
  };

  return (
    <div className="carousel">
      <div className="carousel-header">
        <h2>{title}</h2>
      </div>
      {loading && <Loader />}
      {error && <h3>{error}</h3>}
      {!loading && (
        <div className="carousel-container">
          <button className="carousel-left-btn" onClick={handleLeftClick}>
            {" "}
            &lt;{" "}
          </button>
          <div className="carousel-movies" ref={refCarousel}>
            {data.results.map((e) => {
              return (
                <div
                  className="movie-container"
                  key={e.id}
                  onClick={handleMovieClick}
                  data-id={e.id}
                >
                  <MovieImg path={e.backdrop_path} />
                </div>
              );
            })}
          </div>
          <button className="carousel-right-btn" onClick={handleRightClick}>
            {" "}
            &gt;{" "}
          </button>
        </div>
      )}
      {details && <MovieDetails topic={idMovie} />}
    </div>
  );
};

export default Carousel;
