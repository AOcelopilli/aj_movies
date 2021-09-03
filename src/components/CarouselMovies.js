import { useState, useEffect } from "react";
import { helpFetch } from "../helpers/helpFetch";

const CarouselMovies = ({ type, category }) => {
  useEffect(() => {
    helpFetch()
      .getCategory(type, category)
      .then((res) => console.log(res));
  }, [type, category]);

  return (
    <div>
      <h2>{category}</h2>
    </div>
  );
};

export default CarouselMovies;
