import React from 'react';
import { Link } from 'react-router';

const Post = ({post}) => {
    const {id,title} = post;
    return (
        <div className='bg-cyan-700 p-4 mt-2 text-white'>
            <h3>{title}</h3>
            <Link to={`/posts/${id}`}><button className='border-1 my-1 px-3'>Show Details</button></Link>
        </div>
    );
};

export default Post;