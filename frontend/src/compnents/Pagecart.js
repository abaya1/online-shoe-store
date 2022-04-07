import Cartitem from "./cartitem";
import CheckoutForm from "./CheckoutForm";
import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import axios from "axios";
//import "/style.css";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe("pk_test_51Kle2wIQT4mcOofEglOjB4WA1bV7Ps6kdhqplPIlp58FMrD6dgaw8DePoXLR1JO2W7VWT0AQ1tDrWOYsZ2goAGsa00V6BoaI7M");



const Cart = (props) =>
{
    const [clientSecret, setClientSecret] = useState("");
    
    var jsonObj = {};
    for (var i = 0 ; i < props.cart.length; i++) 
    {
          jsonObj["position" + (i + 1)] = props.cart[i];
    }

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [jsonObj] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };


    const showitems = () =>
    {
        if(props.cartsize == 0)
        {
            return <div> <h6>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Cart is empty</h6></div>;
        }
        else
        {
            const list = props.cart.map((item) =>  <Cartitem shoe={item}/> )
            return list;        
        }
    }

    const findTotal = () =>
    {
        var total = 0;
        for(var i = 0; i < props.cartsize; i++)
        {
            total += parseInt(props.cart[i].price.split('$')[1]);
        }

        axios.post('/postprice', {
            price: total,
          })

        return total;
    }

    return <div className="cart-page">
                <div className="row">
                    <div className="col-6 popular">
                        <h3> &emsp; &emsp; Cart</h3>
                        {showitems()}
                       <h3>&emsp; &emsp; Total: ${findTotal()}  </h3>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-4 popular">
                    <div className="App">
                        {clientSecret && (
                             <Elements options={options} stripe={stripePromise}>
                                <CheckoutForm />
                            </Elements>
                        )}
                     </div>
                    </div>
                </div>
          </div>



}


export default Cart