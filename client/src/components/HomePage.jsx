import React, { Component } from 'react';
import styled from 'styled-components'

const City = styled.div`
font-family: 'Nosifer', cursive;
  background-image: url("https://www.homeadvisor.com/images/consumer/hhi/hero-photos/city/Atlanta.jpg");
  background-attachment: fixed;
  background-position: center;
  padding: 20px;
  margin-top: 150px;
  text-align: center;
  color:black;
  font-size:50px;
`
const Main = styled.div`

`

const Title = styled.div`
text-align:center;
font-size:100px;
font-family: 'Rubik';
`

class HomePage extends Component {
    render() {
        return (
            <Main>
                <Title>
            Vagabond Traveler
            </Title>
            <City>
        <h1>Atlanta</h1>
            </City>
            <City>
        <h1>London</h1>
            </City>
            <City>
        <h1>Sanfran</h1>
            </City>
            </Main>
        );
    }
}

export default HomePage;

//    <img src="http://brightnewt.com/wp-content/uploads/2014/06/icon1024.png" className="App-logo" alt="logo" />