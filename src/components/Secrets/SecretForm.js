// src/components/Secrets/SecretForm.js
import React, { useState } from 'react';
import axios from 'axios';

const SecretForm = () => {
  const [secret, setSecret] = useState('');

  const handlePostSecret = async () => {
    try {
      const response = await axios.post('your_api_post_secret_url', { secret });
      // Handle successful secret post
    } catch (error) {
      console.error('Failed to post secret', error);
    }
  };

  return (
    <div>
      <h2>Post a Secret</h2>
      <textarea
        placeholder="Write your secret here..."
        onChange={(e) => setSecret(e.target.value)}
      />
      <button onClick={handlePostSecret}>Post Secret</button>
    </div>
  );
};

export default SecretForm;
