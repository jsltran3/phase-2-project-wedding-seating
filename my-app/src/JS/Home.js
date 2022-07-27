import React, { useEffect } from "react";
import styled from 'styled-components'

function Home() {
    const Title = styled.h1`
        font-size: 1.5em;
        text-align: center;
        color: palevioletred;
    `;

    const Wrapper = styled.section`
        padding: 4em;
        background: papayawhip;
    `;

    //needa know what page i'm on 
    useEffect(
        () => {
            console.log("This is the home page")
        }
    );

    console.log("Component rendering");
    return (
        <div>
            <Wrapper>
            <Title>Perfect Wedding Guest</Title>
            <h2>Seating Made Easy</h2>
            <p>Instructions:</p>
            <ol type="1">
                <li>Fill out Name, Email, Phone Number, and Notes</li>
                <li>Select Status</li>
                <li>Submit</li>
                <li>Filter by RSVP Attendance or Delete Guests</li>
            </ol>
            </Wrapper>
        </div>

    )
}

export default Home; 