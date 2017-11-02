import React from 'react'
import { Link } from 'react-router-dom'
import PostForm from './PostForm'

const PostList = (props) => {
    return (
        <div>
            <Link to={`/cities/${props.city.id}/posts`}>Add A Post</Link>

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