import { useState, useEffect } from "react";
import { helpFetch } from "../helpers/helpFetch";
import Carousel from "./Carousel";
import "./Carousel.css";
import TvDetails from "./TvDetails";

const CarouselTv = ({ type = "tv", category, trending = false, title }) => {
  const [data, setData] = useState(null);
  const [idTv, setIdTv] = useState(null);

  useEffect(() => {
    helpFetch()
      .getCategory(type, category, trending)
      .then((res) => setData(res));
  }, [type, category, trending]);

  if (!data) return null;

  const handleOpenClose = (e) => {
    let id = e.target.getAttribute("data-id");

    if (idTv !== id) {
      setIdTv(id);
    } else {
      setIdTv(null);
    }
  };

  return (
    <>
      <div>
        <h2>{title}</h2>
      </div>

      <Carousel data={data} handleOpenClose={handleOpenClose} />

      {idTv && (
        <TvDetails type={type} id={idTv} handleOpenClose={handleOpenClose} />
      )}
    </>
  );
};

export default CarouselTv;
