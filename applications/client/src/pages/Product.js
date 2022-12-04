
import "./components/ProductCss.css";
import { Route, Routes } from "react-router-dom"
import ProductLink from "./components/ProductLink";
import Awake from "./products/Awake";




export default function Product() {
    return (
        <>
            <div className="cont">
                <ProductLink />  
                <Routes>
                <Route path="/Awake" element={<Awake />} />
                </Routes>
            </div>
        </>
    )
}