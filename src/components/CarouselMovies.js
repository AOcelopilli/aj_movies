import { useState, useEffect } from "react";
import { helpFetch } from "../helpers/helpFetch";
import "./Carousel.css";
import MovieDetails from "./MovieDetails";
import Carousel from "./Carousel";

const CarouselMovies = ({
  type = "movie",
  category,
  trending = false,
  title,
}) => {
  const [data, setData] = useState(null);
  const [id, setId] = useState(null);

  useEffect(() => {
    helpFetch()
      .getCategory(type, category, trending)
      .then((res) => setData(res));
  }, [type, category, trending]);

  if (!data) return null;

  const handleOpenClose = (e) => {
    let mediaId = e.target.getAttribute("data-id");

    if (id !== mediaId) {
      setId(mediaId);
    } else {
      setId(null);
    }
  };

  return (
    <div>
      <div>
        <h2>{title}</h2>
      </div>

      <Carousel data={data} handleOpenClose={handleOpenClose} />

      {id && (
        <MovieDetails type={type} id={id} handleOpenClose={handleOpenClose} />
      )}
    </div>
  );
};

export default CarouselMovies;
