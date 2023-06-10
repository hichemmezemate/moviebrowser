import { Link } from "react-router-dom";
import myImage from "./not-av.jpg";

const MovieCard = ({ movie }) => {
    let posterUrl = "";
    if (movie.poster_path) {
      posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    } else {
      posterUrl = myImage;
    }
    const detailUrl = `/movies/${movie.id}`;
    return (
      <div className="col-lg-3 col-4 my-2 card-container">
        <div class="card">
          <img src={posterUrl} class="card-img-top" alt={movie.original_title} />
          <div class="card-body">
            <h5 class="card-title">{movie.original_title}</h5>
            <Link to={detailUrl} class="btn btn-primary">
              Show Details
            </Link>
          </div>
        </div>
      </div>
    );
  };

  export default MovieCard;