import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const NavBar = styled.div `
    width: 97%;
    display: flex;
    justify-content: center;
    background-color: lightblue;
    padding: 1rem;
`;
const NavHodor= styled.div `
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin: 0;
    ;
`;

const Navbar = () => {
    return (
        <NavBar>
            <NavHodor>
                <NavLink to="/" className="links">Home</NavLink>
                <NavLink to="/characters" className="links">Characters</NavLink>
                <NavLink to="/locations" className="links">Locations</NavLink>
            </NavHodor>
        </NavBar>
    );
};

export default Navbar;