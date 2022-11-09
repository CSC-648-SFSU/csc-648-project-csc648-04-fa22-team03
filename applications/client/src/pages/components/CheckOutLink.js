import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { useState, useEffect } from "react"
import React from "react"
import Axios from "axios"
import "./CheckOut.css"


export default function CheckOutLink() {


    const [OrderNumber, setOrderNumber] = useState("");
    const [NumOfItems, setnumOfItems] = useState("");
    const [ProductName, setProductName] = useState("");




//     useEffect(() => {
//     Axios.get("http://localhost:3001/getCart").then((response) => {
//         setListOfItems(response.data)
//     })
// }, []);


useEffect(() => {
  Axios.get("http://localhost:3001/getCart").then((response) => {
      setListOfItems(response.data)
  })
})
const [listOfItems, setListOfItems] = useState([]);
let itemPrice = [];


let total =0;

{listOfItems.map((cart) => {

    itemPrice = parseInt(cart.ProductPrice);
    total += itemPrice;
  
})}

return (
<body>
 <div>
    Checkout
 </div>
</body>

        
)
}