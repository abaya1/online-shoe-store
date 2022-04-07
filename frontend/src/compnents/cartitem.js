import React from "react";





const Cartitem = (props) =>
{
    console.log(props.shoe)
   
    return <div className="cart-item row">
                <div className="col-2"></div>
                <div className="col-10 container"> 
                    <img src={props.shoe.image} width="100" height="100" className="inline"/> 
                    <div className="inline space">
                        {props.shoe.name} 
                        <br/> 
                        {props.shoe.type}
                    </div>
                    <div className="inline spaced">
                        {props.shoe.price}
                    </div>
                    <hr/>
                </div>
           </div>



}


export default Cartitem