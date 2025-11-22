import React from 'react'
import { useState } from 'react'
import { X } from 'lucide'
const App = () => {
  const [title, settitle] = useState('')
  const [content, setcontent] = useState('')

  const [note, setnote] = useState([])

  const submitHandler = e => {
    console.log({ title })
    console.log({ content })
    e.preventDefault()
    const cpynote = [...note]

    cpynote.push({ title, content })
    setnote(cpynote)

    settitle('')
    setcontent('')
  }

const deleteNote=(idx)=>{
  console.log(idx);
  const cpynote = [...note]
  cpynote.splice(idx,1)
  setnote(cpynote);
}


  return (
    <div className=' h-screen bg-amber-200 text-amber-950 lg:flex'>
      <form
        onSubmit={e => {
          submitHandler(e)
        }}
        className='flex gap-4 lg:w-1/2 p-10 flex-col items-start'
      >
        <h1 className='text-2xl text-center font-bold'>Add Notes</h1>
        {/* first input */}
        <input
          type='text'
          placeholder='Notes Heading'
          className='px-5 w-full font-medium py-2 border-2 outline-none rounded'
          value={title}
          onChange={e => {
            settitle(e.target.value)
          }}
        />
        {/* 2nd input  */}
        <textarea
          type='text'
          className='px-5 py-2 h-32 font-medium flex items-start flex-row w-full border-2 rounded'
          placeholder='enter notes ...'
          value={content}
          onChange={e => {
            setcontent(e.target.value)
          }}
        />
        <button className=' active:scale-95  bg-amber-500 font-medium w-full px-5 py-2 rounded'>
          Note it !
        </button>
      </form>

      <div className='lg:w-1/2 bg-amber-300 p-10'>
        <h1 className='text-2xl text-center font-bold'>Your Notes</h1>
        <div className='flex flex-wrap gap-5 mt-5  overflow-auto'>
          {note.map(function(e, idx){
            return (
              <div
                key={idx}
                className=' relative h-52 p-4 w-44 rounded bg-amber-500'
              >
                <button onClick={()=>{
                    deleteNote(idx);
                }} className='active:scale-95 absolute top-5 right-5 text-amber-200 bg-amber-800 py-2 px-3 text-xs'> X </button>
                <h3 className='text-xl font-bold wrap-break-word'>{e.title}</h3>
                <p className='mt-2 font-medium wrap-break-word'>{e.content}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App
