import MyCarousel from "../MyCarousel";
import ShopByCategories from "../ShopByCategories";
import TopDeals from "../TopDeals";

export default function HomePage() {
  return (
    <div className="home-page custom-container">
      <MyCarousel />
      <ShopByCategories />
      <TopDeals />
    </div>
  );
}
