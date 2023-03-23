import HomeShowcase from "../HomeShowcase";
import MyCarousel from "../MyCarousel";
import TopDeals from "../TopDeals";

export default function HomePage() {
  return (
    <div className="home-page custom-container">
      <MyCarousel />
      <HomeShowcase />
      <TopDeals />
    </div>
  );
}
