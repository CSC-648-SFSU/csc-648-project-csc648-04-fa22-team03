import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from "./pages/About";
import IDK from "./pages/IDK"
import Home from "./pages/Home"
import { Route ,Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">

      <>
        <Navbar />
        <div className='cont'>
          <Routes>
            <Route path="/Home" element={<Home />}/>
            <Route path="/About" element={<About />}/>
            <Route path="/IDK" element={<IDK />}/>
          </Routes>
        </div>
      </>


    </div>
  );
}

export default App;
