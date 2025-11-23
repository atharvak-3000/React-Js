import React from 'react'

const App = () => {

  const user = {
    name:'Atharva',
    age:'20',
    location:'1.1.1.1'
  }

  localStorage.setItem('user',JSON.stringify(user));

  const getUser = JSON.parse(localStorage.getItem('user'));

  console.log(getUser);
  
  return (
    <div>App</div>
  )
}

export default App