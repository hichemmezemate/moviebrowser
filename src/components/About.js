import Hero from "./Hero";

const AboutView = () => {
  return (
    <div>
      <Hero text="About" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Hello my name is Hichem Mezemate, and i'm a FullStack Developper,
              i'm familiar with HTML, CSS, JavaScript, ReactJs, NodeJs, Python,
              Django, and SQL for more info visit my github pages
              /hichemmezemate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutView;
