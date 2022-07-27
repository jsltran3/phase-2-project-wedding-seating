import React, { useEffect, useState } from "react";
import GuestsFilter from "./GuestsFilter";
import Guests from "./Guests";
import CreateNewGuest from "./CreateNewGuest";
import Search from "./Search";
import styled from 'styled-components'

function GuestPage() {
	const [guestList, setGuestList] = useState([]);
	const [selectAttendance, setSelectAttendance] = useState("All");
	//search
	const [searchTerm, setSearchTerm] = useState("")
	 
	//passed down search
	useEffect(() => {
		fetch("http://localhost:4000/weddingGuests")
			.then((resp) => resp.json())
			.then((guests) => { 
				setGuestList(guests)
			});
	}, []);

	// const recallList = () => useEffect(() => {
	// 	fetch("http://localhost:4000/weddingGuests")
	// 		.then((resp) => resp.json())
	// 		.then((guests) => { 
	// 			setGuestList(guests)
	// 			// setInputText(guestList)
	// 		});
	// }, []);

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
		// window.location.reload(false);
		// setGuestList(event)
  
	}
	

	//category
	// const guestsToDisplay = guestList.filter((guest => {
	// 	if (selectAttendance === "All") return true;

	// 	return guest.attendance === selectAttendance;
	// }));

	//batching q all states
	const filteredGuest = () => {
		// const lowerCaseTerm = searchTerm.toLocaleLowerCase()
		return guestList.filter(guest => {
		if (searchTerm.toLowerCase() === "" && selectAttendance === "All") return true
		
		if (searchTerm.toLowerCase() === guest.name.toLowerCase()) {
			if(selectAttendance === guest.attendance) {
				console.log(guest.name)
				return true
			} 
			return true
		} else if (selectAttendance === guest.attendance) return true
		
	

		return false 
	})
	};




	return (
		<div>
			<CreateNewGuest 
				onAddGuest={handleAddGuest}
	
			/>

			<h3>Guest List Card</h3>
			<Search
				selectAttendance={selectAttendance}
				guestList={guestList}
				setGuestList={setGuestList}
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
				filteredGuest={filteredGuest}
			/>
			{/* <form onSubmit={handleRefreshSubmit}>
				<button  onClick={handleRefreshSubmit} type="button">Refresh List</button>
			</form> */}
			<GuestsFilter
				selectAttendance={selectAttendance}
				onAttendanceChange={handleAttendanceChange}
			/>
			<ul>
				{filteredGuest().map((guest) => (
					<Guests
						guest={guestList}
						name={guest.name}
						key={guest.id}
						id={guest.id}
						onDeleteGuests={handleDeleteGuest}
					/>
				))}
			</ul>
			
			<footer>Footer: Maybe instructions at the bottom or something</footer>
		</div>
	)
}


export default GuestPage;