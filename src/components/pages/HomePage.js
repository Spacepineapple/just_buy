import HomeCard from "../HomeCard";
import Carousel from "../Carousel";

export default function HomePage() {
  return (
    <div className="home_page">
      <Carousel />

      <div class="container">
        <div class="row row-cols-2 row-cols-lg-4 g-4 g-lg-7">
          <div class="col">
            <HomeCard />
          </div>
          <div class="col">
            <HomeCard />
          </div>
          <div class="col">
            <HomeCard />
          </div>
          <div class="col">
            <HomeCard />
          </div>
          <div class="col">
            <HomeCard />
          </div>
          <div class="col">
            <HomeCard />
          </div>
          <div class="col">
            <HomeCard />
          </div>
          <div class="col">
            <HomeCard />
          </div>
        </div>
      </div>
    </div>
  );
}
