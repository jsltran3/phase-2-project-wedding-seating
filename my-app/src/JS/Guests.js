import React from "react";

function Guests({ guest, name, id, onDeleteGuests }) {

  function handleDeleteClick() {
    fetch(`http://localhost:4000/weddingGuests/${id}`, {
      method: "DELETE", 
    })
    .then((resp) => resp.json())
    // .then(() => console.log(id));
    .then(() => onDeleteGuests(id)) 

  
  }

  return (
      <ul>
        <li>
          <span>{name}</span>
          {/* <button onClick={event => handleDeleteClick(event)}>Delete</button> */}
          <button onClick={handleDeleteClick}>Delete</button>
          {/* <span>{guests.attendance}</span>
          <button onClick={handleDeleteClick}>Delete</button> */}
          {/* {guestCards.map((guest) => (
            guest.name
          ))} */}
        </li>
      </ul>

  )
}

export default Guests;