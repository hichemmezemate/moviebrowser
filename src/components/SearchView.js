import Hero from "./Hero";
import { Link } from "react-router-dom";
import myImage from "./not-av.jpg";

/// OMDb API KEY = 58507cc706ac67cc8ba97b098c38a449
// exemple : https://api.themoviedb.org/3/search/movie?api_key=58507cc706ac67cc8ba97b098c38a449&query=Star%20Wars&include_adult=false&language=en-US&page=1

const MovieCard = ({ movie }) => {
  let posterUrl = "";
  if (movie.poster_path) {
    posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  } else {
    posterUrl = myImage;
    // console.log(posterUrl)
  }
  // const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  const detailUrl = `/movies/${movie.id}`;
  return (
    <div className="col-lg-3 col-2 my-4">
      <div class="card">
        {/* src={posterUrl} */}
        <img src={posterUrl} class="card-img-top" alt={movie.original_title} />
        <div class="card-body">
          <h5 class="card-title">{movie.original_title}</h5>
          <Link to={detailUrl} class="btn btn-primary">
            Show Details
          </Link>
        </div>
      </div>
      .
    </div>
  );
};

const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`;
  console.log(`search results are:${searchResults}`);
  console.log(searchResults.length);

  let resultsHtml = "";

  if (Object.keys(searchResults).length === 0) {
    console.log("not found");
    return <Hero text="Not Found" />;
  } else {
    resultsHtml = searchResults.map((obj, i) => {
      return <MovieCard movie={obj} key={i} />;
    });
  }

  // const resultsHtml = searchResults.map((obj, i) => {
  //     useEffect(() => {
  //         if(Object.keys(searchResults).length === 0){
  //             console.log('not found');
  //             return (
  //                 <div>g</div>
  //             )
  //         }
  //         else {
  //             return <MovieCard movie={obj} key={i} />
  //         }
  //     }
  //     )
  //     }
  // )

  return (
    <div>
      <Hero text={title} />
      {resultsHtml && (
        <div className="container">
          <div className="row">{resultsHtml}</div>
        </div>
      )}
    </div>
  );
};

export default SearchView;
