import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { useState, useEffect } from "react"
import React from "react"
import Axios from "axios"


export default function OrdersLink() {

const [listOfItems, setListOfItems] = useState([]);


useEffect(() => {
    Axios.get("http://localhost:3001/getCart").then((response) => {
        setListOfItems(response.data)
    })
  })



return (
    <><h1>Orders Page</h1><table class="rwd-table">
        <tr>
            <th>REFERENCE NUMBER</th>
            <th>DATE</th>
            <th>TOTAL</th>
            <th>STATUS</th>
            <th></th>
        </tr>
        {listOfItems.map((cart) => {
        
                return (
        <tr>
            <td data-th="REFERENCE NUMBER"> {cart.OrderNumber}</td>
            <td data-th="DATE">{cart.ProductTime} <span class="time"></span> </td>
            <td data-th="TOTAL">${cart.ProductPrice}</td>
            <td data-th="STATUS">Processing</td>
        </tr>
         )
        })}

    </table><p>&larr; Drag window (in editor or full page view) to see the effect. &rarr;</p></>


        
)
}