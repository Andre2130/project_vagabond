import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios'


const PostContainer = styled.div`

`


class Post extends Component  {
    state = {
        post: {}
    }

    async componentWillMount() {
     try {   const { id, city_id } = this.props.match.params
        const response = await axios.get(`/api/cities/${city_id}/posts/${id}`)
        await this.setState({
            post: response.data
        })
    } catch(error) {
        console.log(error)
        await this.setState({error: error.message})
    }
}



render() {
    return (
        <PostContainer>
                <strong>{this.state.post.title}</strong>
                <p>{this.state.post.description}</p>
                <p>{this.state.post.created_at}</p>
                <button>Edit This Post</button>

        </PostContainer>
    )
    }
}

export default Post;