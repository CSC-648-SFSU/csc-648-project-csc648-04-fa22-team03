
import "./components/AboutCss.css";
import { Route, Routes } from "react-router-dom"
import AboutLink from "./components/AboutLink";
import Ahmed from "./People/Ahmed";
import Chris from "./People/Chris";
import Ruqaiyah from "./People/Ruqaiyah";
import Aisha from "./People/Aisha";
import Mandy from "./People/Mandy";
import Shahriz from "./People/Shahriz";



export default function About() {

    return (
        <>
            <div className="cont">
                <AboutLink />  
                <Routes>
                    <Route path="/Ahmed" element={<Ahmed />} />
                    <Route path="/Aisha" element={<Aisha />} />
                    <Route path="/Chris" element={<Chris />} />
                    <Route path="/Mandy" element={<Mandy />} />
                    <Route path="/Shahriz" element={<Shahriz />} />
                    <Route path="/Ruqaiyah" element={<Ruqaiyah />} />
                </Routes>
            </div>
        </>
    )
}