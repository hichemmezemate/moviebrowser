import Hero from "./Hero";

const Home = () => {
  return (
    <div>
      <Hero text="Welcome To Movie Browser" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Movie Browser is an web application to find out more about movies,
              you can find most of the released movies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
