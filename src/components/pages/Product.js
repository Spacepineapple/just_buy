import React from 'react';
import {useParams} from "react-router-dom";

function Product({data}) {
    let {id} = useParams();
    let product = data.find(product => product.id===id);
    return (
        <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
                <h2 className="display-5 fw-bold">{product.name}</h2>
                <p className="col-md-8 fs-4">{product.description}</p>
                <p className="col-md-8 fs-4">{product.price}</p>
                <button type="button" className="btn btn-primary" onClick={console.log("added to cart")}>Add to Cart</button>
            </div>
        </div>
    )
}

export default Product;