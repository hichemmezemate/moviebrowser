import Hero from "./Hero";

const AboutView = () => {
  return (
    <div>
      <Hero text="About" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
            <h1>Movie Browser:</h1>
            Movie browser is an web application were you can find a lot of informations about movies, you can find details like: movie's description, release date... etc.
            Movie browser was created using React.Js & Node.Js and some CSS The API used in this web application is the TMDB API.
            this web application was created by Hichem Mezemate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutView;
