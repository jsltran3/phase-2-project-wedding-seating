import React from "react"; 
import { NavLink } from "react-router-dom";


function NavBar() {
    
    return (
        <div className="navbar">
            <a>
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/GuestPage">Guest Page</NavLink>
            <NavLink to="/WeddingTips">Wedding Tips</NavLink>
            </a>
            

        </div>
    );
}

export default NavBar;