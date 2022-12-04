import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { useState, useEffect } from "react"
import React from "react"
import Axios from "axios"


export default function ShoppingCartLink() {


    const [OrderNumber, setOrderNumber] = useState("");
    const [NumOfItems, setnumOfItems] = useState("");
    const [ProductName, setProductName] = useState("");
    const [listOfLogin, setListOfLogin] = useState([]);
    const [listOfUsers, setListOfUsers] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');







//     useEffect(() => {
//     Axios.get("http://localhost:3001/getCart").then((response) => {
//         setListOfItems(response.data)
//     })
// }, []);




useEffect(() => {
  Axios.get("http://localhost:3001/getCart").then((response) => {
      setListOfItems(response.data)
  })
  Axios.get("http://localhost:3001/getLogin").then((response) => {
    setListOfLogin(response.data)
})
Axios.get("http://localhost:3001/getUsers").then((response) => {
    setListOfUsers(response.data)
})
})



const [listOfItems, setListOfItems] = useState([]);
let itemPrice = [];

const updateQuantity = (id) => {
  const newQuantity = prompt("Enter new quantity");
  Axios.put("http://localhost:3001/update", { newQuantity: newQuantity, id: id}).then(()=> {
    setListOfItems(listOfItems.map((cart)=> {
      return cart._id == id ? {_id: id, ProductName: ProductName, NumOfItems: newQuantity} : cart
    }))
  });
}

let total =0;
let itemQuantity =0;

const deleteProduct = (productId) => {
  Axios.delete(`http://localhost:3001/delete/${productId}`).then(() =>{
  setListOfItems(
    listOfItems.filter((cart) => {
    return cart._id != productId;
  })
  );
});
};

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

let loginEmail = [];
let loginPassword = [];
{listOfLogin.map((login) => {
  loginEmail = login.email;
  loginPassword = login.password;
})
}
let userEmail = [];
let userPassword = [];

{listOfUsers.map((user) => {
  userEmail = user.email;
  userPassword = user.password;
})
}
function redirectCheckOut() {
  if(userEmail == loginEmail && userPassword == loginPassword){
      window.location.replace("/CheckOut");
  } else {
    prompt("Please Login");
  }
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
            <td><button onClick={() => {updateQuantity(cart._id)}}><input type="number" value={cart.NumOfItems} min="0" max="99" class="qtyinput"></input></button></td>
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
            <td colspan="5" class="checkout"><button onClick ={redirectCheckOut} id="submitbtn">Checkout Now!</button></td>
          </tr>
      </table>
    </div>
  </div>
</body>


        
)
}