import React from "react";
import { useState, useEffect } from "react"
import Axios from "axios"
import { matchPath } from "react-router-dom";

function Neutralize() {
  var count =0

  const [listOfItems, setListOfItems] = useState([]);
  const [OrderNumber, setOrderNumber] = useState("");
  const [NumOfItems, setnumOfItems] = useState("");
  const [ProductName, setProductName] = useState("");



  const createCart = () => {
       var randomInt = Math.floor(Math.random() *100)
       var product = "Neutralize"
       var imgUrl = "/neutralize.png"
       let price =21;
       count++;
      Axios.post("http://localhost:3001/createCart",{
          OrderNumber: randomInt,
          NumOfItems: count,
          ProductName: product,
          ProductPrice: price,
          ProductImg: imgUrl
      }).then((response)=>{
          setListOfItems([...listOfItems,  {
              OrderNumber, NumOfItems, ProductName
          }])
          alert("ADDED TO CART");
      });
  };


    return (
      <div id="card">
        <img src="/neutralize.png" alt=""></img>
       <div id="content">
        Neutralize
         <ol>
           <li>Great look</li>
           <li> Good Smell </li>
           <li> Good Feeling </li>
         </ol>
         <div id="price">
         <button> $100</button>
         <button onClick = {createCart}> Add to cart </button>
         </div>
       </div>
     </div>


    );
  }

  export default Neutralize;