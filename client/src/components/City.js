import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components';

const CityImage = styled.div`
img{
    max-width: 500px;
}
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
            <div>
                <h2>{this.state.city.name}</h2>
                
                <CityImage>
                    <img src={this.state.city.image} />
                </CityImage>
            </div>
        );
    }
}

export default City;