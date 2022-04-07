import React from "react";
import Product from "./product";



const Featured = (props) =>
{

    return <div className="feature">
                <div className="row"><div className="col-12 popular"><h3>Popular Right Now</h3></div></div>
                <div className="row" >
                    <div className="col-2"> </div>
                    <div className="col-2"> <Product getitem="getfeature1"  getitems={props.getitems} /> </div>
                    <div className="col-1"> </div>
                    <div className="col-2"> <Product getitem="getfeature2"  getitems={props.getitems} /> </div>
                    <div className="col-1"> </div>
                    <div className="col-2"> <Product getitem="getfeature3"  getitems={props.getitems} /> </div>
                </div>
          </div>
}


export default Featured