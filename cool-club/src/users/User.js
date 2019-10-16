import React from 'react';

function User (props) {
    return (
        <div>
            <p className='username'>{props.username}</p>
        </div>
    )
}

export default User;