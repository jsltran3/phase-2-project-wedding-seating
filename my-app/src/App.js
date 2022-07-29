import React from "react"; 
import './App.css';
import NavBar from "./JS/NavBar";
import GuestPage from "./JS/GuestPage.js"; 
import Home from "./JS/Home"
import WeddingTips from "./JS/WeddingTips"
import { Route, Routes } from "react-router-dom";


function App() {

  return (
    <div className="App">
      <NavBar />
        <Routes>
          <Route path="/GuestPage" element={ <GuestPage/> } />
          <Route path="/" element={ <Home/> } />
          <Route path="/WeddingTips" element={ <WeddingTips/> } />
        </Routes>
    </div>
  );
}

export default App;