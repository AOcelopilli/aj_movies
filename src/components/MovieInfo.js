import CarouselImage from "./CarouselImage";

const MovieInfo = ({ details }) => {
  return (
    <>
      <div className="movie-details-container">
        <div className="poster">
          <CarouselImage path={details.poster_path} />
          <p>Titulo original: {details.original_title}</p>
          <p className="date">
            Fecha de lanzamiento:{" "}
            {details.release_date.split("-").reverse().join(" ")}
          </p>
        </div>

        <div className="overview">
          <h3>Resumen</h3>
          <p>{details.overview || "No hay descripción"}</p>
        </div>
      </div>
    </>
  );
};

export default MovieInfo;
