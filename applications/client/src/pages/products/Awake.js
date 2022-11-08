

import React from "react";
import { useState, useEffect } from "react"
import Axios from "axios"
import { matchPath } from "react-router-dom";
import './Products.css'


function Awake() {
    var productId = 123


    var name = 'awaken'

    // const createUser = () => {
    //     Axios.post("http://localhost:3001/createUser",{
    //         name: "chris",
    //         age: 32,
    //         username: 123,
    //         sID: 32323,
    //         password: 32332,
    //         gl: 32231321,
    //         email: "321312",
    //     }).then((response)=>{
    //         alert("User CREATED");
    //     });
    // };

    var count =0

    const [listOfItems, setListOfItems] = useState([]);
    const [OrderNumber, setOrderNumber] = useState("");
    const [NumOfItems, setnumOfItems] = useState("");
    const [ProductName, setProductName] = useState("");



    const createCart = () => {
         var randomInt = Math.floor(Math.random() *100)
         var awake = "awake"
        Axios.post("http://localhost:3001/createCart",{
            OrderNumber: randomInt,
            NumOfItems: count,
            ProductName: awake,
        }).then((response)=>{
            setListOfItems([...listOfItems,  {
                OrderNumber, NumOfItems, ProductName
            }])
            count ++
            alert("ADDED TO CART");
        });
    };

    return (

        <div id="card">
        <img src="/awake.png" alt=""></img>
       <div id="content">
        Awake
         <ol>
           <li>Great look</li>
           <li> Good Smell </li>
           <li> Good Feeling </li>
         </ol>
         <div id="price">
         <button> $69 </button>
         <button onClick = {createCart}> Add to cart </button>
         </div>
       </div>
     </div>


    );
  }
export default Awake;
