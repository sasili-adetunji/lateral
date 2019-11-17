import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Data from './Data';
import dotenv from 'dotenv';


dotenv.config();

function App() {

  const [date, setDate] = useState({ date: '' });
  const [data, setData] = useState({ data: [] });
  const [fields, setValues] = useState({text: ''});

  useEffect(() => {
    const fetchDate = async () => {
      const result = await axios ( process.env.REACT_APP_API_URL)
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
    const url = process.env.REACT_APP_API_URL + '/recommendations?' + fields.text
    const result = await axios.options(url, {})
    setData({
      ...data,
      data: result.data
    })
  }

  return (
    <div className="container">
    <h2> Welcome to similar text recommendations</h2>
    <hr/>
    <h4> <time> {date.message} </time> </h4>
    <hr/>
    <h3>Type a text</h3>
    <form onSubmit={handleSubmit}>
      <div class="form-row">
        <div class="col">
          <input className="form-control"
            id="text"
            autoFocus
            type="text"
            value={fields.text}
            onChange={handleFieldChange}
          />
        </div>
        <div class="col">
          <button className="btn btn-primary" type="submit">
          Submit
          </button>
        </div>
      </div>
    </form>
      <Data documents={data.data} />
    </div>
  );
}

export default App;
