import React, { useEffect } from 'react'
import {useState} from 'react';
import axios from 'axios'

function App() {
    const [data, setData] = useState('');
    const [results, setResults] = useState('');

    var cors = require('cors')
    const sendData = (e) => {
        e.preventDefault();
        console.log(data);
        axios.get('http://localhost:8042',
        {
            params: data
        }
        )
        .then( res => {
            console.log(res)
            setResults(res.data)
        })
        .catch(error => {
          console.log(error);
        });
        console.log('data was sent')
      }


    return ( <div> 
        <h1>Wyszukiwarka</h1>
        <h2>Wprowadz haslo</h2>

        <input 
        type="text" 
        required
        value = {data}
        onChange={(e)=> setData(e.target.value)}>

        </input>

        <button type="submit" onClick={e => sendData(e)}>Szukaj</button>
    </div>)
    }

    export default App;