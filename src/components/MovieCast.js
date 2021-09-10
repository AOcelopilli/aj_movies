import CarouselImage from "./CarouselImage";
import "./MovieCast.css";

const MovieCast = ({ cast }) => {
  return (
    <div className="cast">
      <div className="grid-1-auto">
        {cast.map((actor) => {
          return (
            <div key={actor.id} className="person">
              <CarouselImage path={actor.profile_path} />
              <div className="text">
                <p>
                  <i class="fas fa-theater-masks"></i> {actor.character}
                </p>
                <p>
                  <i className="far fa-user icon"></i> {actor.original_name}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieCast;
