import axios from "axios";
import React, {useEffect, useState } from "react";
import {useParams} from "react-router-dom";


function Product({data}) {
    const [item, setItem] = useState([]);
    const [imgSrc, setImgSrc] = useState();
    let {id} = useParams();

    useEffect (() => {
        axios
          .get(`https://dummyjson.com/products/${id}`)
          .then(({ data }) => {
            setItem(data);
            setImgSrc(data.images[0]);
            console.log(data);
            console.log(id);
          });
      }, [id]);
    
    if (item) {
        return (
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="d-flex flex-column container-fluid col-md-7 py-5 align-items-center">
                    <button type="button" className="btn btn-secondary">Back</button>
                    <h2 className="display-5 fw-bold">{item.title}</h2>
                    <div className="product-content d-flex col-md-8">
                        <div className="col-md-5">
                            <img src={imgSrc}/>
                        </div>
                        <div className="d-flex col-md-10 flex-column align-items-center justify-content-center">
                            <p className="col-md-12 fs-4">{item.description}</p>
                            <p className="col-md-4 fs-4 d-flex justify-content-center">£{item.price}</p>
                            <p className="col-md-4 fs-4 d-flex justify-content-center">{item.rating}</p>
                            <button type="button" className="btn btn-primary" onClick={console.log("added to cart")}>Add to Cart</button>
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