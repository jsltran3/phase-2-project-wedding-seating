import React, { useState, useEffect } from "react";

function Search({ guestList, setGuestList }) {
	const [inputText, setInputText] = useState("")

	//may not do anything
	useEffect(() => {
		fetch("http://localhost:4000/weddingGuests")
			.then((resp) => resp.json())
			.then((guests) => { 
				setInputText(guestList)
				setGuestList(guests)
			});
	}, []);

	function handleSubmitSearch(event) {
		event.preventDefault(); 

		setGuestList(guestList.filter(guest => guest.name.toLowerCase().includes(inputText.toLowerCase())))

	}

	function handleChangeSearch(event) {
		setInputText(event.target.value)
	}

	return (
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
		)
}

export default Search