import { useState, useEffect, useRef } from "react";
import { helpFetch } from "../helpers/helpFetch";
import "./Carousel.css";
import MovieDetails from "./MovieDetails";
import MovieImg from "./MovieImg";

const CarouselMovies = ({ type, category, trending = false, title }) => {
  const [data, setData] = useState(null);
  const [idMovie, setIdMovie] = useState(null);
  const refCarousel = useRef();

  useEffect(() => {
    helpFetch()
      .getCategory(type, category, trending)
      .then((res) => setData(res));
  }, [type, category, trending]);

  if (!data) return null;

  const handleOpenClose = (e) => {
    let id = e.target.getAttribute("data-id");

    if (id !== idMovie) {
      setIdMovie(id);
    } else {
      setIdMovie(null);
    }
  };

  const handleLeftClick = () => {
    refCarousel.current.scrollLeft -= refCarousel.current.offsetWidth;
  };

  const handleRightClick = () => {
    refCarousel.current.scrollLeft += refCarousel.current.offsetWidth;
  };

  return (
    <div>
      <div>
        <h2>{title}</h2>
      </div>

      <div className="carousel-container">
        <button className="carousel-left-btn" onClick={handleLeftClick}>
          {" "}
          &lt;{" "}
        </button>
        <div className="carousel-movies" ref={refCarousel}>
          {data.map((e) => {
            return (
              <div
                className="movie-container"
                key={e.id}
                onClick={handleOpenClose}
                data-id={e.id}
              >
                <h3>{e.title}</h3>
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
      {idMovie && (
        <MovieDetails
          type={type}
          id={idMovie}
          handleOpenClose={handleOpenClose}
        />
      )}
    </div>
  );
};

export default CarouselMovies;
