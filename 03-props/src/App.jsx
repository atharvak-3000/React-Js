import React from 'react'
import Card from './components/Card'
const App = () => {
  return (
    <div className='parent'>
      <Card user='Monalisa' age={18} img="https://plus.unsplash.com/premium_photo-1763265290495-832e6ec495a7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card user='Lonamisa' age={19} img={"https://images.unsplash.com/photo-1762793193663-cc343d78111c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D"}/>
    </div>
  )
}

export default App