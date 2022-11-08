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
      Axios.post("http://localhost:3001/createCart",{
          OrderNumber: randomInt,
          NumOfItems: count,
          ProductName: product,
      }).then((response)=>{
          setListOfItems([...listOfItems,  {
              OrderNumber, NumOfItems, ProductName
          }])
          count ++
          alert("ADDED TO CART");
      });
  };


    return (
      <div class = "container"> 
      <div class ="header">Neutralize</div>
      <div class ="content-large" id ="neutralize">

      </div>
      <div class ="content-small" id = "description"> This will help neutralize your smell to make y ou nice and ordorless!</div>
      <div class ="content-small" id = "cart">
      <button onClick = {createCart}>Add to cart</button>
      </div>

      </div>
    );
  }

  export default Neutralize;