import React from 'react'

import RightCardContent from './RightCardContent'
const RightCard = (props) => {
  return (
    <div  className='right-card h-full shrink-0 overflow-hidden relative w-1/3 rounded-4xl'>
        <img className='h-full w-full object-cover' src={props.img} alt="" />
        <RightCardContent id={props.id} tag={props.tag} color={props.color}/>
    </div>
  )
}

export default RightCard