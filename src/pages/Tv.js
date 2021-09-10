import CarouselTv from "../components/CarouselTv";

const Tv = () => {
  return (
    <main>
      <h1>Series</h1>
      <CarouselTv category="airing_today" title="Transmitiendo hoy" />
      <CarouselTv category="on_the_air" title="Al aire" />
      <CarouselTv category="popular" title="Populares" />
      <CarouselTv category="top_rated" title="Mejor puntuadas" />
    </main>
  );
};

export default Tv;
