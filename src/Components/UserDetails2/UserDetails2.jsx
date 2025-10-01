import React, { use } from 'react';

const UserDetails2 = ({userPromise}) => {
    const {name,username} = use(userPromise)
    return (
        <div className='border-1 bg-cyan-100 p-2 my-2 ml-50'>
            <p>userName: {username}</p>
            <p>{name}</p>
        </div>
    );
};

export default UserDetails2;