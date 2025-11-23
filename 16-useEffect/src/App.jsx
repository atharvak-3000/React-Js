import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const App = () => {

  const [num1, setnum1] = useState(0);
  const [num2, setnum2] = useState(0);

  useEffect(function(){
    console.log('useEffect Running ...');
  },[num1])


  return (
    <div className='parent'>
      <h1>UseEffect Hook will run when num1 updates !</h1>
      <button onClick={function(){
        setnum1(num1+1);
      }}>num1 : {num1}</button>

      <button onClick={function(){
        setnum2(num2+1);
      }}>num2 : {num2}</button>
    </div>
  )
}

export default App