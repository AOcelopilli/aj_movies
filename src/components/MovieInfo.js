import CarouselImage from "./CarouselImage";
import "./MovieInfo.css";

const MovieInfo = ({ details }) => {
  return (
    <>
      <section className="movie-details-container">
        <div className="poster">
          <CarouselImage path={details.poster_path} />
          <p>
            <strong>{details.original_title}</strong> <br />{" "}
            <span>Titulo original</span>
          </p>

          <p>
            <strong>
              {" "}
              {details.release_date.split("-").reverse().join(" ")}
            </strong>{" "}
            <br />
            <span>Fecha de lanzamiento</span>
          </p>
        </div>

        <div className="overview">
          <h3>Resumen</h3>
          <p>{details.overview || "No hay descripción"}</p>
        </div>
      </section>
    </>
  );
};

export default MovieInfo;
