import React from "react"

function GuestsFilter({ category, onCategoryChange }) {
    return (
        <div>
            <select
                name="filter"
                value={category}
                onChange={(e) => onCategoryChange(e.target.value)}
            >
                <option value="All">Everyone</option>
                <option value="Not Invited">Not Invited</option>
                <option value="Invited">Invited</option>
                <option value="Attending">Attending</option>
                <option value="Declined">Declined</option>
            </select>
        </div>
    )
}

export default GuestsFilter; 