import React from 'react'
import { useState } from 'react'
const App = () => {
const [num, setnum] = useState([10,20,30])
const [name, setname] = useState({name:'tanmay',age:21})
const btnClicked = () => {
  const newNum = [...num];
  newNum.push(100);
  setnum(newNum);

}

const updateName = () =>{
  setname(prev=>({...prev,age:prev.age+1}));
}

  return (
    <div>
      <h1>{name.name} , {name.age}</h1>
      <button onClick={updateName}>Click !</button>
    </div>
  )
}

export default App