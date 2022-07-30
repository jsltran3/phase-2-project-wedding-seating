import React, { useState } from "react";

function CreateNewGuest({ onAddGuest }) {
  const [attendance, setAttendance] = useState("Invited");
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    phone: "",
    notes: ""
  });

  function handleFormInputChange(event) {
    setFormInput({
      ...formInput,
      [event.target.name]: event.target.value
    });
  }

  function handleRsvpChange(event) {
    setAttendance(event.target.value);
  }

	function handleSubmit(event) {
		event.preventDefault();
		const newGuestInfo = ({
			name: formInput.name, 
			attendance: attendance,
			email: formInput.email,
			phone: formInput.phone,
			notes: formInput.notes
		})
	
		fetch("http://localhost:4000/weddingGuests", {
			method: "POST", 
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json"
			},
			body: JSON.stringify( newGuestInfo )
		})
			.then((resp) => resp.json())
			.then((newGuest) => onAddGuest(newGuest))

					setFormInput({
			name: "",
      attendance: "Invited",
			email: "",
			phone: "",
			notes: ""
					})
		
	}


  
			
  return (
    <div>
  
      <h2>New Guest</h2>
      <div>
      <form className="text-input" onSubmit={handleSubmit}>
        <label className="input-box">
          Name:
          <input
						id="name"
            type="name"
            name="name"
            value={formInput.name}
            onChange={handleFormInputChange}
          />
        </label>
        <label>
          Email:
          <input
						id="email"
            type="email"
            name="email"
            value={formInput.email}
            onChange={handleFormInputChange}
          />
        </label>
        <label>
          Phone Number:
          <input
						id="phone"
            type="phone"
            name="phone"
            value={formInput.phone}
            onChange={handleFormInputChange}
          />
        </label>
        <label>
          Notes:
          <input
						id="notes"
            type="notes"
            name="notes"
            value={formInput.notes}
            onChange={handleFormInputChange}
          />
        </label>
          {/* <Button type="submit">Normal</Button>
          <Button primary type="submit">Primary</Button> */}
        <button type="submit">Submit</button>
        <select name="attendance" value={attendance} onChange={handleRsvpChange}>
        <option value="Not Invited">Not Invited</option>
        <option value="Invited">Invited</option>
        <option value="Attending">Attending</option>
        <option value="Declined">Declined</option>
      </select>
      </form>


      </div>
    </div>
  );
}

export default CreateNewGuest;