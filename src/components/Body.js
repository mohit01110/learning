import React from "react";
import Card from "./Card";
import "../styles/body.css";
import product from "../mockdata/product";

function Body() {

  console.log(product);
  return (
    <div className="box">
      <h4>Best Mobile</h4>
      {
        product.length!==0 ?  
        product.map((element)=>(
          <Card element ={element} />

        ))
        
        : <div> No Data </div>


      }
      {/* <Card/> */}
    </div>
  );
}

export default Body;
