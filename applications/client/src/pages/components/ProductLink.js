import React from "react"
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { useState, useEffect } from "react"
import './ProductCss.css';
import Axios from "axios"



export default function ProductLink() {
  
useEffect(() => {
    Axios.get("http://localhost:3001/getProducts").then((response) => {
        setListOfProducts(response.data)
    })

    Axios.get("http://13.52.100.0/getProducts").then((response) => {
        setListOfProducts(response.data)
    })
  })

  const [listOfProducts, setListOfProducts] = useState([]);



    function Awake() {
        window.location.replace("/Awake");
      }
        
    function Relax() {
        window.location.replace("/relax");
      }
        
    function Neutralize() {
        window.location.replace("/Neutralize");
      }


      function click(redirectName){
        redirect(redirectName);
      }
      function redirect(redirectName){
      {listOfProducts.map((products) => {
       
            if(redirectName == "Awake"){
               Awake();
            }
            if(redirectName == "Relax"){
                Relax();
            }
            if(redirectName == "Neutralize"){
                Neutralize();
            }
    })}
}

    return (
        <><div class="main">
            <div class="title"><h1>Product Page</h1></div>

            {listOfProducts.map((products) => {
                 var redirectName = products.ProductName;
                return (
            <ul class="cards">
                <li class="cards_item">
                    <div class="card">
                        <div class="card_image"><img src={products.ProductImg}></img></div>
                        <div class="card_content">
                            <h2 class="card_title"></h2>
                            <p class="card_text">{products.ProductDescription}</p>
                            <button class = "btn card_btn" onClick={()=>click(redirectName)}>{products.ProductName}</button>
                        </div>
                    </div>
                </li>
            </ul>
             )
            })}
        </div><h3 class="made_by">♡</h3></>
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