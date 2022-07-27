import React from "react"; 
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function NavBar() {
  const Header = styled.header`
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		padding: 10px 10px;
		background: white;

  h2 {
    font-weight: 400;
    color: violet;
    font-size: 1rem;
  }

  li {
    list-style: none;
    display: inline-block;
    color: #ccc;
  }
`;
    
    return (
        <div>
					<Header>
						<NavLink to="/" >Home</NavLink>
            <NavLink to="/GuestPage">Guest Page</NavLink>
            <NavLink to="/WeddingTips">Wedding Tips</NavLink>
					</Header>

        </div>
    );
}

export default NavBar;