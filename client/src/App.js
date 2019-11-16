import React, { useState, useEffect } from 'react';
import axios from 'axios';


import './App.css';

function App() {

  const [data, setData] = useState({ date: '' });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios (
          'http://localhost:8000');
    setData(result.data);
    };
    fetchData()
  }, []);

  return (
    <div className="App">
    <h1> Welcome to recommendations</h1>
    <h2> {data.message}</h2>
    </div>
  );
}

export default App;
