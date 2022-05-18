import React, { useEffect } from 'react'
import {useState} from 'react';
import axios from 'axios'


function App() {
  const [data, setData] = useState('')
  const [linkData, setLinkData] = useState([{}]);

  // useEffect(() => {
      
  // }, [])

  const fetchData = () => {
    console.log(1)
    fetch("/search", {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(data)
      }).then(
        (res) => res.json()
    ).then(
      (links) => {
          setLinkData(links)
          console.log(links)
        }
    )

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
        {(typeof linkData.links === 'undefined') ? (
            <p></p>
        ) :   (
        linkData.links.map(
          link => <div className="singleResult" >{link.link}</div>
        ))
        }

      
      </div>

  
    </div>
  );
}

export default App;
