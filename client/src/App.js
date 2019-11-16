import React, { useState, useEffect } from 'react';
// import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Form from 'react-bootstrap/Form'


import axios from 'axios';


import './App.css';

function App() {

  const [date, setDate] = useState({ date: '' });

  useEffect(() => {
    const fetchDate = async () => {
      const result = await axios (
          'http://localhost:8000');
    setDate(result.data);
    };
    fetchDate()
  }, []);

  const [fields, setValues] = useState({
    text: "",
  });

  const handleFieldChange = (e) => {
    e.preventDefault()
    setValues({
      ...fields,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const url = 'http://localhost:8000/recommendations?' + fields.text
    const result = await axios.options(url, {})
    console.log(result.data)
  }

  return (
    <div className="App">
    <h1> Welcome to recommendations</h1>
    <h2> {date.message}</h2>
    <form onSubmit={handleSubmit}>
        <Form.Group controlId="text">
          <Form.Control
            autoFocus
            type="text"
            value={fields.text}
            onChange={handleFieldChange}
          />
        </Form.Group>
        <button type="submit">
        Submit
        </button>

      </form>
    </div>
  );
}

export default App;
