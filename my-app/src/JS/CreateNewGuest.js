import React, { useState } from "react";
import { Link } from "react"
import { useNavigate } from "react-router-dom"

function CreateNewGuest({ onAddGuest }) {
	const [formInput, setFormInput] = useState({
		name:"",
		email:"",
		phone:"",
		notes:""
	})

	// const [category, setCategory] = useState("Not Invited");

	const navigate = useNavigate();


	//to do: do a handlechange and then some sort of handlesubmit or whatever
	function handleSubmit(event) {
		event.preventDefault();
		console.log(event.target.value);
		const guestInfo = {
			name: formInput.name, 
			email: formInput.email,
			phone: formInput.phone,
			notes: formInput.notes,
			attendance: false, 
		};

		fetch("http://localhost:4000/wedding_guests", {
			method: "POST", 
			headers: {
				"Content-Type": "application/json",
			}, 
			body: JSON.stringify(guestInfo), 
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
						onChange={(event) => setFormInput(event.target.value)}
					/>
				</label>
				<label>
					Email:
					<input 
						type="text" 
						name="email" 
						value={formInput.email} 
						onChange={(event) => setFormInput(event.target.value)}
					/>
				</label>
				<label>
					Phone:
					<input 
						type="text" 
						name="phone" 
						value={formInput.phone} 
						onChange={((event) => setFormInput(event.target.value))}
					/>
				</label>
				<label>
					Notes:
					<input 
						type="text" 
						name="notes" 
						value={formInput.notes} 
						onChange={(event) => setFormInput(event.target.value)}
					/>
				</label>
				<input type="submit" value="Submit" />
			</form>

			<select name="filter" >
                <option value="Not Invited">Not Invited</option>
                <option value="Invited">Invited</option>
                <option value="Attending">Attending</option>
                <option value="Declined">Declined</option>
            </select>
		</div>
	)
}

export default CreateNewGuest;