import "./CarouselImage.css";

const CarouselImage = ({ path }) => {
  let urlBase = `https://image.tmdb.org/t/p/w500/`;

  if (!path) {
    let url = "./assets/images/no-photo.jpeg";

    return <img className="movie-img" src={url} alt="poster" />;
  } else {
    let url = urlBase + path;

    return <img className="movie-img" src={url} alt="poster" />;
  }
};

export default CarouselImage;
