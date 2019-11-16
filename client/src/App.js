import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Data from './Data'
import Form from 'react-bootstrap/Form'


function App() {

  const [date, setDate] = useState({ date: '' });
  const [data, setData] = useState({ data: [] });
  const [fields, setValues] = useState({text: ''});

  useEffect(() => {
    const fetchDate = async () => {
      const result = await axios (
          'http://localhost:8000');
    setDate(result.data);
    };
    fetchDate()
  }, []);


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
    setData({
      ...data,
      data: result.data
    })
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
        <button className="col-md-3 btn btn-primary" type="submit">
        Submit
        </button>
      </form>
      <Data data={data.data} />
    </div>
  );
}

export default App;
