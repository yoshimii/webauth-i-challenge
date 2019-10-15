import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [logUser, setLogin] = useState({username:'', password:''});
  const [regUser, setRegister] = useState({username:'', password:''});
  
  const handleRegisterChange = e => {
    setRegister({ ...regUser, [e.target.name]: e.target.value })
  }

  const handleLoginChange = e => {
    setLogin({ ...logUser, [e.target.name]: e.target.value })
  }

  const registerUser = e => {
    e.preventDefault();
    axios.post('http://localhost')
  }

  return (
    <div className="App">
      <h2>Registered Users</h2>,
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
        <button>Register</button>
        
      </form>,
      <form onSubmit={loginUser}>
      <input
        type='text'
        placeholder='enter a username'
        value={logUser.username}
        onChange={handleRegisterChange}
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
        <button>Log in</button>
      </form>
    </div>
  );
}

export default App;
