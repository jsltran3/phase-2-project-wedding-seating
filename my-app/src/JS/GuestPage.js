import React, { useEffect, useState } from "react";
import GuestsFilter from "./GuestsFilter";
import Guests from "./Guests";
import CreateNewGuest from "./CreateNewGuest";
import Search from "./Search";


function GuestPage() {
	const [guestList, setGuestList] = useState([]);
	const [selectAttendance, setSelectAttendance] = useState("All");
	//search
	const [searchTerm, setSearchTerm] = useState("");
	 
	//passed down search
	useEffect(() => {
		fetch("http://localhost:4000/weddingGuests")
			.then((resp) => resp.json())
			.then((guests) => { 
				setGuestList(guests)
			});
	}, []);
		
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

	//batching q all states
	const filteredGuest = () => {
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
						phone={guest.phone}
						notes={guest.notes}
						attendance={guest.attendance}
						onDeleteGuests={handleDeleteGuest}
						email={guest.email}
					/>
				))}
			</ul>
			
			
		</div>
	)
}


export default GuestPage;