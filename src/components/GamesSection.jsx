import GameCard from "./GameCard";

import game1 from "../assets/game111.jpg";
import game2 from "../assets/game2.jpg";
import game3 from "../assets/game3.jpg";
import game4 from "../assets/game1.jpg";

function GamesSection() {
  return (
    <section className="games-section">
      <div className="games-grid">

        <GameCard
          image={game1}
          tag="New"
          title="Suspendisse ut justo tem por, rutrum"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />

        <GameCard
          image={game2}
          tag="Strategy"
          title="Justo tempor, rutrum erat id, molestie"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />

        <GameCard
          image={game3}
          tag="New"
          title="Nullam lacinia ex eleifend orci porttitor"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />

        <GameCard
          image={game4}
          tag="Racing"
          title="Lacinia ex eleifend orci suscipit"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />

      </div>
    </section>
  );
}

export default GamesSection;
