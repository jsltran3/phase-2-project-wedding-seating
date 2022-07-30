import React, { useEffect } from "react";


function Home() {



    //needa know what page i'm on 
    useEffect(
        () => {
            console.log("This is the home page")
        }
    );

    console.log("Component rendering");
    return (
        <div>
   
            <h1>Perfect Wedding Guest</h1>
            <h2>Seating Made Easy</h2>
            <p>Instructions:</p>
            <div className="instructions">
                <li>Fill out Name, Email, Phone Number, and Notes</li>
                <li>Select Status</li>
                <li>Submit</li>
                <li>Filter by RSVP Attendance or Delete Guests</li>
            </div>
        </div>

    )
}

export default Home; 