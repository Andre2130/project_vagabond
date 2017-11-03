import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components';
import { Redirect } from 'react-router-dom'

const FormContainer = styled.div`
font-family: "Oxygen", sans-serif;
 padding-top: 100px;
padding-left: 50px; 
/* border: solid black 2px; */
max-width: 700px;
max-height: 500px;
margin: 0 auto;
/* pading: 0 1rem;  */
text-align: center;
`

const Input = styled.input.attrs({
    
	margin: props => props.size || '1em',
	padding: props => props.size || '.5em'
})`
	color: black;
    font-family: "Oxygen", sans-serif;
	font-size: em;
	border: 2px solid gray;
	border-radius: 3px;

    margin: ${props => props.margin};
	padding: ${props => props.padding};
`


class EditForm extends Component {
    state = {
        updatedPost: {
            title: '',
            description: ''
        },
        redirectToPost: false
    }

    componentWillMount() {
        this.setState({ updatedPost: this.props.post })
    }

    handleChange = (event) => {
        const attribute = event.target.name
        const updatedPost = { ...this.state.updatedPost }
        updatedPost[attribute] = event.target.value
        this.setState({ updatedPost: updatedPost })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const city_id = this.state.updatedPost.city_id
        const id = this.state.updatedPost.id
        const clonedPost = { ...this.state.updatedPost }
        const response = await axios.patch(`/api/cities/${city_id}/posts/${id}`, {
            post: clonedPost
        })
        await this.props.showPost()
        this.props.toggleEditPost()
        this.setState({ updatedPost: response.data, redirectToPost: true })
    }

    render() {
        if (this.state.redirectToPost === true) {
            const city_id = this.state.updatedPost.city_id
            const id = this.state.updatedPost.id
            return (
                <Redirect to={`/cities/${city_id}/posts/${id}`} />
            )
        }
        return (
            <FormContainer>
                <form onSubmit={this.handleSubmit}>
                <h2>Edit {this.props.post.title}</h2>
                    <div>
                        <Input onChange={this.handleChange} 
                        name='title' 
                        type="text" 
                        placeholder={this.props.post.title} size="2em" />
                    </div>
                    <div>
                        <Input onChange={this.handleChange} 
                        name='description' 
                        type="text" 
                        placeholder={this.props.post.description}
                        size="4em"/>
                    </div>
                    <div>
                        <button>Update Post</button>
                    </div>
                </form>
            </FormContainer>
        )
    }
}
export default EditForm;