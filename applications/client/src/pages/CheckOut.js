import "./components/CheckOut.css";
import { Route, Routes } from "react-router-dom"
import CheckOutLink from "./components/CheckOutLink";
import Orders from "./components/OrdersLink";





export default function CheckOut(){

    return (
        <>
            <div className="cont">
                <CheckOutLink />  
                <Routes>
                <Route path="/Orders" element={<Orders />} />
                </Routes>
            </div>
        </>   
    )
}