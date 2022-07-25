import React, { useEffect, useState } from "react";
import GuestsFilter from "./GuestsFilter";
import Guests from "./Guests";
import CreateNewGuest from "./CreateNewGuest";
import Search from "./Search";

function GuestPage() {
	const [guestList, setGuestList] = useState([]);
	const [selectAttendance, setSelectAttendance] = useState("All");
	 
	//passed down search
	useEffect(() => {
		fetch("http://localhost:4000/weddingGuests")
			.then((resp) => resp.json())
			.then((guests) => { 
				setGuestList(guests)
				// setInputText(guestList)
			});
	}, []);

	const recallList = () => useEffect(() => {
		fetch("http://localhost:4000/weddingGuests")
			.then((resp) => resp.json())
			.then((guests) => { 
				setGuestList(guests)
				// setInputText(guestList)
			});
	}, []);

	// useEffect(() => console.log(guestsToDisplay.map(guest => guest.name)))
		
	function handleAttendanceChange(rsvpStatus) {
		setSelectAttendance(rsvpStatus)
	}

	function handleAddGuest(newguest) {
		setGuestList([...guestList, newguest]);
	}

	function handleDeleteGuest(id) {
		const updatedGuests = guestList.filter((guest) => guest.id !== id);
		setGuestList(updatedGuests)
  }

	function handleRefreshSubmit(event) {
		event.preventDefault(event);
		window.location.reload(false);
  
	}
	
	const guestsToDisplay = guestList.filter((guest => {
		if (selectAttendance === "All") return true;

		return guest.attendance === selectAttendance;
	}));

	const filteredDisplayedGuest = guestsToDisplay.map((guest) => (
		<Guests
			guest={guestList}
			name={guest.name}
			key={guest.id}
			id={guest.id}
			onDeleteGuests={handleDeleteGuest}
		/>
	))




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
			<Search
				guestList={guestList}
				setGuestList={setGuestList}
				guestsToDisplay={guestsToDisplay}
			/>
			<form onSubmit={handleRefreshSubmit}>
				<button  onClick={handleRefreshSubmit} type="button">Refresh List</button>
			</form>
			
			<ul>
				{/* {guestsToDisplay.map((guest) => (
					<Guests
						guest={guestList}
						name={guest.name}
						key={guest.id}
						id={guest.id}
						onDeleteGuests={handleDeleteGuest}
					/>
				))} */}
				{ filteredDisplayedGuest }
			</ul>
			
			<footer>Footer: Maybe instructions at the bottom or something</footer>
		</div>
	)
}


export default GuestPage;