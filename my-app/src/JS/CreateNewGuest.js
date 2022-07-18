import React, { useState } from "react";

function CreateNewGuest({ onAddGuest }) {
	const [formInput, setFormInput] = useState({
		name:"",
		email:"",
		phone:"",
		notes:""
	})
	const [attendance, setAttendance] = useState("")

	function handleChange(event) {
		setFormInput({
			...formInput,
			[event.target.name]: event.target.value})
	}


	function handleSubmit(event) {
		event.preventDefault();
		// console.log(event.target.value);
		// console.log("name", formInput.name)
		// console.log("email", formInput.email)
		// console.log("phone", formInput.phone)
		// console.log("notes", formInput.notes)
		onAddGuest(formInput)

		setFormInput({
			name:"",
			email:"", 
			phone:"", 
			notes:""
		})

		setAttendance({attendance:""})
	
		fetch("http://localhost:4000/weddingGuests", {
			method: "POST", 
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json"
			}, 
			body: JSON.stringify( formInput ), 
		})
			.then((resp) => resp.json())
			.then((newGuest) => onAddGuest(newGuest));
	}

	return (

		<div>

			<button type="button">
				Go back
			</button>
			<h2>New Guest</h2>
			<form onSubmit={handleSubmit}>
				<label>
					Name:
					<input 
						type="text" 
						name="name" 
						value={formInput.name}
						onChange={handleChange}
					/>
				</label>
				<label>
					Email:
					<input 
						type="text" 
						name="email" 
						value={formInput.email} 
						onChange={handleChange}
					/>
				</label>
				<label>
					Phone Number:
					<input 
						type="text" 
						name="phone" 
						value={formInput.phone} 
						onChange={handleChange}
					/>
				</label>
				<label>
					Notes:
					<input 
						type="text" 
						name="notes" 
						value={formInput.notes} 
						onChange={handleChange}
					/>
				</label>
				<button type="submit">Submit</button>
			</form>

			<select 
				name="attendance" 
				value={attendance}
				onChange={(e) => setAttendance(e.target.value)}
			>
                <option value="Not Invited">Not Invited</option>
                <option value="Invited">Invited</option>
                <option value="Attending">Attending</option>
                <option value="Declined">Declined</option>
            </select>
		</div>
	)
}

export default CreateNewGuest;