import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { useState, useEffect } from "react"
import React from "react"
import Axios from "axios"


export default function ShoppingCartLink() {



    const [listOfItems, setListOfItems] = useState([]);
    const [OrderNumber, setOrderNumber] = useState("");
    const [NumOfItems, setnumOfItems] = useState("");
    const [ProductName, setProductName] = useState("");


    useEffect(() => {
    Axios.get("http://localhost:3001/getCart").then((response) => {
        setListOfItems(response.data)
    })
}, []);



return (
    <div className="IDK">
        <div className="userDisplay"> 
            {listOfItems.map((cart) => {
                return (
                    <div>
                        <h1>
                            shopping cart
                        </h1>
                        <br></br>
                        <h1>OrderNumber: {cart.OrderNumber}</h1>
                        <h1>NumOfItems: {cart.NumOfItems}</h1>
                        <h1>ProductName: {cart.ProductName}</h1>
                        <h1>--------------------------------</h1>
                    </div>
                )
            })}
       
        </div>
        </div>

        
)
}