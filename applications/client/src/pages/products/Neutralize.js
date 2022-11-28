import React from "react";
import { useState, useEffect } from "react"
import Axios from "axios"
import { matchPath } from "react-router-dom";
import Awake from './Awake';


function Neutralize() {
  var count =0

  const [listOfItems, setListOfItems] = useState([]);
  const [OrderNumber, setOrderNumber] = useState("");
  const [NumOfItems, setnumOfItems] = useState("");
  const [ProductName, setProductName] = useState("");
  const [ProductTime, setProductTime] = useState("");    

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

function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

let date = formatAMPM();




  const createCart = () => {
    let randomInt = makeid(10);
    var product = "Neutralize"
       var imgUrl = "/neutralize.png"
       let price =21;
       count++;
      Axios.post("http://localhost:3001/createCart",{
          OrderNumber: randomInt,
          NumOfItems: count,
          ProductName: product,
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