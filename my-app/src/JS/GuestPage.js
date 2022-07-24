import React, { useEffect, useState } from "react";
import GuestsFilter from "./GuestsFilter";
import Guests from "./Guests";
import CreateNewGuest from "./CreateNewGuest";
// import Search from "./Search";

function GuestPage() {
	const [guestList, setGuestList] = useState([]);
	const [selectAttendance, setSelectAttendance] = useState("All");
	//search shit
	const [inputText, setInputText] = useState("");
	 

	useEffect(() => {
		fetch("http://localhost:4000/weddingGuests")
			.then((resp) => resp.json())
			.then((guests) => { 
				setInputText(guestList)
				setGuestList(guests)
			});
	}, []);



	// search shit
	// useEffect(() => {
  //   setInputText(guestList)
	// 	// console.log(guestList)
  // }, [ guestList ])

	//search s hit
	// function handleSubmitSearch(event) {
	// 	event.preventDefault(); 

	// 	setInputText(guestList.filter(
	// 		function searchGuest(guest) {
	// 		if (inputText == "") {
	// 			return guest
	// 		} else if (guest.name.toLowerCase().includes(inputText.toLowerCase())) {
	// 			return guest
	// 		}
	// 	}))
	// }
	function handleSetInput(event) {
		event.preventDeafult()
		
	}


	//search shit
	function handleSubmitSearch(event) {
		event.preventDefault(); 

		setGuestList(guestList.filter(guest => guest.name.toLowerCase().includes(inputText.toLowerCase())))

	}
	useEffect(() => console.log(guestsToDisplay.map(guest => guest.name)))

	function handleChangeSearch(event) {
		setInputText(event.target.value)
	}

	//searchshit
	// const displaySearchInput = 
		
	function handleAttendanceChange(rsvpStatus) {
		setSelectAttendance(rsvpStatus)
	}

	function handleDeleteGuest(id) {
		const updatedGuests = guestList.filter((guest) => guest.id !== id);
		setGuestList(updatedGuests)
  }
	
	function handleAddGuest(newguest) {
		setGuestList([...guestList, newguest]);
	}
	
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
			<form onSubmit={ handleSubmitSearch }>
				<input 
					type="text" 
					name="inputText" 
					id="inputText" 
					value={ inputText } 
					placeholder="Search guest..."
					onChange={ handleChangeSearch } 
				/>
				<input 
					type="submit" 
					value="search" 
				/>
		</form>
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
			
			{/* <Search
				guestList={guestList}
				setGuestList={setGuestList}
			/> */}

			
			<footer>Footer: Maybe instructions at the bottom or something</footer>
		</div>
	)
}


export default GuestPage;