import Hero from "./Hero";

const AboutView = () => {
    return (
      <div>
        <Hero text='About'/>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 my-5">
              <p className="lead">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Aenean commodo ligula eget dolor.
              Aenean massa.
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
              </p>
            </div>
          </div>
        </div>

      </div>
    )
  }

export default AboutView;