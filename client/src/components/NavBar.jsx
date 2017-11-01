import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const LogoImage = styled.img`
    height: 80px;
`

const LogoImageHolder = styled.div`
    width: 280px;
    display: flex;
    justify-content: center;
`

const NavBarLinkHolder = styled.div`
    display: flex;
    flex-direction: row;
    Justify-content: space-around;
    padding-right: 20px;
    padding-left: 10px;
`

const NavBarLinks = styled.button`
    font-family: 'Rubik', sans-serif;
    font-size: 25px;
    background: white;
    border: none;
    padding: 20px;
    a {
        text-decoration: none;
        color: black;
    } 
    a:hover {
        text-shadow: 1px 1px 2px
    }
`


const NavBar = () => {
    return (
        <NavBarContainer>

            <LogoImageHolder>
                <LogoImage src="http://brightnewt.com/wp-content/uploads/2014/06/icon1024.png" />
            </LogoImageHolder>
            <h1>Vagabond Traveler</h1>

            <NavBarLinkHolder>
                <NavBarLinks><Link to="#">Sign-up</Link></NavBarLinks>
                <NavBarLinks><Link to="#">Log-in</Link></NavBarLinks>
            </NavBarLinkHolder>

        </NavBarContainer >
    );
};

export default NavBar;


 //  <img src="http://brightnewt.com/wp-content/uploads/2014/06/icon1024.png" className="App-logo" alt="logo" />