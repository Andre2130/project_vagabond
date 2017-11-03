import React from 'react'
import { Link } from 'react-router-dom'
import PostForm from './PostForm'
import styled from 'styled-components'

  const Button = styled.button`
    cursor: pointer;
    background: white;
       color: Black;
       font-size: 1em;
       margin: 1em;
       padding: 0.25em 1em;
       border: 2px solid black;
       border-radius: 3px;
       a{
           text-decoration: none;
           color: black;
       }
       &:hover{
        box-shadow: 1px 1px 2px;
    }
   `

const PostList = (props) => {
    return (
        <div>
           <Button> <Link to={`/cities/${props.city.id}/posts`}>add review for {props.city.name}</Link></Button>

            {props.posts.map((post) => {
                return (
                    <div>
                        <Link to={`/cities/${props.city.id}/posts/${post.id}`}>{post.title} </Link>
                    </div>
                )
            })}
        </div>
    );
};

export default PostList;