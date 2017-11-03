import React from 'react'
import { Link } from 'react-router-dom'
import PostForm from './PostForm'
import styled from 'styled-components'

const Post= styled.div`
border:solid;
width:50%;
padding:50px;
text-align:center;
margin:auto;
position: relative;
background-image: url("https://media.mnn.com/assets/images/2017/08/new-moon-dark-sky.jpg.838x0_q80.jpg");
font-size:50px;
height:200px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const PostList = (props) => {
    return (
        <div>
           <button><Link to={`/cities/${props.city.id}/posts`}>Add A Post</Link></button>

            {props.posts.map((post) => {
                return (
                    <div>
                    <Post><Link to={`/cities/${props.city.id}/posts/${post.id}`}>{post.title} </Link></Post><br />
                    </div>
                )
            })}
        </div>
    );
};

export default PostList;