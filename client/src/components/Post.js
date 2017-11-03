import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios'
import Moment from 'react-moment';
import { Redirect, Link } from 'react-router-dom'
import EditForm from './EditForm'

const PostContainer = styled.div`
    display: flex;
    just-content: space-around;
    width: 95%;
    margin: 0 auto
`

const ImageContainer = styled.div`
    width: 55%;
    max-height: 600px
`

const Image = styled.img`
    width: 100%;
    max-height: 600px
`

const ReviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    width: 35%;
    min-height: 600px;
    box-shadow: 1px 1px 3px black;
`

const Input = styled.input`
font-family: "Oxygen", sans-serif;
	color: palevioletred;
	font-size: em;
	border: 2px solid palevioletred;
	border-radius: 3px;
`

const Buttons = styled.div`
    display: flex;
`

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
        } try {
            const { city_id } = this.props.match.params
            const response = await axios.get(`/api/cities/${city_id}`)
            this.setState({
                city: response.data
            })
            console.log(response.data)
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
                posts: response.data
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
        } catch (error) {
            console.log(error)
            await this.setState({ error: error.message })
        }
    }

    render() {
        if (this.state.redirectToCity === true) {
            return (
                <Redirect to={`/cities/${this.state.city.id}`} />
            )
        }

        if (!this.state.editPostDetails) {
            return (
                <div>
                    <br />
                    <br />
                    <br />
                    <PostContainer>
                        <ImageContainer>
                            <Image src={this.state.city.sketch_photo} alt='city photo' />
                        </ImageContainer>
                       
                        <ReviewContainer>
                            <strong>{this.state.posts.title}</strong>
                            <p>{this.state.posts.description}</p>
                            <p><Moment fromNow>{this.state.posts.created_at}</Moment></p>
                            <Buttons>
                                <Button onClick={this.toggleEditPost}>Edit</Button>
                                <Button onClick={() => {
                                    const a = window.confirm('Are You Sure?')
                                    if (a == true) {
                                        this.deletePost()
                                    }
                                }}>Delete Post</Button>
                                <Link to={`/cities/${this.state.posts.city_id}`}><Button>Back</Button></Link>
                            </Buttons>
                        </ReviewContainer>
                    </PostContainer>
                </div>

            )
        }
        else {
            return (
                <EditForm toggleEditPost={this.toggleEditPost} showPost={this.showPost} posts={this.state.posts} />
            )
        }
    }
}


export default Post;