import React, { useEffect, useState } from "react";
import GuestsFilter from "./GuestsFilter";
import Guests from "./Guests";
import CreateNewGuest from "./CreateNewGuest";
import CreateNewNav from "./CreateGuestNav";
import { 
	Route, 
	NavLink, 
	Link, 
} 
from "react-router-dom"

function GuestList() {
	const [guestList, setGuestList] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState("All");

	useEffect(() => {
		fetch("http://localhost:4000/wedding_guests")
			.then((resp) => resp.json())
			.then((guestList) => setGuestList(guestList));
	}, []);

	function handleCategoryChange(category) {
		setSelectedCategory(category)
	}

	function handleUpdateGuest(updatedGuest) {
		const updatedGuests = guestList.map((guest) => {
			if (guest.id === updatedGuests.id) {
				return updatedGuest;
			} else {
				return guest;
			}
		});
		setGuestList(updatedGuests);
	}

	

	const guestsToDisplay = guestList.filter((guest => {
		if (handleCategoryChange === "All") return true;

		return guest.selectedCategory === handleCategoryChange;
	}));



	return (
		<div>
			<button>
        <Link to="/CreateNewGuest">CreateNewGuest</Link>
      </button>
			<GuestsFilter
				category={selectedCategory}
				onCategoryChange={handleCategoryChange}
			/>
			<h3>Guest List Card</h3>
			<ul>
				{guestsToDisplay.map((guest) => (
					<Guests
						key={guest.id}
						guests={guestList}
						onUpdateGuest={handleUpdateGuest}
					/>
				))
				}

			</ul>
			{guestList.map((guest) => {
				console.log({guest})
				return (
					<p key={guest.id}>
					{guest.name}
					</p>
				)
			})}
			<footer>Footer: Maybe instructions at the bottom or something</footer>
		</div>
	)
}


export default GuestList; 