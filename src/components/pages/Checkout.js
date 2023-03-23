import React from 'react';
import store from "../../store";
import BasketCard from "../BasketCard";
import { BrowserRouter as Router, Route, Routes, useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Thanks from "./Thanks";

function Checkout() {
    const products = useSelector(state => state.products);
    let productArray = products;
    return (
        <div>
            <h2>Checkout</h2>
            <p>See your basket below, make any changes you wish to and then use the Checkout button to checkout!</p>
            {productArray.map(product => {
                console.log(product);
                return <BasketCard props={product}/>
            })}
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