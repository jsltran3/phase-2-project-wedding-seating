import React from "react";

function Guests({ guest, onDeleteGuests }) {

  function handleDeleteClick() {
    fetch("http://localhost:4000/weddingGuests/${guest.id}", {
      method: "DELETE", 
    })
    .then((resp) => resp.json())
    .then(() => onDeleteGuests(guest)) 
  }

  return (
      <div>
          <li>
            <span>{guest.name}</span>
            <span>{guest.attendance}</span>
            <button onClick={handleDeleteClick}>Delete</button>
          </li>
      </div>
  )
}

export default Guests;