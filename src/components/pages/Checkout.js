import React from 'react';
import store from "../../store";
import BasketCard from "../BasketCard";
import { BrowserRouter as Router, Route, Routes, useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Thanks from "./Thanks";

function Checkout() {
    //Get live data from the store
    const products = useSelector(state => state.products);
    return (
        <div className="custom-container">
            <h2>Checkout</h2>
            <p>See your basket below, make any changes you wish to and then use the Checkout button to checkout!</p>
            {/*For each product in the cart, create a basketcard*/}
            {products.map(product => {
                return <BasketCard props={product} key={product.id}/>
            })}
            {/*Attach a link to the thank you page to the button*/}
            <Link to={"/thanks"}>
                <Routes>
                    <Route path="/thanks" element={<Thanks />}/>
                </Routes>
            <button>Checkout</button>
            </Link>
        </div>
    )
}

export default Checkout;