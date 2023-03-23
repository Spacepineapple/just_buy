import React from "react";
import store from "../../store";

function ThankYou() {
    localStorage.clear();
    store.dispatch({ type: 'cart/clearCart', payload: "" })
    return(
    <div>
        <h2>Thank you for your purchase</h2>
        <p>Thank you very much for your purchase. Please look out for an email confirmation which we will send to the email address registered to your account. We very much hope you have enjoyed shopping with us and look forward to seeing you again soon!</p>
    </div>)
}

export default ThankYou;