import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import myImage from "./not-av.jpg";

const MovieView = () => {
  const { id } = useParams();

  const [movieDetails, setMovieDetails] = useState({});

  const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=58507cc706ac67cc8ba97b098c38a449&language=en-US`
    )
      .then((Response) => Response.json())
      .then((data) => {
        setMovieDetails(data);
        setIsLoading(false)
        // setError(false);
      });
  }, [id]);

  function renderMovieDetails() {
    if (isLoading) {
      return <Hero text="Loading..." />;
    }

    if (movieDetails) {
      let posterPath = "";
      if (movieDetails.poster_path == null) {
        // const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
        posterPath = myImage;
      } else {
        posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
      }
      let genre = "";
      console.log(movieDetails.genres);
      if (movieDetails.genres.length === 0) {
        genre = "not available";
      } else {
        try {
          genre = movieDetails.genres[0]["name"];
        } catch (TypeError) {
          genre = movieDetails.genres["name"];
        }
      }
      // const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;

      const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`;
      return (
        <div>
          <Hero text={movieDetails.original_title} backdrop={backdropUrl}/>
          <div className="container my-5">
            <div className="row">
              <div className="col-md-3">
                <img
                  src={posterPath}
                  alt="immm"
                  className="img-fluid shadow rounded"
                />
              </div>
              <div className="col-md-9">
                <h2>{movieDetails.original_title}</h2>
                <p className="lead">{movieDetails.overview}</p>
                <p className="lead">
                  Release Date : {movieDetails.release_date}
                </p>
                <p className="lead">Genre : {genre}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // if (error) {
    //     console.log('not found')
    //     return (
    //         <Hero text="movie not found" />
    //     )

    // }
  }

  return renderMovieDetails();
};

export default MovieView;
