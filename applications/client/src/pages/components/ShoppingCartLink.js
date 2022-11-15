import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { useState, useEffect } from "react"
import React from "react"
import Axios from "axios"


export default function ShoppingCartLink() {


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

const deleteProduct = (productId) => {
  Axios.delete(`http://localhost:3001/delete/${productId}`).then(() =>{
  setListOfItems(
    listOfItems.filter((cart) => {
    return cart._id != productId;
  })
  );
});
};

{listOfItems.map((cart) => {

    itemPrice = parseInt(cart.ProductPrice);
    total += itemPrice;


})
}

return (
<body>
  <div id="w">
    <header id="title">
      <h1>Fragrance Shopping Cart</h1>
    </header>
    <div id="page">
      <table id="cart">
        <thead>
          <tr>
            <th class="first">Photo</th>
            <th class="second">Qty</th>
            <th class="third">Product</th>
            <th class="fourth">Line Total</th>
            <th class="fifth">&nbsp;</th>
          </tr>
        </thead>
        {listOfItems.map((cart) => {
                return (
        <tbody>
          <tr class="productitm">
            <td><img src={cart.ProductImg} class="thumb"></img></td>
            <td><input type="number" value={cart.NumOfItems} min="0" max="99" class="qtyinput"></input></td>
            <td>{cart.ProductName}</td>
            <td>${cart.ProductPrice}</td>
            <td><button onClick={() => {deleteProduct(cart._id)}}><span class="remove"><img src="https://i.imgur.com/h1ldGRr.png" alt="X"></img></span></button></td>
          </tr>
        </tbody>
                )
      })}
       <tr class="totalprice">
            <td class="light">Total:</td>
            <td colspan="2">&nbsp;</td>
            <td colspan="2"><span class="thick">${total}</span></td>
          </tr>
        <tr class="checkoutrow">
            <td colspan="5" class="checkout"><button id="submitbtn">Checkout Now!</button></td>
          </tr>
      </table>
    </div>
  </div>
</body>

        
)
}