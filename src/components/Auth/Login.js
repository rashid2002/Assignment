import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleLogin = async () => {
    try {
      const response = await axios.post('your_api_login_url', credentials);
      const token = response.data.token;
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
