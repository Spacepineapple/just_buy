import React from "react";
import store from "../store";
import { useSelector } from "react-redux";


function removeItem(id) {
    console.log(id);
    store.dispatch({ type: 'cart/productRemoved', payload: id })
    console.log(store.getState());
}

function BasketCard({props}) {
    const products = useSelector(state => state.products);
    //let product = products.find(product => product.id===props.id);
    const reduceProduct = (product) => {
        // Todo: add logic for adding to basket
        store.dispatch({ type: 'cart/productReduced', payload: product.id })
        console.log(store.getState());
        console.log(store);
      };

    const increaseProduct = (product) => {
        store.dispatch({ type: 'cart/productIncreased', payload: product.id })
        console.log(store.getState());
        console.log(store);
    }

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