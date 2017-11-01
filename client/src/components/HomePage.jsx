import React, { Component } from 'react';
import styled from 'styled-components'

const Atlanta = styled.div`
font-family: 'Rubik';
  background-image: url('https://i.imgur.com/ma1Eup5.jpg');
  background-attachment: fixed;
  background-position: center;
  padding: 20px;
  margin-top: 150px;
  text-align: center;
  color:white;
  font-size:50px;
`
const London = styled.div`
font-family: 'Rubik';
  background-image: url('https://i.imgur.com/yahfVTm.jpg');
  background-attachment: fixed;
  background-position: center;
  padding: 20px;
  margin-top: 150px;
  text-align: center;
  color:white;
  font-size:50px;
`
const SanFran = styled.div`
font-family: 'Rubik';
  background-image: url('https://i.imgur.com/aFys868.jpg');
  background-attachment: fixed;
  background-position: center;
  padding: 20px;
  margin-top: 150px;
  text-align: center;
  color:white;
  font-size:50px;
`
const Main = styled.div`

`

class HomePage extends Component {
    render() {
        return (
            <Main>
                <Atlanta>
                    <h1>Atlanta</h1>
                </Atlanta>
                <London>
                    <h1>London</h1>
                </London>
                <SanFran>
                    <h1>San Francisco</h1>
                </SanFran>
            </Main>
        )
    }
}

export default HomePage;

//    <img src="http://brightnewt.com/wp-content/uploads/2014/06/icon1024.png" className="App-logo" alt="logo" />