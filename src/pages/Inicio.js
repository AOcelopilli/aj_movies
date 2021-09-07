import CarouselMovies from "../components/CarouselMovies";
import CarouselTv from "../components/CarouselTv";

const Inicio = () => {
  return (
    <main>
      <h1>Tendencias</h1>
      <CarouselMovies
        category="day"
        trending={true}
        title="Peliculas del día"
      />
      <CarouselMovies
        category="week"
        trending={true}
        title="Peliculas de la semana"
      />
      <CarouselTv
        category="day"
        trending={true}
        title="Programas de Tv del día"
      />
      <CarouselTv
        category="week"
        trending={true}
        title="Programas de Tv de la semana"
      />
    </main>
  );
};

export default Inicio;
