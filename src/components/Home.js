import Hero from "./Hero";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

const Home = () => {

  const [popMovies, setpopMovies] = useState([]);
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=58507cc706ac67cc8ba97b098c38a449&language=en-US&page=1')
      .then((Response) => Response.json())
      .then((dt) => 
        setpopMovies(dt.results));
  }, [])

  let resultsHtml2 

  resultsHtml2 = popMovies.map((movie, index) => {
    return (
      <MovieCard movie={movie} key={index}/>
    )

  }) 
    
  



  return (
    <div>
      <Hero text="Welcome To Movie Browser" />
      <div className="container">
        <div className="row  py-5 g-5">
          <div className="col-lg-8 offset-lg-2">
            <p className="lead">
              Movie Browser is an web application to find out more about movies,
              you can find most of the released movies.
            </p>
          </div>
          <div className="my-2">
            <h1>
              Popular Movies:
            </h1>
          </div>
            {resultsHtml2 && (
              <div className="container p-1 g-1">
                <div className="row p-0">{resultsHtml2}</div>
              </div>
      )}
        </div>
      </div>
    </div>
  );
};

export default Home;
