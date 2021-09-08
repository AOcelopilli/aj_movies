import CarouselImage from "./CarouselImage";

const MovieCast = ({ cast }) => {
  return (
    <div className="cast">
      <h3>Cast</h3>
      <div className="grid-1-auto small-container">
        {cast.map((actor) => {
          return (
            <div key={actor.id} className="person">
              <h4>Personaje: {actor.character}</h4>
              <CarouselImage path={actor.profile_path} />
              <p>Nombre: {actor.original_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieCast;
