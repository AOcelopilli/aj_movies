import CarouselImage from "./CarouselImage";
import "./MovieInfo.css";

const MovieInfo = ({ details }) => {
  return (
    <>
      <section className="movie-details-container">
        <div className="poster">
          <CarouselImage path={details.poster_path} />
        </div>

        <div className="overview">
          <div>
            <h3>Resumen</h3>
            <p>{details.overview || "No hay descripción"}</p>
          </div>

          <div>
            <h3>{details.original_title}</h3>
            <p>Titulo original</p>
          </div>

          <div>
            <h3>{details.release_date.split("-").reverse().join("/")}</h3>
            <p>Fecha de lanzamiento</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default MovieInfo;
