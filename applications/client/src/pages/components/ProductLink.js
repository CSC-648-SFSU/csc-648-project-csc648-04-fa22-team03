import React from "react"
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import './ProductCss.css';



export default function ProductLink() {
  
    function redirectAwake() {
        window.location.replace("/Awake");
      }
        
    function redirectRelax() {
        window.location.replace("/relax");
      }
        
    function redirectNeutralize() {
        window.location.replace("/Neutralize");
      }

    return (
        <><div class="main">
            <div class="title"><h1>Product Page</h1></div>
            <ul class="cards">
                <li class="cards_item">
                    <div class="card">
                        <div class="card_image"><img src="/awake.png"></img></div>
                        <div class="card_content">
                            <h2 class="card_title"></h2>
                            <p class="card_text">Mitigates the efects of sleep deprivation</p>
                           <button class = "btn card_btn" onClick={redirectAwake}>Awake</button>
                        </div>
                    </div>
                </li>
                <li class="cards_item">
                    <div class="card">
                        <div class="card_image"><img src="https://media.allure.com/photos/614351d3934fb87214166c42/1:1/w_1196,h_1196,c_limit/Yves%20Saint%20Laurent%20Mon%20Paris.jpeg"></img></div>
                        <div class="card_content">
                            <h2 class="card_title"></h2>
                            <p class="card_text">Comforts when around strangers</p>
                            <button class="btn card_btn"onClick={redirectRelax}>Relax</button>
                        </div>
                    </div>
                </li>
                <li class="cards_item">
                    <div class="card">
                        <div class="card_image"><img src="/neutralize.png"></img></div>
                        <div class="card_content">
                            <h2 class="card_title"></h2>
                            <p class="card_text">Neutralize ones own smell</p>
                            <button class="btn card_btn"onClick={redirectNeutralize}>Neutralize</button>
                        </div>
                    </div>
                </li>
                
              
            </ul>
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