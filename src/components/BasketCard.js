import React from "react";
import {store} from "../store";


function removeItem(id) {
    //Send message to store to remove product
    store.dispatch({ type: 'cart/productRemoved', payload: id })
}

function BasketCard({props}) {
    return (
        <div className="card mb-3" styles="max-width: 540px;">
        <div className="row g-0">
            <div className="col-md-4">
            {<img src={props.product.images[0]} className="img-fluid rounded-start" alt={props.description}/>}
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">{props.product.title}</h5>
                <p className="card-text">{props.product.description}</p>
                <p className="card-text">{props.product.price}</p>
                <button onClick={()=>removeItem(props.id)}>Remove</button>
            </div>
            </div>
        </div>
        </div>
    )
}

export default BasketCard;