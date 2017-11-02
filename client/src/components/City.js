import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components';

const CityContainer = styled.div`
`

const CityImage = styled.div`
img{
    border-radius: 5px;
    max-width: 600px;
}
`
const CityDetailsContainer = styled.div`

display: block;
text-align: center;

`

class City extends Component {
    state = {
        city: {},
        posts: []
    }
    async componentWillMount(){
        try{
            const { city_id } = this.props.match.params
            const response = await axios.get(`/api/cities/${city_id}`)
            this.setState({city: response.data})

        } catch(error) {
            console.log(error)
        }
    }
    render() {
        return (
            <CityContainer>
                <CityDetailsContainer>
                    <h2>{this.state.city.name}</h2>
                    
                    <CityImage>
                        <img src={this.state.city.image} />
                    </CityImage>
                </CityDetailsContainer>
            </CityContainer>
        );
    }
}

export default City;