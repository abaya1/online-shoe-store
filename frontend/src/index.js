import React from 'react';
import { useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Landing from './compnents/Pagelanding';
import Mens from './compnents/Pagemens'
import Womens from './compnents/Pagewomens'
import Kids from './compnents/Pagekids'
import Check from './compnents/PageCheckout'
import Cart from './compnents/Pagecart';
import NavBar from './compnents/navbar';
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import axios from 'axios'








const App = () =>
{
    const [cart, setcart] = useState([]);

    const addtocart = (cartitem) =>
    {
        const newcart = [cartitem, ...cart];
   
        setcart(newcart);

        console.log(newcart);
   
    }
   
    const getitems = (thing) => //callback
    {
       addtocart(thing)
    }


    
    axios.get('/api').then( res => console.log(res));


    

    return<BrowserRouter>
            <NavBar cartsize={cart.length}/>
            <Routes>
                <Route path="/" element={<Landing getitems={getitems}/>}></Route>
                <Route path="Mens" element={<Mens/>}></Route>
                <Route path="Womens" element={<Womens/>}></Route>
                <Route path="Kids" element={<Kids/>}></Route>
                <Route path="Cart" element={<Cart cart={cart} cartsize={cart.length}/>}></Route>
                <Route path="Checkout" element={<Check/>}></Route>
           </Routes>
         </BrowserRouter>

}


ReactDOM.render(<App/> , document.querySelector('#root'));