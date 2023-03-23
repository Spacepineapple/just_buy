import React from 'react';
import items from "../../items.json"


export default function ShoppingCart({props}) {

    return(<>
  
        <div className="container"> 
</div>

<div className="modal fade" id="cartModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header border-bottom-0">
        <h5 className="modal-title" id="exampleModalLabel">
          Your Shopping Cart
        </h5>
        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <table className="table table-image">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Qty</th>
              <th scope="col">Total</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
          {/* {items.map(item => (
      item.inCart ? ( */}
        <tr>
              
              <td className="w-25">
                <img src={props.product.images[0]}/>
              </td>
              <td>{props.product.title}</td>
              <td>{props.product.price}</td>
              <td className="qty"><input type="text" className="form-control" id="input1" /></td>
              <td>178$</td>
              <td>
                <a href="#" className="btn btn-danger btn-sm">
                  Remove
                  <i className="fa fa-times"></i>
                </a>
              </td>
            </tr>
            {/* </tr>) : <></> */}


      
    {/* ))} */}
            
          </tbody>
        </table> 
        <div className="d-flex justify-content-end">
          <h5>Total: <span className="price text-success">89$</span></h5>
        </div>
      </div>
      <div className="modal-footer border-top-0 d-flex justify-content-between">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-success">Checkout</button>
      </div>
    </div>
  </div>
</div>
</>
    )
}