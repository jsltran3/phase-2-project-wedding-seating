import React, { useState, useEffect } from "react";

function Search({ guestList, setGuestList }) {
	const [inputText, setInputText] = useState("")

	// useEffect(() => console.log(names.map(guest => guest.name)))

	// useEffect(() => {
	// 	fetch("http://localhost:4000/weddingGuests")
	// 		.then((resp) => resp.json())
	// 		.then((guestList) => setGuestList(guestList));
	// }, []);

	useEffect(() => {
    setInputText(guestList)
		console.log(inputText)
  }, [ guestList ])

	// function nameList(guest) {
	// 	names.map(guest => guest.name)
	// }

	// function searchBox(name) {
	// 	return (
	// 		name.toLowerCase().includes(inputText.toLowerCase())
	// 	)
	// }

	function handleSubmit(event) {
		event.preventDefault(); 
		//wait can i search the whole name wiht just the name? 
		//use one setSearch to test about abstracting one thing
		setInputText(guestList.filter(name => name.toLowerCase().includes(inputText.toLowerCase())))

		// console.log(names.console.log(searchBox))
		
	}

	function handleChange(event) {
		setInputText(event.target.value)
	}

	return (
		// <form onSubmit={ handleSubmit }>
		<form>
			<input 
				type="text" 
				name="inputText" 
				id="inputText" 
				value={ inputText } 
				placeholder="Search guest..."
				// onChange={ handleChange } 
			/>
			<input 
				type="submit" 
				value="search" 
			/>
		</form>
		)
}

export default Search