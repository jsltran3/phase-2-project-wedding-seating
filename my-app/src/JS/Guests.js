import React from "react";


function Guests({ guest, name, id, attendance, phone, email, notes, onDeleteGuests }) {

  function handleDeleteClick() {
    fetch(`http://localhost:4000/weddingGuests/${id}`, {
      method: "DELETE", 
    })
    .then((resp) => resp.json())
    // .then(() => console.log(id));
    .then(() => onDeleteGuests(id)) 

  
  }

  return (
    <div className="guest-container">
      <div>
        <span className="guest-label">Name:</span>
        {name}
      </div>
  
  

      <span className="guest-label">RSVP Status: </span>
      {attendance}
      <span className="guest-label">Email: </span>
      {email}
      <span className="guest-label">Phone: </span>
      {phone}

      

      <button onClick={handleDeleteClick}>Delete</button>

    </div>

  )
}

export default Guests;