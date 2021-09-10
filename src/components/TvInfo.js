import CarouselImage from "./CarouselImage";
import "./MovieInfo.css";

const TvInfo = ({ details }) => {
  return (
    <section className="movie-details-container">
      <div className="poster">
        <CarouselImage path={details.poster_path} />
      </div>

      <div className="overview">
        <div>
          <h3>Resumen</h3>
          <p>{details.overview ? details.overview : "Sin descripción"}</p>
        </div>
        <div>
          <h3>{details.original_name}</h3>
          <p>Nombre original</p>
        </div>
        <div>
          <h3>{details.first_air_date}</h3>
          <p>Fecha de estreno</p>
        </div>

        <div>
          <h3>{details.last_air_date}</h3>
          <p>Transmisión del ultimo capitulo</p>
        </div>
      </div>
    </section>
  );
};

export default TvInfo;
