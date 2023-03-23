import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const deals = [
  {
    id: 1,
    name: "Spring Sale",
    image:
      "https://images.unsplash.com/photo-1615655406736-b37c4fabf923?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    subtext: "27-29 March",
    description: "Shop up to 40% off",
  },
  {
    id: 2,
    name: "We're helping Comic Relief change lives.",
    image:
      "https://assets.aboutamazon.com/dims4/default/bf58387/2147483647/strip/true/crop/2700x1520+0+140/resize/1320x743!/format/webp/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F72%2Faa%2Fe069c5c6485bbae46ea3bd144612%2Fa3den9zk.jpeg",
    subtext: "We'll match your purchase price for qualifying products",
    description: "You can too.",
  },
  {
    id: 3,
    name: "Your goodies delivered with lighting speed!",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    subtext: "Waiting is so last season.",
    description: "Enjoy free shipping on thousands of products",
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
              <h2>{deal.name}</h2>
              <h4>{deal.description}</h4>
              <p>{deal.subtext}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default MyCarousel;
