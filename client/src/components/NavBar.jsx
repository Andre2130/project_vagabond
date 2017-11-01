import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavBarLinks = styled.div`
display: flex;
flex-direction: row;
align-items: space-between;
padding-right: 20px;
padding-left: 10px;
a{
    text-decoration: none;
    color: black;
}
`

const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

`
const LogoImage = styled.div`
    
    padding-left: 10px;
img{
    height: 80px;
}
`

const NavBar = () => {
    return (
        <NavBarContainer>
                <NavBarLinks>
                <div>
                    <Link to="#">signup</Link>
                </div>
                <div>
                    <Link to="#">login</Link>
                </div>
            </NavBarLinks>

              <LogoImage>
                <img src="http://brightnewt.com/wp-content/uploads/2014/06/icon1024.png" />
            </LogoImage>

        </NavBarContainer>
    );
};

export default NavBar;


 //  <img src="http://brightnewt.com/wp-content/uploads/2014/06/icon1024.png" className="App-logo" alt="logo" />