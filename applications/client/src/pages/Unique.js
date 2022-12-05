import "./components/UniqueLink.css";
import { Route, Routes } from "react-router-dom"
import UniqueLink from "./components/UniqueLink";



export default function Unique(){

    return (
        <>
            <div className="cont">
            <UniqueLink />  
                <Routes>
                <Route path="/Unique" element={<Unique />} />
                </Routes>
            </div>
        </>   
    )
}