import React, { useEffect, useState } from "react";
import GuestsFilter from "./GuestsFilter";
import Guests from "./Guests";
import CreateNewGuest from "./CreateNewGuest";
import Search from "./Search";

function GuestPage() {
	const [guestList, setGuestList] = useState([]);
	const [selectAttendance, setSelectAttendance] = useState("All");

	 

	useEffect(() => {
		fetch("http://localhost:4000/weddingGuests")
			.then((resp) => resp.json())
			.then((guestList) => setGuestList(guestList));
	}, []);

	useEffect(() => console.log(guestList.map(guest => guest.name)))

	function handleAttendanceChange(rsvpStatus) {
		setSelectAttendance(rsvpStatus)
	}

	function handleDeleteGuest(id) {
		const updatedGuests = guestList.filter((guest) => guest.id !== id);
		setGuestList(updatedGuests)
  }
	
	function handleAddGuest(newguest) {
		setGuestList([...guestList, newguest]);
	};


	const guestsToDisplay = guestList.filter((guest => {
		if (selectAttendance === "All") return true;

		return guest.attendance === selectAttendance;
	}));

	const searchGuestDisplay = guestList.filter(guest => guest);
	

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
						id={guest.id}
						onDeleteGuests={handleDeleteGuest}
		
					/>
				))
				}
			</ul>
			{/* {searchGuestDisplay.map((guest) => ( 
				<Search 
					guest={guestList} 
					setGuestList={setGuestList}
				/>
			))}  */}
			<Search
				guestList={guestList}
				setGuestList={setGuestList}
			/>
			
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