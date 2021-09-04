import CarouselMovies from "../components/CarouselMovies";
import CarouselTv from "../components/CarouselTv";

const Inicio = () => {
  return (
    <div>
      <h1>Tendencias</h1>
      <CarouselMovies
        type="movie"
        category="day"
        trending={true}
        title="Peliculas del día"
      />
      <CarouselMovies
        type="movie"
        category="week"
        trending={true}
        title="Peliculas de la semana"
      />
      <CarouselTv
        type="tv"
        category="day"
        trending={true}
        title="Programas de Tv del día"
      />
      <CarouselTv
        type="tv"
        category="week"
        trending={true}
        title="Programas de Tv de la semana"
      />
    </div>
  );
};

export default Inicio;
