const Hero = ({ text, backdrop }) => {
  return (
    <header className="bg-success text-white p-4 hero-container text-center">
      <h1 className="hero-text">{text}</h1>
      {backdrop &&
      <div className="hero-backdrop" style={{backgroundImage: `url(${backdrop})`}}></div>
      } 
    </header>
  );
};

export default Hero;
