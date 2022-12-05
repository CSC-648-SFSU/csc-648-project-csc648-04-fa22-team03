import React from "react"
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { useState, useEffect } from "react"
import './ReceiptLink.css';
import Axios from "axios"



export default function ReceiptLink() {

    useEffect(() => {
        Axios.get("http://localhost:3001/getCart").then((response) => {
            setListOfItems(response.data)
        })
    }, []);
    let itemPrice = [];
    let total =0;
    let itemQuantity =0;

    const [listOfItems, setListOfItems] = useState([]);
    
 let actualItemPrice = [];
 {listOfItems.map((cart) => {
 
     itemQuantity = parseInt(cart.NumOfItems);
     itemPrice = parseInt(cart.ProductPrice);
     actualItemPrice =parseInt(cart.ProductPrice);
 
     total += itemPrice;
 
     if(itemQuantity > 1){
      total = total * itemQuantity;
      
     }
 })
 }




    return (
        <html lang="en" dir="ltr">
<div class="container">
  <div class="receipt">
    <h2 class="receipt__title">Thank you.</h2>
    <p class="receipt__subtitle">Your order is on its way. Here is your receipt:</p>
    {listOfItems.map((cart) => {
                return (
    <ul class="receipt__lines">
      <li class="receipt__line">
        <span class="receipt__line__item">{cart.ProductName}</span>
        <span class="receipt__line__price">${cart.ProductPrice}</span>  
      </li>
    </ul>
   )
})}
    <p class="receipt__total">
      <span class="receipt__total__item">Total</span>
      <span class="receipt__total__price">${total}</span>
    </p>
    <p class="receipt__back">
      <a href="/Orders">View Order History</a>
    </p>
  </div>
</div>
        </html>
        

    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}
