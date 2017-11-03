import React, { Component } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import styled from 'styled-components'

const FormContainer = styled.div`
font-family: "Oxygen", sans-serif;
 padding-top: 80px;
padding-bottom: 80px;
/* border: solid black 2px; */
max-width: 700px;
max-height: 500px;
margin: 0 auto;
/* pading: 0 1rem;  */
text-align: center;
background-color: white;
border-radius: 5px;
max-width: 400px;
max-height: 400px;
margin: 20px auto;
border: 1px solid rgba(87, 87, 87, .2); 
 box-shadow: .5px .5px .5px .5px;
`

const Input = styled.input.attrs({
    
	margin: props => props.size || '1em',
	padding: props => props.size || '2em'
})`
	color: black;
    font-family: "Oxygen", sans-serif;
	font-size: em;
	border: 2px solid black;
	border-radius: 3px;

    margin: ${props => props.margin};
	padding: ${props => props.padding};
`

const TextArea = styled.textarea.attrs({
    
	margin: props => props.size || '.5em',
	padding: props => props.size || '.5em'
})`
	color: black;
    font-family: "Oxygen", sans-serif;
	font-size: 0.75em;
	border: 2px solid black;
	border-radius: 3px;

    margin: ${props => props.margin};
	padding: ${props => props.padding};
`


const Button = styled.button`
cursor: pointer;
 background: white;
	color: Black;
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid black;
	border-radius: 3px;
    &:hover{
        box-shadow: 1px 1px 2px;
    }
`




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
            <FormContainer>
                <form onSubmit={this.handleSubmit}>
                <h2>New Post</h2>
                    <div>
                        <Input onChange={this.handleChange} 
                        placeholder='Title' 
                        name='title' 
                        type="text" 
                        value={this.state.newPost.title} 
                        size="2em"/>
                    </div>
                    <div>
                     <TextArea onChange={this.handleChange} 
                     placeholder='Description' 
                     name='description' 
                     type="text" 
                     value={this.state.newPost.description} 
                     size="4em"/> 

                    </div>
                    <div>
                        <Button>Submit New Post</Button>
                    </div>
                </form>
            </FormContainer>
        )
    }
}

export default PostForm