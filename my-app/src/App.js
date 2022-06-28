import React, { useState } from "react"; 
import './App.css';
import NavBar from "./JS/NavBar";
import GuestPage from "./JS/GuestPage.js"; 
import Home from "./JS/Home"
import { Route, Switch } from "react-router-dom";


function App() {


  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/GuestPage">
          <GuestPage />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
