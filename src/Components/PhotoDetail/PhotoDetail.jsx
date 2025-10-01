import React from 'react';
import { useLoaderData } from 'react-router';

const PhotoDetail = () => {
    const imges = useLoaderData();
    const {id,title,url,thumbnailUrl} = imges;
    return (
        <div className='border-1 mt-2 p-4 bg-yellow-50 w-auto text-start'>
            <p>{id}</p>
            <p>{title}</p>
            <img className="w-64 h-auto mt-2" src={url} alt="Image" />         
            <img className="w-64 h-auto mt-2" src={thumbnailUrl} alt="Image" />         
        </div>
    );
};

export default PhotoDetail;