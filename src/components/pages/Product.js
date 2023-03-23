import axios from "axios";
import React, {useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import store from "../../store";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import CategoryProducts from "./CategoryProducts";


function Product({data}) {
    const [item, setItem] = useState([]);
    const [imgSrc, setImgSrc] = useState();
    let {id, category} = useParams();

    const handleAddToBasket = (item) => {
        store.dispatch({ type: 'cart/productAdded', payload: item })
        console.log(store.getState());
        console.log(store);
      };
    
    const navigate = useNavigate();
	const moveBack = () => {
		navigate(-1);
	}
    let productData = undefined;
    useEffect (() => {
        if (productData) {
            setItem(data);
            setImgSrc(data.images[0])
            console.log("Used saved data");
        } else {
            axios
            .get(`https://dummyjson.com/products/${id}`)
            .then(({ data }) => {
              productData = data;
              setItem(data);
              setImgSrc(data.images[0]);
              console.log(data);
              console.log(id);
            });
        } 
        }, [id]); 
    
    if (item) {
        return (
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="d-flex flex-column container-fluid col-md-7 py-5 align-items-center">
                    <button type="button" className="btn btn-secondary" onClick={moveBack}>Back</button>
                    <h2 className="display-5 fw-bold">{item.title}</h2>
                    <div className="product-content d-flex col-md-8">
                        <div className="col-md-5">
                            <img src={imgSrc}/>
                        </div>
                        <div className="d-flex col-md-10 flex-column align-items-center justify-content-center">
                            <p className="col-md-12 fs-4">{item.description}</p>
                            <p className="col-md-4 fs-4 d-flex justify-content-center">£{item.price}</p>
                            <p className="col-md-4 fs-4 d-flex justify-content-center">{item.rating}</p>
                            <button type="button" className="btn btn-primary" onClick={() => handleAddToBasket(item.title, item.images, item.description, item.price)}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        )}
    else {
        return (
            <h2>Loading</h2>
        )
    }
}

export default Product;