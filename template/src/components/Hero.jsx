import heroBg from "../assets/hero back.jpg";
import gameLogo from "../assets/12.png"; // add any logo png here

function Hero({ title, description, buttonText }) {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>
          The Best <span className="animated-word">Games</span> Out There
        </h1>

        <p>{description}</p>

        <button className="hero-btn">{buttonText}</button>
      </div>

      {/* Floating rotating logo */}
      <img src={gameLogo} alt="game logo" className="hero-game-logo" />
    </section>
  );
}

export default Hero;
