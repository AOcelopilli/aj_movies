import Carousel from "./components/Carousel";

function App() {
  return (
    <>
      <h1>Recomiendame una pelicula</h1>
      <Carousel topic="popular" title="Populares" />
      <Carousel topic="top_rated" title="Mejor calificados" />
      <Carousel topic="now_playing" title="Reproduciendo ahora" />
      <Carousel topic="upcoming" title="Proximamente" />
    </>
  );
}

export default App;
