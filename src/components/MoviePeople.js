import CarouselImage from "./CarouselImage";
import "./MoviePeople.css";

const MoviePeople = ({ credits }) => {
  return (
    <div className="people">
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
