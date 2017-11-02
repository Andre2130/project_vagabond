// import React, { Component } from 'react';
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const CityList = styled.div`
  font-family: 'Rubik';
  background-attachment: fixed;
  background-position: center;
  padding: 20px;
  margin-top: 150px;
  text-align: center;
  color:white;
  font-size:50px;
`

const CityLink = styled.div`
  padding: 20px;
  margin: 100px;
  text-align: center;
  font-size: 75px;
  font-family: 'Rubik';
  a {
    color: white;
    text-decoration: none;
  }
  a:hover {
    text-shadow: 1px 1px 2px
  }
`


const HomePage = (props) => {
  return (
    <div>
      {
        props.cities.map((city) => {
          return (
            <CityList style={{ backgroundImage: `url(${city.image})` }}>
              <CityLink><Link to={`/cities/${city.id}`}>{city.name}</Link></CityLink>
            </CityList>
          )
        })
      }
    </div>
  )
}

export default HomePage



