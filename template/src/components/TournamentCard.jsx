function TournamentCard({ image, title }) {
  return (
    <div className="tournament-card">
      <div className="tournament-badge">PREMIUM TOURNAMENT</div>

      <div className="tournament-content">
        <img src={image} alt={title} />

        <div className="tournament-info">
          <h3>{title}</h3>
          <p>Tournament Begins: <b>June 20, 2018</b></p>
          <p>Tournament Ends: <b>July 01, 2018</b></p>
          <p>Participants: <b>10 teams</b></p>
          <p>Tournament Author: <b>Admin</b></p>

          <p className="prizes">
            Prizes: 1st place $2000, 2nd place $1000, 3rd place $500
          </p>
        </div>
      </div>
    </div>
  );
}

export default TournamentCard;
