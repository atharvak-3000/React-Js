import React from 'react'
import {MoveRight} from 'lucide-react'
const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between'>
            <h2 className='bg-white text-2xl font-semibold rounded-full h-14 w-14 flex justify-center items-center'>{props.id + 1}</h2>
            <div>
                <p className='text-shadow-2xs font-light text-white pb-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque et voluptatem perspiciatis sed deserunt!</p>
                <div className='flex justify-between'>
                    <button style={{backgroundColor:props.color}} className='text-white font-medium px-8 py-2 rounded-full '>{props.tag}</button>
                    <button style={{backgroundColor:props.color}} className='text-white font-medium px-2 py-2 rounded-full'><MoveRight size={23} strokeWidth={1.75} /></button>
                </div>
            </div>
        </div>
  )
}

export default RightCardContent