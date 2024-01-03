import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5300/api', {
        username: username,
        userCode: password,
      });
      
      if (response.data.authenticated) {
        console.log('Authentication failed.');
      } else {
        console.log('Authentication successful!');
        navigate('/Home');
        // טיפול במצב בו האימות נכשל
      }
    } catch (error) {
      console.error('Error occurred during authentication:', error);
      // טיפול בשגיאה במידה וקיימת
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
