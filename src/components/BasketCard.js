import React from "react";
import {store} from "../store";

function removeItem(id) {
    //Send message to store to remove product
    console.log(id);
    store.dispatch({ type: "cart/productRemoved", payload: id })
}

function increaseItem(id) {
    console.log(id);
    store.dispatch({ type: "cart/productIncreased", payload: id})
}

function reduceItem(id) {
    console.log(id);
    store.dispatch({ type: "cart/productReduced", payload: id})
}

function changeItem(event) {
    let payload = {id: event.target.name, value: event.target.value}
    store.dispatch({ type: "cart/productChanged", payload: payload})
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
                <button onClick={()=>removeItem(props.product.id)}>Remove</button>
                <br/>
                <div className="buttons-div">
                <button onClick={()=>increaseItem(props.product.id)}>+</button>
                <input type="number" id="product-count" name={props.product.id} value={props.count} placeHolder={props.count} onChange={changeItem}/>
                <button onClick={()=>reduceItem(props.product.id)}>-</button>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default BasketCard;