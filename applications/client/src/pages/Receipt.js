import "./components/ReceiptLink.css";
import { Route, Routes } from "react-router-dom"
import ReceiptLink from "./components/ReceiptLink";



export default function userReceipt(){

    return (
        <>
            <div className="cont">
            <ReceiptLink />  
                <Routes>
                <Route path="/Receipt" element={<ReceiptLink />} />
                </Routes>
            </div>
        </>   
    )
}