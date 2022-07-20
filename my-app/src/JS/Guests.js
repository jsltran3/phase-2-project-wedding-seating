import React from "react";

function Guests({ guest, name, onDeleteGuests }) {

  function handleDeleteClick() {
    fetch(`http://localhost:4000/weddingGuests/${name}`, {
      method: "DELETE", 
    })
    .then((resp) => resp.json())
    .then(() => console.log(name));
    // .then(() => onDeleteGuests(guest)) 
  }

  return (
      <ul>
        <li>
          <span>{name}</span>
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