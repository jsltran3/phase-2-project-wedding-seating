import React, { useEffect, useState } from "react";
import GuestsFilter from "./GuestsFilter";
import Guests from "./Guests";
import CreateNewGuest from "./CreateNewGuest";

function GuestPage() {
	const [guestList, setGuestList] = useState([]);
	const [selectAttendance, setSelectAttendance] = useState("All");
	const [attendance, setAttendance] = useState("Invited");
	const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    phone: "",
    notes: ""
  });
	

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
		setGuestList(updatedGuests);
	}

	function handleSetGuest(newguest) {
		setGuestList([...guestList, newguest]);
	};


	const guestsToDisplay = guestList.filter((guest => {
		if (selectAttendance === "All") return true;

		return guest.setSelectAttendance === selectAttendance;
	}));

	function handleAddGuest(guest) {

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
				"Content-Type": "application/json"
			},
			body: JSON.stringify( newGuestInfo )
		})
			.then((resp) => resp.json())
			.then((guest) => {
				const newGuest = [...guestList, guest];
				handleSetGuest(newGuest);
			});
}
	

	return (
		<div>
			<CreateNewGuest 
				onAddGuest={handleAddGuest}
				attendance={attendance}
				setAttendance={setAttendance}
				formInput={formInput}
				setFormInput={setFormInput}
			/>
			<GuestsFilter
				selectAttendance={selectAttendance}
				onAttendanceChange={handleAttendanceChange}
			/>
			<h3>Guest List Card</h3>
			<ul>
				{guestsToDisplay.map((guest) => (
					<Guests
						key={guest.id}
						guest={guestList}
						onUpdateGuest={handleUpdateGuest}
						onDeleteGuests={handleDeleteGuest}
						formInput={formInput}

					/>
				))
				}

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