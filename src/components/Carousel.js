import { useFetch } from "../hooks/useFetch";

const Carousel = () => {
  let topic = "popular";
  let { data, loading, error } = useFetch(topic);

  if (!data) return null;

  console.log(data, loading, error);

  return (
    <div className="carousel">
      <h2>En streaming ahora</h2>
      <div className="carousel-movies">
        <div className="movie">
          <h3>Titulo</h3>
          <img src="https://placeimg.com/150/150/tech" alt="tech" />
        </div>
        <div className="movie">
          <h3>Titulo</h3>
          <img src="https://placeimg.com/150/150/nature" alt="nature" />
        </div>
        <div className="movie">
          <h3>Titulo</h3>
          <img src="https://placeimg.com/150/150/arch" alt="arch" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
