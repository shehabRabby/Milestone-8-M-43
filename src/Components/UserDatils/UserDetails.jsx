import React from 'react';

import { useLoaderData, useParams } from 'react-router';

const UserDetails = () => {

    const user = useLoaderData();
    const {userID} = useParams();
    console.log(userID)

    // const params = useParams();
    // console.log(params)



    const {website,name} = user;
    return (
        <div className='border-1 bg-amber-200 p-10'>
            <p>User Details Here</p>
            <h2>Name: {name}</h2>
            <h2>Website: {website}</h2>
        </div>
    );
};

export default UserDetails;