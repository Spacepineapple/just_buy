import React from "react";

let queryUrl = 'https://dummyjson.com/products/category/mens-shirts'

fetch(queryUrl)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
    })

export default function CardItem(props) {

    return(
    <div className="card" style={{width: "18rem"}}>
  <img className="card-img-top" src={props.product[0].images[0]} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    )
}