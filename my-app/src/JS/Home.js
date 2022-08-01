import React, { useEffect } from "react";


function Home() {

    return (
        <div>
            <h1>Perfect Wedding Guest</h1>
            <h2>Seating Made Easy</h2>
            <p>Instructions:</p>
            <div className="tips">
                <ul >
                    <li>Fill out Name, Email, Phone Number, and Notes</li>
                    <li>Select Status</li>
                    <li>Submit</li>
                    <li>Filter by RSVP Attendance or Delete Guests</li>
                </ul>
            </div>
        </div>
    )
}

export default Home; 

