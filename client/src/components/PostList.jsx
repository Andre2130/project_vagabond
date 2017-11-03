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
   const Post = styled.div`
   background-color:white;
   width:50%;
   margin:auto;
   height:100px;
   padding: 20px;
   font-size:70px;
   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
   border-radius: 25px;
   `
const PostList = (props) => {
    return (
        <div>
           <Button> <Link to={`/cities/${props.city.id}/posts`}>add review for {props.city.name}</Link></Button>
            {props.posts.map((post) => {
                return (
                    <div>
                  <Post src={props.city.image}> <Link to={`/cities/${props.city.id}/posts/${post.id}`}>{post.title} </Link></Post><br />
                    </div>
                )
            })}
        </div>
    );
};
export default PostList;