import CarouselImage from "./CarouselImage";

const MoviePeople = ({ credits }) => {
  return (
    <div className="people">
      <div className="castin">
        <h3>Castin</h3>
        <div className="grid-1-auto small-container">
          {credits.cast.map((actor) => {
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

      <div className="production">
        <h3>Producción</h3>
        <div className="grid-1-auto small-container">
          {credits.crew.map((prod) => {
            return (
              <div key={prod.credit_id} className="person">
                <h4>Puesto: {prod.job}</h4>
                <CarouselImage path={prod.profile_path} />
                <p>Nombre: {prod.original_name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MoviePeople;
