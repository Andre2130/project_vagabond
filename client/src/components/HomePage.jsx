// import React, { Component } from 'react';
import React from 'react'
import { Link } from 'react-router-dom'
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



const HomePage = (props) => {
    return (
        <div>
        {
            props.cities.map((city) => {
            return(
            <div>
            <h1>{city.name}</h1>
            <img src={city.image} />
            </div>
                
            

            )
        })
        }
        </div>
    )
}

export default HomePage







// class HomePage extends Component {
//     render() {
//         return (
//             <Main>
//                 <Atlanta>
//                     <h1>Atlanta</h1>
//                 </Atlanta>
//                 <London>
//                     <h1>London</h1>
//                 </London>
//                 <SanFran>
//                     <h1>San Francisco</h1>
//                 </SanFran>
//             </Main>
//         )
//     }
// }

// export default HomePage;

