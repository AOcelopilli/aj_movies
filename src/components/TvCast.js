import CarouselImage from "./CarouselImage";
import "./MovieCast.css";

const TvCast = ({ cast }) => {
  return (
    <div className="cast">
      <div className="grid-1-auto">
        {cast.map((actor) => {
          return (
            <div key={actor.id} data-id={actor.id} className="person">
              <CarouselImage path={actor.profile_path} />
              <div className="text">
                <p>
                  <i className="fas fa-theater-masks"></i> {actor.character}
                </p>
                <p>
                  <i className="far fa-user icon"></i> {actor.name}
                </p>
              </div>
            </div>
          );
        })}
        {cast.length === 0 && (
          <h3>No se encontraron datos para esta sección</h3>
        )}
      </div>
    </div>
  );
};

export default TvCast;
