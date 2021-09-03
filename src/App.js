import Carousel from "./components/Carousel";
import CarouselMovies from "./components/CarouselMovies";

function App() {
  return (
    <>
      <h1>Peliculas</h1>
      <Carousel type="tv" topic="popular" title="Populares" />
      <Carousel type="movie" topic="top_rated" title="Mejor calificados" />
      <CarouselMovies type="movie" category="popular" />

      {/* 
        TODO: caroulse for movies, tv, trending, with type & category
        TODO: helpFetch: method for each type of carousel
        
      */}
    </>
  );
}

export default App;
