import heroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam vel
            voluptatum praesentium culpa suscipit laboriosam labore odio atque
            quisquam rerum!
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="photo" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
