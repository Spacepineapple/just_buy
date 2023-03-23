import React, {useEffect, useState } from "react";
import store from "../../store";
import axios from "axios";


function ThankYou() {
    //Create state handler for quote
    const [quote, setQuote] = useState("Loading");

    //Run quote getter on render
    useEffect (() => {
        getData()
    }, []);

    //Get the quote data
    const getData = () => {
        axios
          .get("https://dummyjson.com/quotes/random")
          .then(({ data }) => {
            setQuote(data);
          });
      };
    
    //Clear local storage to remove basket
    localStorage.clear();
    //Empty basket in store
    store.dispatch({ type: 'cart/clearCart', payload: "" })
    return(
    <div className="custom-container">
        <h2>Thank you for your purchase</h2>
        <p>Thank you very much for your purchase. Please look out for an email confirmation which we will send to the email address registered to your account. We very much hope you have enjoyed shopping with us and look forward to seeing you again soon! We'll leave you with this quote: </p>
        <br/>
        <p>"{`${quote.quote}`}" - <em>{`${quote.author}`}</em></p>
    </div>)
}

export default ThankYou;