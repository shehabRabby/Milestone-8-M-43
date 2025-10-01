import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetail = () => {
    const post = useLoaderData();
    return (
        <div className='mt-2 bg-amber-50 p-5'>
            <h2 className='text-2xl font-bold'>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
};

export default PostDetail;