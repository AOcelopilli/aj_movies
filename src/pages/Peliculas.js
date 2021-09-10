import CarouselMovies from "../components/CarouselMovies";

const Peliculas = () => {
  return (
    <main>
      <h1>Peliculas</h1>
      <CarouselMovies category="popular" title="Populares" />
      <CarouselMovies category="top_rated" title="Mejor puntuadas" />
      <CarouselMovies category="upcoming" title="En camino" />
      <CarouselMovies category="now_playing" title="Reproduciendo ahora" />
    </main>
  );
};

export default Peliculas;
