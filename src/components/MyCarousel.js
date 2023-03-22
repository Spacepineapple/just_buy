import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const deals = [
  {
    id: 1,
    name: "Product 1",
    image:
      "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: "$10",
    description: "This is product 1",
  },
  {
    id: 2,
    name: "Product 2",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: "$20",
    description: "This is product 2",
  },
  {
    id: 3,
    name: "Product 3",
    image:
      "https://images.unsplash.com/photo-1615655406736-b37c4fabf923?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: "$30",
    description: "This is product 3",
  },
];

const MyCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <section className="carousel">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {deals.map((deal) => (
          <Carousel.Item key={deal.id}>
            <img className="d-block w-100" src={deal.image} alt={deal.name} />
            <Carousel.Caption>
              <h3>{deal.name}</h3>
              <p>{deal.description}</p>
              <p>{deal.price}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default MyCarousel;
