import React from 'react';
import axios from 'axios';
import { useState } from 'react';


const App = () => {


  const [user, setuser] = useState([]);



  //  const getData = async () => {
  //   const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  //   const data = await res.json();
  //   console.log(data);
  // }

  const getData = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    setuser(res.data);
  }

  
  return (
    <div>
      <button onClick={getData}>Get Data !</button>
      <div>
          {user.map(function(e,idx){
            return <div><h3>{e.id}</h3>
            <p>{e.name}</p></div>
          })}
      </div>
    </div>
  )
}

export default App