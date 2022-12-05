import { Link, useMatch, useResolvedPath } from "react-router-dom"
import Axios from "axios"
import { useState, useEffect } from "react"
import './UniqueLink.css';





// document.addEventListener('DOMContentLoaded', function () {

    
//  });
 





export default function UniqueLink() {
    
    



    function delay() {
        var randomNumber=Math.round((Math.random() * 3));
        console.log(randomNumber);
        redirect(randomNumber);
        }

      
    function redirect(randomNumber) {
        if(randomNumber ==1){
            window.location.replace("/Awake");
        } if(randomNumber == 2){
            window.location.replace("/Neutralize");
        }if(randomNumber == 3){
            window.location.replace("/relax");
        }
    }



    return (
        <html lang="en" dir="ltr">
        <body  >
        <div class="spinner">
  <div class="spinner__body"></div>
  <button class="spinner__start-button" onClick={delay}>GO!</button>
  <input type="number" min="0" max="999" class="spinner__input" value="3"></input>
  <div class="spinner__plate">
    <div class="spinner__item spinner__item--top">1</div>
    <div class="spinner__item spinner__item--right">2</div>
    <div class="spinner__item spinner__item--bottom">3</div>
    <div class="spinner__item spinner__item--left">4</div>
  </div>
</div>
        </body>
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
