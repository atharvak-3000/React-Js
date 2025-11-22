import React, { useState } from 'react'

const App = () => {
  const [cnt, setcnt] = useState(0)

  function inc () {
    setcnt(cnt + 1)
  }
  function dec () {
    setcnt(cnt - 1)
  }

  return (
    <div className='counter'>
      <h1>{cnt}</h1>
      <div className='btn'>
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
      </div>
    </div>
  )
}

export default App
