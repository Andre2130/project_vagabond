import React from 'react';
import { Link } from 'react-router-dom'

const PostList = (props) => {
    return (
        <div>
            {props.posts.map((post) => {
                return(
                    <div>
                       <Link to={`/cities/${props.city.id}/posts/${post.id}`}>{post.title} </Link>
                    
                    </div>

                )
            })}
            
        </div>
    );
};

export default PostList;