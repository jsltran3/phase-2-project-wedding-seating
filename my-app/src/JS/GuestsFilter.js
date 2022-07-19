import React from "react"

function GuestsFilter({ selectAttendance, onAttendanceChange }) {
    return (
        <div>
            <select
                name="filter"
                value={selectAttendance}
                onChange={(event) => onAttendanceChange(event.target.value)}
            >
                <option value="All">RSVP Status</option>
                <option value="Not Invited">Not Invited</option>
                <option value="Invited">Invited</option>
                <option value="Attending">Attending</option>
                <option value="Declined">Declined</option>
            </select>
        </div>
    )
}

export default GuestsFilter; 