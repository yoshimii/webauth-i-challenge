import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import User from './User';

function UserList() {
const [ users, setUsers ] = useState();

useEffect (() => {
    Axios.get('http://localhost:4000/api/restricted/users')
        .then(users => {
            setUsers(users.data)
        })
        .catch(err => {
            console.log(err);
        })
})

if(!users) {
    return <p>Loading users</p>
}
    return (
        <>
        {users.map(user => {
           return <User username={user.username} />
        })}
        </>
    )
}

export default UserList;