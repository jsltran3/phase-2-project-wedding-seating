import React from "react"; 
import { NavLink } from "react-router-dom";


function NavBar() {
    
    return (
        <div className="navbar">
            <p>
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/GuestPage">Guest Page</NavLink>
            <NavLink to="/WeddingTips">Wedding Tips</NavLink>
            </p>
            

        </div>
    );
}

export default NavBar;