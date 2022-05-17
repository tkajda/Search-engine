import React, { useEffect } from 'react'
import {useState} from 'react';
import axios from 'axios'


function App() {
  const [data, setData] = useState('')
  const [links, setLinks] = useState([]);

  const fetchData = () => {
    console.log(data)

    axios.get('http://localhost:80',
      {
        params: {data}
      }
    )
    .then(response => {
      console.log(response)
      setLinks(response.data)
    })
    .catch(error => {
      console.log(error)
    })
  }



  return (
    <div className="App">
      <h1>Wyszukiwarka</h1>
      <h2>Wprowadz fraze</h2>
      <input
        type = "text"
        value = {data}
        required
        onChange={(e) => setData(e.target.value)}/>
      <button onClick={fetchData}>Szukaj</button>
      <div>
      Znaleziono:
      {
        links.map(
          link => <div className="singleResult" key={link.id}>{link.url}</div>
        )
      }
      </div>

  
    </div>
  );
}

export default App;
