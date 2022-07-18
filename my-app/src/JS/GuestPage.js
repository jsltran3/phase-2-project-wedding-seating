import React, { useEffect, useState } from "react";
import GuestsFilter from "./GuestsFilter";
import Guests from "./Guests";
import CreateNewGuest from "./CreateNewGuest";
import {
	Route,
	Routes,
	NavLink,
	Link,
}
	from "react-router-dom"

function GuestList() {
	const [guestList, setGuestList] = useState([]);
	const [selectAttendance, setSelectAttendance] = useState("");

	useEffect(() => {
		fetch("http://localhost:4000/weddingGuests")
			.then((resp) => resp.json())
			.then((guestList) => setGuestList(guestList));
	}, []);

	function handleAttendanceChange(rsvpStatus) {
		setSelectAttendance(rsvpStatus)
	}

	function handleUpdateGuest(updatedGuest) {
		const updatedGuests = guestList.map((guest) => {
			if (guest.id === updatedGuest.id) {
				return updatedGuest;
			} else {
				return guest;
			}
		});
		setGuestList(updatedGuests);
	}

	function handleDeleteGuest(deletedGuest) {
		const updatedGuests = guestList.filter((guest) => guest.id !== deletedGuest.id);
		setGuestList(guestList);
	}

	function handleAddGuest(newguest) {
		setGuestList([...guestList, newguest]);
	};


	const guestsToDisplay = guestList.filter((guest => {
		if (selectAttendance === "All") return true;

		return guest.setSelectAttendance === selectAttendance;
	}));



	return (
		<div>
			<CreateNewGuest 
				onAddGuest={handleAddGuest}
				onAttendanceChange={handleAttendanceChange}
			/>
			<GuestsFilter
				attendance={selectAttendance}
				onAttendanceChange={handleAttendanceChange}
			/>
			<h3>Guest List Card</h3>
			<ul>
				{guestsToDisplay.map((guest) => (
					<Guests
						key={guest.id}
						guests={guestList}
						onUpdateGuest={handleUpdateGuest}
						onDeleteGuests={handleDeleteGuest}
					/>
				))
				}

			</ul>
			{guestList.map((guest) => {
				console.log({ guest })
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