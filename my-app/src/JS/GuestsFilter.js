import React from "react"

function GuestsFilter({ category, onCategoryChange }) {
    return (
        <div>
            <select
                name="filter"
                value={category}
                onChange={(e) => onCategoryChange(e.target.value)}
            >
                <option value="All">Filter by category</option>
                <option value="NeedTo">Need To Do</option>
                <option value="WantTo">Want To Do</option>
                <option value="Society">What Society Expects You To Do</option>
            </select>
        </div>
    )
}

export default GuestsFilter; 