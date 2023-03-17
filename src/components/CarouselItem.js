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

export default function CarouselItem() {
  return (
    <div className="carousel-item">
      <div>
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
    </div>
  );
}
