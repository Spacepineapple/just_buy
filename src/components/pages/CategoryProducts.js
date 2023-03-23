import axios from "axios";
import React, {useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import { useMatches } from "react-router";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Product from "./Product";
import store from "../../store";

export default function CategoryProducts() {
  const { name } = useParams();
  const [products, setProducts] = useState([]);

  useEffect (() => {
    axios
      .get(`https://dummyjson.com/products/category/${name}`)
      .then(({ data }) => {
        setProducts(data);
        console.log(name);
        console.log(name);
      });
  }, [name]);


  const handleAddToBasket = (product) => {
    // Todo: add logic for adding to basket
    store.dispatch({ type: 'cart/productAdded', payload: product })
    console.log(store.getState());
    console.log(store);
  };

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
