import CarouselImage from "./CarouselImage";
import "./CarouselSimilar.css";

const CarouselSimilar = ({ similar, handleOpenClose }) => {
  return (
    <div className="similar-movies">
      <div className="grid-1-auto">
        {similar.results.map((movie) => {
          return (
            <div
              key={movie.id}
              className="similar-movie"
              data-id={movie.id}
              onClick={handleOpenClose}
            >
              <h4>
                {movie.title || movie.original_title || movie.original_name}
              </h4>
              <CarouselImage path={movie.poster_path} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CarouselSimilar;
