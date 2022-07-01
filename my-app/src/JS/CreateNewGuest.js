import React from "react";
import { Link } from "react"
import { useNavigate } from "react-router-dom"

function CreateNewGuest() {
	const navigate = useNavigate();

	console.log("Create new guest card")
	return (
		
		<div>
					
			<button type="button">
				Go back
			</button>
			<h2>New Guest</h2>
			<form>
				<label>
					Name:
					<input type="text" name="name" />
				</label>
				<input type="submit" value="Submit" />
			</form>
			<form>
				<label>
					Song Request:
					<input type="text" name="content" />
				</label>
				<input type="submit" value="Submit" />
			</form>
			<form>
				<label>
					Phone Number:
					<input type="text" name="content" />
				</label>
				<input type="submit" value="Submit" />
			</form>
			<form>
				<label>
					Email:
					<input type="text" name="content" />
				</label>
				<input type="submit" value="Submit" />
			</form>
			<select
                name="filter"
                // value={category}
            >
                <option value="All">RSVP Status</option>
                <option value="Not Invited">Not Invited</option>
                <option value="Invited">Invited</option>
                <option value="Attending">Attending</option>
                <option value="Declined">Declined</option>
            </select>
		</div>
	)
}

export default CreateNewGuest;