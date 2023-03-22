import axios from "axios";
import React, {useEffect, useState } from "react";
import {useParams} from "react-router-dom";


function Product({data}) {
    const [item, setItem] = useState([]);
    let {id} = useParams();

    useEffect (() => {
        axios
          .get(`https://dummyjson.com/products/${id}`)
          .then(({ data }) => {
            setItem(data);
            console.log(data);
            console.log(id);
          });
      }, [id]);
    
    if (item) {
        return (
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h2 className="display-5 fw-bold">{item.name}</h2>
                    <p className="col-md-8 fs-4">{item.description}</p>
                    <p className="col-md-8 fs-4">{item.price}</p>
                    <button type="button" className="btn btn-primary" onClick={console.log("added to cart")}>Add to Cart</button>
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