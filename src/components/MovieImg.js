import "./MovieImg.css";

const MovieImg = ({ path }) => {
  let urlBase = `https://image.tmdb.org/t/p/w500/`;

  if (!path) {
    let noImg = "wwemzKWzjKYJFfCeiB57q3r4Bcm.png",
      url = urlBase + noImg;

    return <img className="movie-img" src={url} alt="poster" />;
  } else {
    let url = urlBase + path;

    return <img className="movie-img" src={url} alt="poster" />;
  }
};

export default MovieImg;
