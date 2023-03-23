import axios from "axios";
import React, {useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import { useMatches } from "react-router";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Product from "./Product";


export default function CategoryProducts() {
  const { name } = useParams();
  const [products, setProducts] = useState([]);

  const getCategoryQuery = (name) => {
    console.log(name);
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

  useEffect (() => {
    const query = getCategoryQuery(name);
    axios
      .get(`https://dummyjson.com/products?category=${query}`)
      .then(({ data }) => {
        setProducts(data);
        console.log(query);
        console.log(name);
      });
  }, [name]);


  const handleAddToBasket = (product) => {
    // Todo: add logic for adding to basket
    console.log("Adding to basket", product);
  };

  if (products.products) {
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.products.map(({ id, name, images, price }) => (
          <Link to={`product/${id}`} key={"product "+ id +" link"}>
            <Routes>
              {/*Create a route with a placeholder id element on the end of the URL*/}
              <Route path="product/:id" element={<Product data={products.products}/>}  />
            </Routes>
            <div key={name} style={{ width: "300px", margin: "20px" }}>
              <img src={images[0]} style={{ width: "100%" }} alt="" />
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
                <button onClick={() => handleAddToBasket({ name, images, price })}>
                  Add to Basket
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  }
  else {
    return <h2>Loading</h2>
  }

}
