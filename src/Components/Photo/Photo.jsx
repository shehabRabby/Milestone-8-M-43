import React from 'react';
import { Link } from 'react-router';

const Photo = ({photo}) => {
    const{id,title} = photo;
    return (
        <div className='mt-2 bg-emerald-400 p-5'>
            <h2 className='text-black'>{title}</h2>
            <Link className='text-xl' to={`/albums/${id}`}>
            Show Image Details</Link>
        </div>
    );
};

export default Photo;