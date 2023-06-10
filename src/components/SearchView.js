import Hero from "./Hero";
import MovieCard from "./MovieCard";

/// OMDb API KEY = 58507cc706ac67cc8ba97b098c38a449
// exemple : https://api.themoviedb.org/3/search/movie?api_key=58507cc706ac67cc8ba97b098c38a449&query=Star%20Wars&include_adult=false&language=en-US&page=1


const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`;

  let resultsHtml;
  resultsHtml = searchResults?.map((obj, i) => {
        return <MovieCard movie={obj} key={i} />});
  if (Object.keys(searchResults).length === 0) {
    console.log("not found");
    return <Hero text="Not Found" />;
  } else {
    resultsHtml = searchResults.map((obj, i) => {
      return <MovieCard movie={obj} key={i} />;
    });
  }


  return (
    <div>
      <Hero text={title} />
      {resultsHtml && (
        <div className="container">
          <div className="row">{resultsHtml}</div>
        </div>
      )}
    </div>
  );}

export default SearchView;
