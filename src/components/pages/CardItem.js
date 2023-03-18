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
  {/* <img className="card-img-top" src={props.product[0].images[0]} alt="Card image cap"/> */}
  <div className="card-body">
    <h5 className="card-title">Brand</h5>
    <p className="card-text">title</p>
    <h6>price</h6>
    <p>rating</p>
    <div className="card text-center">
    <a href="#" className="btn btn-primary">Add to Cart</a>
    </div>
  </div>
</div>
    )
}