import React from 'react';

const PostList = (props) => {
    return (
        <div>
            {props.posts.map((post) => {
                return(
                    <div>
                    <h1>{post.title}</h1>
                    <h3>{post.description}</h3>
                    <p>{post.created_at}</p>
                    </div>
                )
            })}
            
        </div>
    );
};

export default PostList;