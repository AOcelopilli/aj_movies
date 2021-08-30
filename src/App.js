import Carousel from "./components/Carousel";

function App() {
  return (
    <>
      <h1>Recomiendame una pelicula</h1>
      <Carousel topic="popular" />
      <Carousel topic="now_playing" />
    </>
  );
}

export default App;
