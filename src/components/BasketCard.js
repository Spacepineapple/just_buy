import React from "react";
import store from "../store";


function removeItem(id) {
    //Send message to store to remove product
    store.dispatch({ type: 'cart/productRemoved', payload: id })
}

function BasketCard({props}) {
    return (
        <div class="card mb-3" styles="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
            {<img src={props.product.images[0]} class="img-fluid rounded-start" alt={props.description}/>}
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">{props.product.title}</h5>
                <p class="card-text">{props.product.description}</p>
                <p class="card-text">{props.product.price}</p>
                <button onClick={()=>removeItem(props.id)}>Remove</button>
            </div>
            </div>
        </div>
        </div>
    )
}

export default BasketCard;