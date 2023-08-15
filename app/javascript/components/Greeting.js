import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Greeting = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    // Fetch random greeting from API endpoint
    axios.get('/api/random_greeting')
      .then(response => {
        setGreeting(response.data.greeting);
      })
      .catch(error => {
        console.error('Error fetching greeting:', error);
      });
  }, []);

  return (
    <div>
      <h1>Random Greeting</h1>
      <p>{greeting}</p>
    </div>
  );
};

export default Greeting;
