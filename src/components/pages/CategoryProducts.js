import axios from "axios";
import React, { useEffect, useState } from "react";
import { useMatches } from "react-router";

export default function CategoryProducts() {
  const { categoryName } = useMatches.params;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const query = getCategoryQuery(categoryName);
    axios
      .get(`https://dummyjson.com/products?category=${query}`)
      .then(({ data }) => {
        setProducts(data);
      });
  }, [categoryName]);

  const getCategoryQuery = (name) => {
    switch (name) {
      case "tech":
        return "smartphones&category=laptops";
      case "home":
        return "home-decoration&category=furniture&category=lighting";
      case "clothing":
        return "womens-dresses&category=tops&category=mens-shirts";
      case "accessories":
        return "watches&category=jewellery&category=sunglasses&category=bags";
      case "beauty":
        return "skincare&category=fragrances";
      case "groceries":
        return "groceries";
      default:
        return "";
    }
  };

  const handleAddToBasket = (product) => {
    // Todo: add logic for adding to basket
    console.log("Adding to basket", product);
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {products.map(({ name, image, price }) => (
        <div key={name} style={{ width: "300px", margin: "20px" }}>
          <img src={image} style={{ width: "100%" }} alt="" />
          <div
            style={{
              position: "relative",
              bottom: "0",
              left: "0",
              backgroundColor: "black",
              color: "white",
              padding: "5px",
            }}
          >
            <div>{name}</div>
            <div>${price}</div>
            <button onClick={() => handleAddToBasket({ name, image, price })}>
              Add to Basket
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
