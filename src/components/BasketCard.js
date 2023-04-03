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
    if (event.target.value<0) {
        alert("Please input a valid positive number or use the + and - buttons provided");
    }
    else {
        let payload = {id: event.target.name, value: Number(event.target.value)}
        store.dispatch({ type: "cart/productChanged", payload: payload})    
    }
}

function BasketCard({props}) {
    return (
        <div className="basket-card">
        <div className="basket-content">
            <div className="basket-image">
            {<img src={props.product.images[0]} className="img-fluid rounded-start" alt={props.description}/>}
            </div>
            <div className="basket-item">
                <h5 className="card-title">{props.product.title}</h5>
                <p className="card-text">{props.product.description}</p>
                <p className="card-text">£{props.product.price}</p>
            </div>
            <div className="basket-buttons">
                <div className="buttons-div">
                <button onClick={()=>increaseItem(props.product.id)}>+</button>
                <input type="number" id="product-count" name={props.product.id} value={props.count} placeHolder={props.count} onChange={changeItem} onclick={() =>{this.select()}} />
                <button onClick={()=>reduceItem(props.product.id)}>-</button>
                </div>
            </div>
            <div className="remove">
                <button onClick={()=>removeItem(props.product.id)}>Remove</button>
            </div>
        </div>
        </div>
    )
}

export default BasketCard;