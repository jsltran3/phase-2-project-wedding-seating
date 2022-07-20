import React, { useEffect, useState } from "react";
import GuestsFilter from "./GuestsFilter";
import Guests from "./Guests";
import CreateNewGuest from "./CreateNewGuest";

function GuestPage() {
	const [guestList, setGuestList] = useState([]);
	const [selectAttendance, setSelectAttendance] = useState("All");


	useEffect(() => {
		fetch("http://localhost:4000/weddingGuests")
			.then((resp) => resp.json())
			.then((guestList) => setGuestList(guestList));
	}, []);

	function handleAttendanceChange(rsvpStatus) {
		setSelectAttendance(rsvpStatus)
	}

	function handleDeleteGuest(deletedGuest) {
		// const updatedGuests = guestList.filter((guest) => guest.id !== deletedGuest.id);
		const updatedGuests = guestList.filter((guest) => guest.name !== deletedGuest.name);
		setGuestList(updatedGuests)
		// console.log(updatedGuests)

  }
	
	function handleAddGuest(newguest) {
		setGuestList([...guestList, newguest]);
	};


	const guestsToDisplay = guestList.filter((guest => {
		if (selectAttendance === "All") return true;

		return guest.attendance === selectAttendance;
	}));
	

	return (
		<div>
			<CreateNewGuest 
				onAddGuest={handleAddGuest}
	
			/>
			<GuestsFilter
				selectAttendance={selectAttendance}
				onAttendanceChange={handleAttendanceChange}
			/>
			<h3>Guest List Card</h3>
			<ul>
				{guestsToDisplay.map((guest) => (
					<Guests
						guest={guestList}
						name={guest.name}
						key={guest.id}
						onDeleteGuests={handleDeleteGuest}
		
					/>
				))
				}
				{/* <Guests 
					guest={guestList}
					guestCards={guestsToDisplay}
					onUpdateGuest={handleUpdateGuest}
					onDeleteGuests={handleDeleteGuest}
				/> */}

			</ul>
			{/* {guestList.map((guest) => {
				console.log({ guest })
				return (
					<p key={guest.id}>
						{guest.name}
						
					</p>
				)
			})} */}
			<footer>Footer: Maybe instructions at the bottom or something</footer>
		</div>
	)
}


export default GuestPage; 