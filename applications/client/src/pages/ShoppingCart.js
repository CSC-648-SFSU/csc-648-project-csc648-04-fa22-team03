
import "./components/ShoppingCartLink.css";
import { Route, Routes } from "react-router-dom"
import ShoppingCartLink from "./components/ShoppingCartLink";
import CheckOut from "./components/CheckOutLink";



export default function ShoppingCart() {

    return (
        <>
            <div className="cont">
                <ShoppingCartLink />  
                <Routes>
                <Route path="/CheckOut" element={<CheckOut />} />
                </Routes>
            </div>
        </>
    )
}