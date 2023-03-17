import React from 'react';

function Shipping() {
    return(
        <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
            <h2 className="display-5 fw-bold">Track Your Order</h2>
            <p className="col-md-8 fs-4">To track your order, simply type your order code and click the button!</p>
            <input type="text" id="orderNumber" name="orderNumber" placeholder="Enter your order number"/>
            <button className="btn btn-primary btn-lg">Track My Order</button>
        </div>
    </div>
    )
}

export default Shipping;