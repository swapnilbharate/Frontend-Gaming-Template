function ReviewCard({ image, score, title, desc }) {
  return (
    <div className="review-card">
      <div className="review-score">{score}</div>

      <img src={image} alt={title} />

      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

export default ReviewCard;
