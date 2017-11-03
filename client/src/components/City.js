import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components';
import PostList from './PostList'

const CityContainer = styled.div`
background-color:black;
`

const CityImage = styled.div`
img{
    border-radius: 5px;
    width: 100%;
    height: 405px;
},

`
const CityDetailsContainer = styled.div`

display: block;
text-align: center;
border:solid, grey, 1px;
float:left;
background-color:#eaeff7;
`

class City extends Component {
    state = {
        city: {},
        posts: []
    }
    // async componentWillMount(){
    //     try{
    //         const { city_id } = this.props.match.params
    //         const response = await axios.get(`/api/cities/${city_id}`)
    //         this.setState({city: response.data})

    //     } catch(error) {
    //         console.log(error)
    //     }
    // }

    // This isn't going to work because there isn't a posts controller, I believe. 
componentWillMount(){
const city_id = this.props.match.params.city_id
this.fetchCityAndPostData(city_id)
}

fetchCityAndPostData = async (city_id) => {
try {
    const cityResponse = await axios.get(`/api/cities/${city_id}`)
    const postsResponse = await axios.get(`/api/cities/${city_id}/posts`)
    await this.setState({
        city: cityResponse.data,
        posts: postsResponse.data
    });
} catch(error) {
    console.log(error)
    await this.setState({error: error.message})
}

}


    render() {
        return (
            <CityContainer>
                <CityDetailsContainer>
                    <CityImage>
                        <img src={this.state.city.image} alt-text="{this.state.city.name}"/>
                        <h2>{this.state.city.name}</h2>
                    </CityImage>
                    <PostList posts={this.state.posts} city={this.state.city}/>
                </CityDetailsContainer>
            </CityContainer>
        );
    }
}

export default City;