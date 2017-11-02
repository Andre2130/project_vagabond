import React, { Component } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import styled from 'styled-components'

class PostForm extends Component {

    state = {
        newPost: {
            title: '',
            description: ''
        },
        redirectToPostList: false,
        newPostId: ''
    }

    handleChange = (event) => {
        const attribute = event.target.name
        const updatedPost = { ...this.state.newPost }
        updatedPost[attribute] = event.target.value
        this.setState({ newPost: updatedPost })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const { city_id } = this.props.match.params
        const emptyForm = {
            title: '',
            description: ''
        }
        const response = await axios.post(`/api/cities/${city_id}/posts`, {
            post: this.state.newPost
        })
        this.setState({ redirectToPostList: true, newPostId: response.data._id, newPost: emptyForm })
    }


    render() {

        if (this.state.redirectToPostList === true) {
            const { city_id } = this.props.match.params
            return (
            <Redirect to = {`/cities/${city_id}`} />
            )
        }
        
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input onChange={this.handleChange} placeholder='Title' name='title' type="text" value={this.state.newPost.title} />
                    </div>
                    <div>
                        <input onChange={this.handleChange} placeholder='Description' name='description' type="text" value={this.state.newPost.description} />
                    </div>
                    <div>
                        <button>Submit New Post</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default PostForm