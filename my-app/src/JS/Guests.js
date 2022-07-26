import React from "react";
import styled from 'styled-components'

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
          <button onClick={handleDeleteClick}>Delete</button>

        </li>
      </ul>

  )
}

export default Guests;