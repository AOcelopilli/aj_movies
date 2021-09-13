import "./CarouselImage.css";

const CarouselImage = ({ path }) => {
  let urlBase = `https://image.tmdb.org/t/p/w500/`;

  if (!path) {
    let url =
      "https://github.com/AOcelopilli/aj_movies/blob/gh-pages/assets/images/no-photo.jpeg?raw=true";

    return <img className="movie-img" src={url} alt="poster" />;
  } else {
    let url = urlBase + path;

    return <img className="movie-img" src={url} alt="poster" />;
  }
};

export default CarouselImage;
