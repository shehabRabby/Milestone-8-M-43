import React from 'react';
import { useLoaderData } from 'react-router';
import Post from '../Post/Post';

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div className='p-4 bg-cyan-400 m-2 text-start '>
            <h2 className='font-semibold text-white'>This are my post: {posts.length}</h2>
            <div>
                {
                    posts.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;