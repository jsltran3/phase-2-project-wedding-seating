import React from "react"; 
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div>
            <NavLink to="/" exact >Home</NavLink>
            <NavLink to="/GuestPage">Guest Page</NavLink>
            <NavLink to="/About">About</NavLink>
        </div>
    );
}

export default NavBar;