import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'
import EditForm from './EditForm'

const PostContainer = styled.div`
padding-top: 100px;
text-align: center;
`
const Input = styled.input`
font-family: "Oxygen", sans-serif;
	color: palevioletred;
	font-size: em;
	border: 2px solid palevioletred;
	border-radius: 3px;
`
	// margin: ${props => props.margin};
	// padding: ${props => props.padding};

    const Button = styled.button`
    background: white;
   color: black;
   font-size: 1em;
   margin: 1em;
   padding: 0.25em 1em;
   border: 2px solid black;
   border-radius: 3px;
   &:hover{
        box-shadow: 1px 1px 2px;
    }
`
   



class Post extends Component {
    state = {
        city: {},
        posts: [],
        editPostDetails: false,
        redirectToCity: false
    }

    async componentWillMount() {
        try {
            const { id, city_id } = this.props.match.params
            const response = await axios.get(`/api/cities/${city_id}/posts/${id}`)
            await this.setState({
                posts: response.data
            })
        } catch (error) {
            console.log(error)
            await this.setState({ error: error.message })
        }
    }

    showPost = async () => {
        try {
            const { id, city_id } = this.props.match.params
            const response = await axios.get(`/api/cities/${city_id}/posts/${id}`)
            await this.setState({
                post: response.data
            })
        } catch (error) {
            console.log(error)
            await this.setState({ error: error.message })
        }
    }

    toggleEditPost = () => {
        this.setState({ editPostDetails: !this.state.editPostDetails })
    }


    deletePost = async () => {
      try { 
        const { city_id, id } = this.props.match.params
        const response = await axios.delete(`/api/cities/${city_id}/posts/${id}`)
        this.setState({ 
            city: response.data,
            redirectToCity: true,
         })

        console.log(response.data)
    } catch (error) {
        console.log(error)
        await this.setState({ error: error.message })
    }
}



    render() {
        if (this.state.redirectToCity === true){
            return (
                <Redirect to={`/cities/${this.state.city.id}`} />
            )
        }
    
        if (!this.state.editPostDetails){
            return (
                <PostContainer>
                    <strong>{this.state.posts.title}</strong>
                    <p>{this.state.posts.description}</p>
                    <p>{this.state.posts.created_at}</p>
                    <Button onClick={this.toggleEditPost}>Edit</Button>
                    <Button onClick={this.deletePost}>Delete Post</Button>
                    <Link to={`/cities/${this.state.posts.city_id}`}><Button>Back</Button></Link>
                </PostContainer>
            )
        }
        else {
            return (
                <EditForm toggleEditPost={this.toggleEditPost} showPost={this.showPost} post={this.state.post} />
            )
        }
    }
}


export default Post;