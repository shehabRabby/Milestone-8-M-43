import React from 'react';
import { Link } from 'react-router';

const UserData = ({users}) => {
    const {id,name,email,phone,website} = users;

    return (
        <div className='border-1 p-4 bg-blue-200 m-2 text-start grid grid-cols-2'>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>Website: {website}</p>
            <p><small>Phone: {phone}</small></p>
            <Link className='text-blue-700 font-bold' to={`/UserData/${id}`}>Show Details</Link>
        </div>
    );
};

export default UserData;