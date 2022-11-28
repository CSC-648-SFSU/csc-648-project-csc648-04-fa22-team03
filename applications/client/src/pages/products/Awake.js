

import React from "react";
import { useState, useEffect } from "react"
import Axios from "axios"
import { matchPath } from "react-router-dom";
import './Products.css'


function Awake() {


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


    const [listOfItems, setListOfItems] = useState([]);
    const [OrderNumber, setOrderNumber] = useState("");
    const [NumOfItems, setnumOfItems] = useState("");
    const [ProductName, setProductName] = useState("");
    const [ProductTime, setProductTime] = useState("");    


    var count =0;


    //using your function (passing in date)
function formatAMPM(date) {
  var d = new Date(),
  minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
  hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
  ampm = d.getHours() >= 12 ? 'pm' : 'am',
  months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
  days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
return days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear()+' '+hours+':'+minutes+ampm;
}


let date = formatAMPM();


    const createCart = () => {
         var awake = "Awake"
         var imgUrl = "/awake.png"
         let price = 420;
         count++;
         let randomInt = makeid(10);
         
        Axios.post("http://localhost:3001/createCart",{
            OrderNumber: randomInt,
            NumOfItems: count,
            ProductName: awake,
            ProductPrice: price,
            ProductImg: imgUrl,
            ProductTime: date
        }).then((response)=>{
            setListOfItems([...listOfItems,  {
                OrderNumber, NumOfItems, ProductName, ProductTime
            }])
            alert("ADDED TO CART");
        });
    };

    function makeid(length) {
      var result           = '';
      var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
  }
  

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
