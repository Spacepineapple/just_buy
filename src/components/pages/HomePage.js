import HomeShowcase from "../HomeShowcase";
import MyCarousel from "../MyCarousel";

export default function HomePage() {
  return (
    <div className="home-page custom-container">
      <MyCarousel />
      <HomeShowcase />
    </div>
  );
}
