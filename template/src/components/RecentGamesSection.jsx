import RecentGameCard from "./RecentGameCard";

import img1 from "../assets/recent1.jpg";
import img2 from "../assets/recent2.jpg";
import img3 from "../assets/recent3.jpg";

function RecentGamesSection() {
  return (
    <section className="recent-section">
      <div className="recent-container">
        <span className="recent-badge">NEW</span>
        <h2>Recent Games</h2>

        <div className="recent-grid">
          <RecentGameCard
            image={img1}
            tag="New"
            title="Suspendisse ut justo tem por, rutrum"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />

          <RecentGameCard
            image={img2}
            tag="Racing"
            title="Susce pulvinar metus nulla, vel facilisis sem"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />

          <RecentGameCard
            image={img3}
            tag="Adventure"
            title="Suspendisse ut justo tem por, rutrum"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>
      </div>
    </section>
  );
}

export default RecentGamesSection;
