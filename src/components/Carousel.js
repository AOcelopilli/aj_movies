import { useRef } from "react";
import CarouselImage from "./CarouselImage";

const Carousel = ({ data, handleOpenClose }) => {
  const refCarousel = useRef();

  const handleLeftClick = () => {
    refCarousel.current.scrollLeft -= refCarousel.current.offsetWidth;
  };

  const handleRightClick = () => {
    refCarousel.current.scrollLeft += refCarousel.current.offsetWidth;
  };

  return (
    <div className="carousel">
      <button className="carousel-left-btn" onClick={handleLeftClick}>
        {" "}
        &lt;{" "}
      </button>
      <div className="carousel-item-container" ref={refCarousel}>
        {data.map((e) => {
          return (
            <div
              className="carousel-item"
              key={e.id}
              onClick={handleOpenClose}
              data-id={e.id}
            >
              <div className="carousel-item-title">
                <h3>{e.title || e.name}</h3>
              </div>
              <CarouselImage path={e.backdrop_path} />
            </div>
          );
        })}
      </div>
      <button className="carousel-right-btn" onClick={handleRightClick}>
        {" "}
        &gt;{" "}
      </button>
    </div>
  );
};

export default Carousel;
