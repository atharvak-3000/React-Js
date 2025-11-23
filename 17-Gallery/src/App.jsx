import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';
import Card from './components/Card';


const App = () => {

const [userData, setUserData] = useState([]);
const [index, setindex] = useState(0)
const getData=async()=>{
  const res = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=12`);
  setUserData(res.data);
}

useEffect(function(){
  getData()
},[index])

let printUserData = <h3 className='text-gray-400'>
  Loading...
</h3>

if(userData.length>0){
  printUserData = userData.map(function(elem,idx){
    return <div key={idx}>
      <Card key={idx} elem={elem}/>
    </div> 
  })
}

  return (
    <div className='bg-black m-auto h-screen overflow-auto  p-4 text-white'>
      <h1 className='text-4xl fixed'>
        {/* {index} */}
      </h1>
       <div className='flex  flex-wrap justify-center gap-4 m-auto'>
          {printUserData}
       </div>
      <div className='flex justify-center gap-6 items-center p-4'>
        <button 
        style={{opacity:index==1?0.6:1}}
        onClick={()=>{
          console.log('prev');
          if(index>1){
            setindex(index-1)
            setUserData([])
          }
          
        }}
        className='bg-amber-300 cursor-pointer active:scale-95 text-black font-bold rounded px-4 py-2'>Prev</button>
        <h3>Page {index}</h3>
        <button
        onClick={()=>{
          console.log('next')
          setindex(index+1)
          setUserData([])
        }}
         className='bg-amber-300 cursor-pointer active:scale-95 text-black rounded font-bold px-4 py-2'>Next</button>
      </div>

    </div>
  )
}

export default App