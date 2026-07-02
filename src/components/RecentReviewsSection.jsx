import "./RecentReviews.css";
import ReviewCard from "./ReviewCard";

import bg from "../assets/review-bg.png";
import kratos from "../assets/kratos.png";

import ac from "../assets/ac.jpg";
import doom from "../assets/doom.jpg";
import overwatch from "../assets/overwatch.jpg";
import gta from "../assets/gta.jpg";

function RecentReviewsSection() {
  return (
    <section
      className="reviews-section"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="reviews-overlay"></div>
      <div className="gaming-particles"></div>

      <div className="reviews-container">
        <span className="badge">NEW</span>

        <div className="reviews-title">
          <h2>Recent Reviews</h2>
        </div>

        <div className="reviews-grid">
          <ReviewCard image={ac} score="9.3" title="Assassin’s Creed" desc="Lorem ipsum dolor sit amet." />
          <ReviewCard image={doom} score="9.5" title="Doom" desc="Lorem ipsum dolor sit amet." />
          <ReviewCard image={overwatch} score="9.1" title="Overwatch" desc="Lorem ipsum dolor sit amet." />
          <ReviewCard image={gta} score="9.7" title="GTA" desc="Lorem ipsum dolor sit amet." />
        </div>
      </div>

      <img src={kratos} className="reviews-character" />
    </section>
  );
}

export default RecentReviewsSection;
