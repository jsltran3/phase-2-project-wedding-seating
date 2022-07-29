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
      <div class="float-child">
        <span className="guest-label">Name:</span>
        {name}
      </div>
      <div>
        <span className="guest-label">RSVP Status: </span>
        {attendance}
      </div>
      <div>
      <span className="guest-label">Email: </span>
      {email}
      </div>
      <div>
        <span className="guest-label">Phone: </span>
        {phone}
      </div>
      <div>
        <span className="guest-label">Notes: </span>
        {notes}
      </div>

      <button onClick={handleDeleteClick}>Delete</button>

    </div>

  )
}

export default Guests;