import React, { useState, useEffect } from "react";

function Search({ guestList, setGuestList }) {
	const [inputText, setInputText] = useState("")

	// useEffect(() => console.log(names.map(guest => guest.name)))

	useEffect(() => {
    setInputText(guestList)
		// console.log(guestList.map(guest => guest.name))
  }, [ guestList ])

	// function searchBox(name) {
	// 	return (
	// 		name.toLowerCase().includes(inputText.toLowerCase())
	// 	)
	// }

	function handleSubmit(event) {
		event.preventDefault(); 
		//wait can i search the whole name wiht just the name? 
		//use one setSearch to test about abstracting one thing
		setInputText(guestList.filter(guest => guest.name.toLowerCase().includes(inputText.toLowerCase())))


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