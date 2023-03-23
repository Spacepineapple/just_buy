import axios from "axios";
import React, {useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import { useMatches } from "react-router";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Product from "./Product";
import store from "../../store";

export default function CategoryProducts() {
  //Get category name from URL
  const { name } = useParams();
  //Create state handler for products
  const [products, setProducts] = useState([]);

  //Request data from API
  useEffect (() => {
    axios
      .get(`https://dummyjson.com/products/category/${name}`)
      .then(({ data }) => {
        setProducts(data);
      });
  }, [name]);


  const handleAddToBasket = (product) => {
    // Send a message to the store to add a product to the cart
    store.dispatch({ type: 'cart/productAdded', payload: product })
    console.log(store.getState());
  };

  //Display loading before state change has occurred
  if (products.products) {
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.products.map(({ id, title, images, price }) => (
            <div key={title} style={{ width: "300px", margin: "20px" }}>
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
                <div>{title}</div>
                <div>${price}</div>
                <button onClick={() => handleAddToBasket({ title, images, price })}>
                  Add to Basket
                </button>
                <Link to={`product/${id}`} key={"product "+ id +" link"}>
                  <Routes>
                    {/*Create a route with a placeholder id element on the end of the URL*/}
                    <Route path="product/:id" element={<Product data={products.products}/>}  />
                  </Routes>
                  <button>
                    More
                  </button>
                </Link>
              </div>
            </div>
        ))}
      </div>
    );
  }
  else {
    return <h2>Loading</h2>
  }

}
