
import "./components/OrdersLink.css";
import { Route, Routes } from "react-router-dom"
import OrdersLink from "./components/OrdersLink";




export default function UserOrders() {

    return (
        <>
            <div className="cont">
                <OrdersLink />  
                <Routes>
                </Routes>
            </div>
        </>
    )
}