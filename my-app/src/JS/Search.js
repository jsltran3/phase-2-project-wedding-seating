import React, { useState, useEffect } from "react";

function Search({ guestList, setGuestList, guestsToDisplay }) {
	const [inputText, setInputText] = useState("")

	function handleSubmitSearch(event) {
		event.preventDefault(); 

		// let filteredGuests = () => setGuestList(guestList.filter(guest => guest.name.toLowerCase().includes(inputText.toLowerCase())))
		// if (inputText ==="" && inputText != guest.name) {
		// 	return guestList
		// } else {
		// 	filteredGuests
		// }
		setGuestList(guestList.filter(guest => guest.name.toLowerCase().includes(inputText.toLowerCase())))
		setInputText("")
	// const	filteredGuestInput = guest => guest.name.toLowerCase().includes(inputText.toLowerCase())

	// setGuestList(filteredGuestInput(inputText))

		// setGuestList(guestList.filter((guest) => {
		// 	if (inputText == guest.name) return true;
			
		// 	} else (inputText !=== undefined || inputText !== guest.name) {
		// 		return filteredGuestInput
		// 	}	
		// 	}))

	}



	function handleInputSearch(event) {
		let lowerCaseInput = event.target.value.toLowerCase();
		setInputText(lowerCaseInput)
		
	}

	return (
		<form onSubmit={ handleSubmitSearch }>
		<input 
			type="text" 
			name="inputText" 
			id="inputText" 
			value={ inputText } 
			placeholder="Search guest..."
			onChange={ handleInputSearch } 
		/>
		<input 
			type="submit" 
			value="search" 
		/>
		</form>
	)
}

export default Search