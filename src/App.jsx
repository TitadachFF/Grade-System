import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
       <BrowserRouter>
 
      <Navbar />
      <Routes>
 
         <Route path="/SignIn" element={<SignIn />} />

       </Routes>
      <Home/>
      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
