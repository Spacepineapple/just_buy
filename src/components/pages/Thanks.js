import React, {useEffect, useState } from "react";
import store from "../../store";
import axios from "axios";


function ThankYou() {
    const [quote, setQuote] = useState("Loading");

    useEffect (() => {
        getData()
    }, []);

    const getData = () => {
        axios
          .get("https://dummyjson.com/quotes/random")
          .then(({ data }) => {
            setQuote(data);
            console.log(data);
          });
      };
    
    localStorage.clear();
    store.dispatch({ type: 'cart/clearCart', payload: "" })
    return(
    <div>
        <h2>Thank you for your purchase</h2>
        <p>Thank you very much for your purchase. Please look out for an email confirmation which we will send to the email address registered to your account. We very much hope you have enjoyed shopping with us and look forward to seeing you again soon! We'll leave you with this quote: </p>
        <br/>
        <p>"{`${quote.quote}`}" - <em>{`${quote.author}`}</em></p>
    </div>)
}

export default ThankYou;