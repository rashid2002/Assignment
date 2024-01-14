// src/components/Auth/Register.js
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [user, setUser] = useState({ username: '', password: '' });

  const handleRegister = async () => {
    try {
      const response = await axios.post('your_api_register_url', user);
      // Handle successful registration
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
