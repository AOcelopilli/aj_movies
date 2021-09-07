import CarouselImage from "./CarouselImage";

const TvPeople = ({ credits }) => {
  return (
    <div>
      <h2>Casting</h2>
      <div>
        {credits.cast.map((person) => {
          return (
            <div className="person" data-id={person.id} key={person.id}>
              <h3>{person.character}</h3>
              <p>Nombre real: {person.name}</p>
              <CarouselImage path={person.profile_path} />
            </div>
          );
        })}
      </div>
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
  );
};

export default TvPeople;
