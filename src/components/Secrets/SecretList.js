// src/components/Secrets/SecretList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SecretList = () => {
  const [secrets, setSecrets] = useState([]);

  useEffect(() => {
    const fetchSecrets = async () => {
      try {
        const response = await axios.get('your_api_get_secrets_url');
        setSecrets(response.data.secrets);
      } catch (error) {
        console.error('Failed to fetch secrets', error);
      }
    };

    fetchSecrets();
  }, []);

  return (
    <div>
      <h2>Secrets</h2>
      <ul>
        {secrets.map((secret, index) => (
          <li key={index}>{secret}</li>
        ))}
      </ul>
    </div>
  );
};

export default SecretList;
