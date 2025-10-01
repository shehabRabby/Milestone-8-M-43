import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetail = () => {
    const post = useLoaderData();
    const navigate = useNavigate();
    return (
        <div className='mt-2 bg-amber-50 p-5'>
            <h2 className='text-2xl font-bold'>{post.title}</h2>
            <p>{post.body}</p>
            <button onClick={() => navigate(-1)} className='border-1 px-3'>Go Back</button>
        </div>
    );
};

export default PostDetail;