import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components';
import { Redirect } from 'react-router-dom'

class EditForm extends Component {
    state = {
        updatedPost: {
            title: '',
            description: ''
        }, 
        redirectToPost: false,
        id: ''
    }
componentWillMount(){
    this.setState({updatedPost: this.props.post})
}

    handleChange = (event, id) => {
        const attribute = event.target.name
        const updatedPost = { ...this.state.updatedPost }
        updatedPost[attribute] = event.target.value
        this.setState({ updatedPost })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const  { city_id } = this.state.match.params
        const { id } = this.state.updatedPost.id
        const clonedPost = {...this.state.updatedPost}
        const response = await axios.patch(`/api/cities/${city_id}/posts/${id}`, {
            post: clonedPost
        })
        this.setState({updatedPost: response.data, redirectToPost: true })

    }


    render() {
        if (this.state.redirectToPost === true) {
            const { city_id } = this.props.match.params
            const { id } = this.state.updatedPost.id
            return (
            <Redirect to = {`/cities/${city_id}/posts/${id}`} />
            )
        }


        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input onChange={this.handleChange} name='title' type="text" value={this.props.post.title} />
                    </div>
                    <div>
                        <input onChange={this.handleChange} name='description' type="text" value={this.props.post.description} />
                    </div>
                    <div>
                        <button>Edit Post</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default EditForm;