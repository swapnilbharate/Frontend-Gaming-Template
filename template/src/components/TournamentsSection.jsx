import TournamentCard from "./TournamentCard";

import img1 from "../assets/tour1.jpg";
import img2 from "../assets/tour2.jpg";


function TournamentsSection() {
  return (
    <section className="tournaments-section">
      <div className="tournaments-container">

        <div className="tournaments-header">
          <span>TOURNAMENTS</span>
          <h2>Premium Tournament</h2>
        </div>

        <div className="tournaments-grid">
          <TournamentCard image={img1} title="World Of WarCraft" />
          <TournamentCard image={img2} title="DOOM" />
        </div>

      </div>
    </section>
  );
}

export default TournamentsSection;
