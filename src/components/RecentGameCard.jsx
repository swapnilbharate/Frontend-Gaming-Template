function RecentGameCard({ image, tag, title, description }) {
  return (
    <div className="recent-card">
      <div
        className="recent-card-img"
        style={{ backgroundImage: `url(${image})` }}
      >
        <span className={`recent-tag ${tag.toLowerCase()}`}>{tag}</span>
      </div>

      <div className="recent-card-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <small>3 Comments</small>
        <div className="card-actions">⭐ ❤️</div>
      </div>
    </div>
  );
}

export default RecentGameCard;
