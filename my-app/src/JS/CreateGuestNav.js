import React from "react";
import { NavLink } from "react-router-dom"

function CreateGuestNav() {
    return (
        <NavLink to="/CreateNewGuest" >
            <button type="button">
                Add New Guest
            </button>
        </NavLink>
    )
}

export default CreateGuestNav; 