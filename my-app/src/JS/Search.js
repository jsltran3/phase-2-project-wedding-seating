import React, { useState } from "react";

function Search({ searchTerm, setSearchTerm }) {

	function handleSearchTerm(event) {
		let lowerCaseInput = event.target.value.toLowerCase();
		setSearchTerm(lowerCaseInput);
	};

	return (
		<form >
		<input 
			className="search-box"
			type="text" 
			name="searchTerm" 
			id="searchTerm" 
			value={ searchTerm } 
			placeholder="Search guest..."
			onChange={ handleSearchTerm } 
		/>
		</form>
	)
}

export default Search