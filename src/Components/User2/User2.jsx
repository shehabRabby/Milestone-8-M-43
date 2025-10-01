import React, { use } from 'react';
import UserData from '../UserData.jsx/UserData';

const User2 = ({userPromise}) => {
    const users = use(userPromise);
    // console.log(users);
    return (
        <div>
            <h2>This is lnside loading</h2>
            <div>
                {
                    users.map(users => <UserData key={users.id} users={users}></UserData>)
                }
            </div>
        </div>
    );
};

export default User2;