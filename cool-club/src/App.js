import React, { useState, useEffect, setState } from 'react';
import Axios from 'axios';
import logo from './logo.svg';
import './App.css';
import { Route, Link } from 'react-router-dom';
import UsersList from './users/UsersList';
import User from './users/User';
import UserList from './users/UsersList';

function App() {
  const [logUser, setLogin] = useState({username:'', password:''});
  const [regUser, setRegister] = useState({username:'', password:''});
  const [users, setUsers] = useState()
  
  const handleRegisterChange = e => {
    setRegister({ ...regUser, [e.target.name]: e.target.value })
  }

  const handleLoginChange = e => {
    setLogin({ ...logUser, [e.target.name]: e.target.value })
  }


  const clearState = e => {
    setRegister({username: '', password: ''})
    setLogin({username: '', password: ''})
  }
  const registerUser = e => {
    e.preventDefault();
    Axios.post('http://localhost:4000/api/register', regUser)
      .then(_=> clearState())
      .then(_=> <UserList/>)
      .then(user => console.log(`successful registration`))
      .catch(err => {
        'no user has been registered'
      })
  }

  const loginUser = e => {
    e.preventDefault();
    Axios.post('http://localhost:4000/api/login', logUser)
      .then(_=> <UserList/>)
      .then(_=> clearState())
      .then(user=> console.log(`user ${logUser.username} has successfully logged in.`))
      .catch(err => {
        'no user has been logged in'
      })
  }

  

  return (
    <div className="App">
      <h2>Registered Users</h2>
      <form onSubmit={registerUser}>
        <input
        type='text'
        placeholder='enter username'
        value={regUser.username}
        onChange={handleRegisterChange}
        name='username'
        >
        </input>
        <input
        type='text'
        placeholder='enter password'
        value={regUser.password}
        onChange={handleRegisterChange}
        name='password'
        >
        </input>
        <button><Link to="/users">Register</Link></button>
        
      </form>
      <form onSubmit={loginUser}>
      <input
        type='text'
        placeholder='enter a username'
        value={logUser.username}
        onChange={handleLoginChange}
        name='username'
        >
        </input>
        <input
        type='text'
        placeholder='enter a password'
        value={logUser.password}
        onChange={handleLoginChange}
        name='password'
        >
          </input>
        <button><Link to="/users">Log in</Link></button>
      </form>
      <Route path='/users' component={UsersList}/>
    </div>
  );
}

export default App;
