import {Route,Routes} from "react-router-dom";
import Main from "./pages/Main";
import Currencies from "./pages/Currencies";
import Navbar from "./components/Navbar";
import Price from "./pages/Price";
import './App.css'

function App() {
  console.log(import.meta.env.VITE_API_KEY);
   // We will use the Route component, path attribute, and element attribute to specify each route.
   
  
  return (
    <>
    <Navbar />
      <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/currencies" element={<Currencies/>} />
      <Route path="/price/:symbol" element={<Price/>} />


      </Routes>
    </>
  );
}

export default App
