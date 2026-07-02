function GameCard({ image, tag, title, description }) {
  return (
    <div className="game-card" style={{ backgroundImage: `url(${image})` }}>
      <div className="card-overlay"></div>

      <span className={`game-tag ${tag.toLowerCase()}`}>{tag}</span>

      <div className="game-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <small>3 Comments</small>
      </div>
    </div>
  );
}

export default GameCard;
