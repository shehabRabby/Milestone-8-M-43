import React from 'react';
import { useLoaderData } from 'react-router';

const User = () => {
    const users = useLoaderData();
    console.log(users);
    return (
        <div>
            <h2 className='text-2xl font-semibold'>This is User Section</h2>
        </div>
    );
};

export default User;