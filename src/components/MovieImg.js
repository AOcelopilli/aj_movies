import "./MovieImg.css";

const MovieImg = ({ path }) => {
  let baseUrl = "https://image.tmdb.org/t/p/w500/";
  return <img className="movie-img" src={baseUrl + path} alt="poster" />;
};

export default MovieImg;
