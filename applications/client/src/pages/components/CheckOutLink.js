import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { useState, useEffect } from "react"
import React from "react"
import Axios from "axios"
import "./CheckOut.css"


export default function CheckOutLink() {






//     useEffect(() => {
//     Axios.get("http://localhost:3001/getCart").then((response) => {
//         setListOfItems(response.data)
//     })
// }, []);




function redirect() {
    window.location.replace("/Login");

}




return (
    <div class="wrapper">
    <div class="container">
        <form>
            <h1>
                <i class="fas fa-shipping-fast"></i>
                Shipping Details
            </h1>
            <div class="name">
                <div>
                    <label for="f-name">First</label>
                    <input type="text" name="f-name"></input>
                </div>
                <div>
                    <label for="l-name">Last</label>
                    <input type="text" name="l-name"></input>
                </div>
            </div>
            <div class="street">
                <label for="name">Street</label>
                <input type="text" name="address"></input>
            </div>
            <div class="address-info">
                <div>
                    <label for="city">City</label>
                    <input type="text" name="city"></input>
                </div>
                <div>
                    <label for="state">State</label>
                    <input type="text" name="state"></input>
                </div>
                <div>
                    <label for="zip">Zip</label>
                    <input type="text" name="zip"></input>
                </div>
            </div>
            <h1>
                <i class="far fa-credit-card"></i> Payment Information
            </h1>
            <div class="cc-num">
                <label for="card-num">Credit Card No.</label>
                <input type="text" name="card-num"></input>
            </div>
            <div class="cc-info">
                <div>
                    <label for="card-num">Exp</label>
                    <input type="text" name="expire"></input>
                </div>
                <div>
                    <label for="card-num">CCV</label>
                    <input type="text" name="security"></input>
                </div>
            </div>
            <div class="btns">
               <button> <a href = "/Receipt">Purchase</a></button>
                <button><a href = "/ShoppingCart"> Back to cart</a></button>
            </div>
        </form>
    </div>
</div>
)
}