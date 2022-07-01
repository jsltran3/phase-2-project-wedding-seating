import React, { useState, useEffect } from "react"; 
import './App.css';
import NavBar from "./JS/NavBar";
import GuestPage from "./JS/GuestPage.js"; 
import Home from "./JS/Home"
import CreateNewGuest from "./JS/CreateNewGuest";
import { Route, Routes } from "react-router-dom";


function App() {
  // const [guestList, setGuestList] = useState([]);
  // const [selectedCategory, setSelectedCategory] = useState("All");

  // useEffect(() => {
	// 	fetch("http://localhost:4000/wedding_guests")
	// 		.then((resp) => resp.json())
	// 		.then((guestList) => setGuestList(guestList));
	// }, []);

  return (
    <div className="App">
      <NavBar />
      {/* <BrowserRouter> */}
        <Routes>
          <Route path="/GuestPage" element={ <GuestPage/>} />
          <Route exact path="/CreateNewGuest" element={ <CreateNewGuest/> } />
          <Route path="/" element={ <Home/> } />
        </Routes>
      {/* </BrowserRouter> */}
        
          
            {/* // guestList={guestList}
            // setGuestList={setGuestList}
            // category={selectedCategory}
            // setSelectedCategory={setSelectedCategory} */}
    </div>
  );
}

export default App;
