import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios'


/* useEffect(() =>  async () =>
{
    const item = await axios.get(`/${props.getitem}`)
    console.log(item.data);
    console.log("run");
    setshoe(item.data);
    
}, [] );*/


const Product = (props) =>
{
    const [shoe, setshoe] = useState('');


    useEffect(async () => 
    {
            const item = await axios.get(`/${props.getitem}`);
            console.log(item.data);
            console.log("run");
            setshoe(item.data);
        
    }, [props.getitem]);
    

    

    return <div className="product">
                <img src={shoe.image} width="250" height="250"></img>
                 <div className="productName">{shoe.name}</div>
                 <div className="productType">{shoe.type}</div>
                <div className="productPrice">{shoe.price}</div>
                <button className="call" onClick={() => props.getitems(shoe)}>add to cart</button>
          </div>



}


export default Product