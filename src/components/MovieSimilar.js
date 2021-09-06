import MovieImg from "./MovieImg";

const MovieSimilar = ({ similar, handleOpenClose }) => {
  return (
    <div className="similar-movies">
      <h3>Peliculas similares</h3>
      <div className="grid-1-auto">
        {similar.results.map((movie) => {
          return (
            <div
              key={movie.id}
              className="similar-movie"
              data-id={movie.id}
              onClick={handleOpenClose}
            >
              <h4>
                {movie.title || movie.original_title || movie.original_name}
              </h4>
              <MovieImg path={movie.poster_path} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieSimilar;
