import CarouselMovies from "../components/CarouselMovies";
import CarouselTv from "../components/CarouselTv";
import "./Page.css";

const Inicio = () => {
  return (
    <main>
      <h1>Tendencias</h1>
      <CarouselMovies
        category="day"
        trending={true}
        title="Películas del día"
      />
      <CarouselMovies
        category="week"
        trending={true}
        title="Películas de la semana"
      />
      <CarouselTv category="day" trending={true} title="Series del día" />
      <CarouselTv category="week" trending={true} title="Series de la semana" />
    </main>
  );
};

export default Inicio;
