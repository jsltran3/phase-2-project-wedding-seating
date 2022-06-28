import React from "react";
import { Link } from "react-router-dom"

function CreateNewGuest() {
	console.log("Create new guest card")
	return (
		
		<div>
						<Link to="/CreateNewGuest" >
				<button type="button">
          Add New Guest
     		</button>
			</Link>
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
					Content:
					<input type="text" name="content" />
				</label>
				<input type="submit" value="Submit" />
			</form>
		</div>
	)
}

export default CreateNewGuest;