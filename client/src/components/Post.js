import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import EditForm from './EditForm'

const PostContainer = styled.div`
`

class Post extends Component {
    state = {
        city: {},
        post: {
            title: '',
            description: ''
        },
        editPostDetails: false,
        // redirectToPost: false,
        redirectToCity: false
    }

    async componentWillMount() {
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

    // handleChange = (event, id) => {
    //     const attribute = event.target.name
    //     const updatedPost = {...this.state.post}
    //     updatedPost[attribute] = event.target.value
    //     this.setState({ post: updatedPost })
    // }

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


    deletePost = async (post) => {
      try { 
        const { city_id, id } = this.props.match.params
        const response = await axios.delete(`/api/cities/${city_id}/posts/${id}`)
        this.setState({ 
            post: response.data, 
            redirectToCity: true,
            city: response.data
         })

        console.log(response.data)
    } catch (error) {
        console.log(error)
        await this.setState({ error: error.message })
    }
}



    render() {
        // if (this.state.redirectToCity){
        //     return (
        //         <Redirect to={`/cities/${this.state.post.city_id}`} />
        //     )
        // }

        // if (this.state.redirectToPost) {
        //     return (
        //        <Redirect to={`/cities`} />
        //     )
        // }
    
        if (!this.state.editPostDetails){
            return (
                <PostContainer>
                    <strong>{this.state.post.title}</strong>
                    <p>{this.state.post.description}</p>
                    <p>{this.state.post.created_at}</p>
                    <button onClick={this.toggleEditPost}>Edit</button>
                    <button onClick={this.deletePost}>Delete Post</button>
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