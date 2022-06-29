import React, { useEffect, useState } from "react";
import GuestsFilter from "./GuestsFilter";
import Guests from "./Guests";
import CreateNewGuest from "./CreateNewGuest";
import CreateNewNav from "./CreateGuestNav";
import { 
	Route, 
	useRouteMatch, 
	NavLink, 
	Link, 
	Switch 
} 
from "react-router-dom"

function GuestList() {
	const [guestList, setGuestList] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState("All");
	const match = useRouteMatch();

	useEffect(() => {
		fetch("http://localhost:3000/wedding_guests")
			.then((resp) => resp.json())
			.then((guestList) => setGuestList(guestList));
	}, []);

	function handleCategoryChange() {
		setSelectedCategory(selectedCategory)
	}

	function handleUpdateTask(updatedGuest) {
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
						onUpdateTask={handleUpdateTask}
					/>
				))
				}

			</ul>
			{guestList.map((guest) => {
				// console.log({task})
				return (
					<p key={guest.id}>
						{guest.guest_name}

					</p>
				)
			})}
			<footer>Footer: Maybe instructions at the bottom or something</footer>
		</div>
	)
}


export default GuestList; 