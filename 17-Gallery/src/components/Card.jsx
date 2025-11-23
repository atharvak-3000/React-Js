import React from 'react'

const Card = (props) => {
  return (
    <div>
        <a href={props.elem.url} target='_blank'>
      <div className='h-52 w-56 overflow-hidden bg-white rounded-xl' key={props.idx}>
      <img className='h-full w-full object-cover' src={props.elem.download_url} alt="" />
    </div>
    <h3 className='font-bold text-lg'>{props.elem.author}</h3>
    </a>
    </div>
  )
}

export default Card