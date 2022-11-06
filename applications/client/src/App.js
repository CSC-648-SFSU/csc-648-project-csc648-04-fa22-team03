import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from "./pages/About";
import IDK from "./pages/IDK"
import Product from "./pages/Product"
import Home from "./pages/Home"
import { Route, Routes } from 'react-router-dom';
import Ahmed from "./pages/People/Ahmed";
import Chris from "./pages/People/Chris";
import Ruqaiyah from "./pages/People/Ruqaiyah";
import Aisha from "./pages/People/Aisha";
import Mandy from "./pages/People/Mandy";
import Shahriz from "./pages/People/Shahriz";
import Awake from './pages/products/Awake';
import Login from './pages/Login';
import Signup from './pages/Signup';





function App() {
  return (
    <div className="App">

      <>
        <Navbar />
        <div className='cont'>
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/About/*" element={<About />} />
            <Route path="/Product/*" element={<Product />} />
            <Route path="/IDK" element={<IDK />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
          </Routes>
        </div>
        <div className="cont">
          <Routes>
          <Route path="/Awake" element={<Awake />} />
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
