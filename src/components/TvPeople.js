import CarouselImage from "./CarouselImage";
import "./MovieCast.css";

const TvPeople = ({ crew }) => {
  return (
    <div className="crew">
      <div className="grid-1-auto ">
        {crew.length === 0 && (
          <h3>No se encontraron datos para esta sección</h3>
        )}
        {crew.map((prod) => {
          return (
            <div key={prod.id} className="person">
              <CarouselImage path={prod.profile_path} />{" "}
              <div className="text">
                <p>
                  <i className="fas fa-film"></i> {prod.job}
                </p>
                <p>
                  <i className="far fa-user icon"></i> {prod.original_name}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  /* return (

    <div>
      <h2>Casting</h2>

      {credits.crew.length > 0 &&
        credits.crew.map((person) => {
          return (
            <div className="person" data-id={person.id} key={person.id}>
              <h3>{person.job}</h3>
              <p>Nombre: {person.original_name}</p>
              <CarouselImage path={person.profile_path} />
            </div>
          );
        })}
    </div>
  ); */
};

export default TvPeople;
