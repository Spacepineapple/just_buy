import React from "react";
import { useSelector } from "react-redux";

function calculateSubTotal(arr) {
    let sum = 0;
    let totals = arr.map(item =>item.product.price*item.count)
    totals.forEach(total => sum+=total);
    return sum;
}

function BasketInfo() {
    const products = useSelector(state => state.products);
    const subtotal = calculateSubTotal(products);
    return (
        <>
        <p>Total: £{subtotal}</p>
        </>
    );
}

export default BasketInfo;