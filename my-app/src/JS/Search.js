import React, { useState } from "react";

function Search({ guestList, selectAttendance, filteredGuest, setGuestList, searchTerm, setSearchTerm }) {
	// const [inputText, setInputText] = useState("")

	function handleSubmitSearch(event) {
		event.preventDefault(); 

		// const filteredGuest = () => {
		// 	guestList.filter(guest => {
		// 	if (inputText==="" && selectAttendance === "All") return true
			
		// 	if (inputText === guest.name) {
		// 		if(selectAttendance === guest.attendance) {
		// 			return true
		// 		} 
		// 	} else if (selectAttendance === guest.attendance) return true
	
		// 	return false 
		// })
		// };
		//search term variable that's sending the filtered guest
		//set variable with a chained filter
		// setGuestList(filteredGuest.filter(guest => guest.name.toLowerCase().includes(inputText.toLowerCase())))
		// setInputText("")


	}



	function handleSearchTerm(event) {
		let lowerCaseInput = event.target.value.toLowerCase();
		setSearchTerm(lowerCaseInput)
		
	}

	return (
		<form onSubmit={ handleSubmitSearch }>
		<input 
			type="text" 
			name="searchTerm" 
			id="searchTerm" 
			value={ searchTerm } 
			placeholder="Search guest..."
			onChange={ handleSearchTerm } 
		/>
		<input 
			type="submit" 
			value="search" 
		/>
		</form>
	)
}

export default Search