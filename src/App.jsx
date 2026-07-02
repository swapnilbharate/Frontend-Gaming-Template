import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GamesSection from "./components/GamesSection";
import RecentGamesSection from "./components/RecentGamesSection";
import TournamentsSection from "./components/TournamentsSection";
import RecentReviewsSection from "./components/RecentReviewsSection"; 
import GameWarriorSection from "./components/GameWarriorSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Hero
        title="The Best Games Out There"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        buttonText="Read More"
      />

      <GamesSection />

      <RecentGamesSection />

      <TournamentsSection />

      <RecentReviewsSection /> {/* ✅ RECENT REVIEWS SECTION */}
       <GameWarriorSection />
       <Footer />
    </>
  );
}

export default App;
