
import "./components/ShoppingCartLink.css";
import { Route, Routes } from "react-router-dom"
import ShoppingCartLink from "./components/ShoppingCartLink";


export default function ShoppingCart() {

    return (
        <>
            <div className="cont">
                <ShoppingCartLink />  
                <Routes>
                </Routes>
            </div>
        </>
    )
}