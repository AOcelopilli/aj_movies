import CarouselImage from "./CarouselImage";
import "./MovieCast.css";

const MoviePeople = ({ credits }) => {
  return (
    <div className="crew">
      <div className="grid-1-auto ">
        {credits.crew.map((prod) => {
          return (
            <div key={prod.credit_id} className="person">
              <CarouselImage path={prod.profile_path} />{" "}
              <div className="text">
                <p>
                  <i class="fas fa-film"></i> {prod.job}
                </p>
                <p>
                  <i className="far fa-user icon"></i> {prod.original_name}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MoviePeople;
