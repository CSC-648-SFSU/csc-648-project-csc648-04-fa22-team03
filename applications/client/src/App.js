import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from "./pages/About";
import IDK from "./pages/IDK"
import Home from "./pages/Home"
import { Route, Routes } from 'react-router-dom';
import Ahmed from "./pages/People/Ahmed";
import Chris from "./pages/People/Chris";
import Ruqaiyah from "./pages/People/Ruqaiyah";
import Aisha from "./pages/People/Aisha";
import Mandy from "./pages/People/Mandy";
import Shahriz from "./pages/People/Shahriz";



function App() {
  return (
    <div className="App">

      <>
        <Navbar />
        <div className='cont'>
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/About/*" element={<About />} />
            <Route path="/IDK" element={<IDK />} />
          </Routes>
        </div>
        <div className="cont">
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
    </div>
  );
}

export default App;
