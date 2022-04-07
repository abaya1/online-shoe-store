import React from "react";
import titleimage from '../images/titleshoes.jpeg'

const TitleCard = () =>
{
    return <div className="titlecard">
        <img src={titleimage}/>
        <div className="slogan">
              <h1>Shoes to run <br/> away in</h1>
              <button className="call"> SHOP NOW </button>
        </div>



          </div>
}


export default TitleCard