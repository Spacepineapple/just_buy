import CarouselItem from "./CarouselItem";

const carouselItem = [
  {
    id: 1,
    name: "Content 1",
    image:
      "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "Find the perfect gift this mothers day.",
  },
  {
    id: 2,
    name: "Content 2",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "We have thousands of products on sale.",
  },
  {
    id: 3,
    name: "Content 3",
    image:
      "https://images.unsplash.com/photo-1615655406736-b37c4fabf923?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "Explore our range of products.",
  },
];

export default function Carousel() {
  return (
    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
      {/* Carousel Indicators */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      {/* Carousel Content */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          {/* Todo - Add link */}
          <a href="#">
            <img src={carouselItem[0].image} aria-hidden="true" alt="" />
            <div>
              <div className="carousel-caption text-start">
                <h1>{carouselItem[0].description}</h1>
              </div>
            </div>
          </a>
        </div>
        <div className="carousel-item">
          <a href="#">
            <img src={carouselItem[1].image} aria-hidden="true" alt="" />
            <div>
              <div className="carousel-caption">
                <h1>{carouselItem[1].description}</h1>
              </div>
            </div>
          </a>
        </div>
        <div className="carousel-item">
          <a href="#">
            <img src={carouselItem[2].image} aria-hidden="true" alt="" />
            <div>
              <div className="carousel-caption text-end">
                <h1>{carouselItem[2].description}</h1>
              </div>
            </div>
          </a>
        </div>
      </div>
      {/* Carousel Switch Buttons */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
