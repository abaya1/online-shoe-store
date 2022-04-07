import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";






const NavBar = (props) =>
{


    const helper = (end) =>
    {
        const last = window.location.href.split("/")[3];
        console.log(last)
        if(last === end)
        {
            return <div className="constant-highlight"></div>
        }
        else
        {
            return <div className="highlight"></div>
        }
    
    }


    return <div className="nav row">
                  <div className="logo col-4"><h4><Link to="/"> RUNAWAY </Link></h4></div>
                  <div className="col-1 category"> <Link to="/Mens" >Mens</Link> {helper('Mens')} </div>
                  <div className="col-1 category"><Link to="/Womens">Womens</Link> {helper('Womens')} </div>
                  <div className="col-1 category"><Link to="/Kids">Kids</Link> {helper('Kids')} </div>
                  <div className="col-1 category"><Link to="/New">Releases</Link> {helper('New')} </div>
                  <div className="col-3 cart"><Link to="/Cart">Cart &ensp;<span className="cart-size">{props.cartsize}</span></Link><i className="fa-solid fa-cart-shopping"> </i></div>

          </div>
}


export default NavBar