import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import myImage from "./not-av.jpg";

const MovieView = () => {
  const { id } = useParams();

  const [movieDetails, setMovieDetails] = useState({});

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=58507cc706ac67cc8ba97b098c38a449&language=en-US`
    )
      .then((Response) => Response.json())
      .then((data) => {
        setMovieDetails(data);
        setIsLoading(false)
      });
  }, [id]);

  function renderMovieDetails() {
    if (isLoading) {
      return <Hero text="Loading..." />;
    }

    if (movieDetails) {
      let posterPath = "";
      if (movieDetails.poster_path == null) {
        posterPath = myImage;
      } else {
        posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
      }
      let genre = "";;
      if (movieDetails.genres.length === 0) {
        genre = "not available";
      } else {
        try {
          genre = movieDetails.genres[0]["name"];
        } catch (TypeError) {
          genre = movieDetails.genres["name"];
        }
      }

      let votes = "not available";
      if (movieDetails.vote_average) {
        votes = movieDetails.vote_average
      }

      let prod_country1;
      if(movieDetails.production_countries) {
        if((movieDetails.production_countries.length !== 0)) {
          console.log(movieDetails.production_countries)
        
          prod_country1 = movieDetails.production_countries[0]['name'];
        } else {
        prod_country1 = 'Not Defined';
        }}



      const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`;
      return (
        <div>
          <Hero text={movieDetails.original_title} backdrop={backdropUrl}/>
          <div className="container my-5">
            <div className="row">
              <div className="col">
                <img
                  src={posterPath}
                  alt="immm"
                  className="img-fluid shadow rounded"
                />
              </div>
              <div className="col">
                <h2>{movieDetails.original_title}</h2>
                <p className="lead">{movieDetails.overview}</p>
                <p className="lead">
                  Release Date : {movieDetails.release_date}
                </p>
                <p className="lead">Genre : {genre}</p>
                <p className="lead">Votes : {votes}</p>
                <p className="lead">Production countries : {prod_country1}</p>
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
