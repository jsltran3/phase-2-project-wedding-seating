import React, { useEffect } from "react";

function Guests({ guests }) {

  // const display = function displayGuest() {
  //   console.log({guests})
  // }
  //needa know what page i'm on 
  useEffect(
      () => {
          console.log("This is the guest page")
      }
  );

  console.log("Component rendering");
  return (
      <div>
          <li>
            <span>{guests.name}</span>
            <span>{guests.attendance}</span>
          </li>
      </div>
  )
}

export default Guests;