import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'

const App = () => {
  const users = [
  {
    img: 'https://images.unsplash.com/photo-1543842598-80e757a668d8?q=80&w=693&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro: '',
    tag: 'Satisfied',
    color: '#FF6B6B' // Red-ish
  },
  {
    img: 'https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29ya2luZyUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
    intro: '',
    tag: 'Underserved',
    color: '#4ECDC4' // Aqua
  },
  {
    img: 'https://images.unsplash.com/photo-1507206130118-b5907f817163?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29ya2luZyUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
    intro: '',
    tag: 'Underbanked',
    color: '#FFD93D' // Yellow
  },
  {
    img: 'https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29ya2luZyUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
    intro: '',
    tag: 'Underserved',
    color: '#9B5DE5' // Purple
  },
  {
    img: 'https://images.unsplash.com/photo-1507206130118-b5907f817163?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29ya2luZyUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D',
    intro: '',
    tag: 'Underbanked',
    color: '#00BBF9' // Blue
  }
];


  return (
    <>
      <Section1 users={users} />
      <Section2 />
    </>
  )
}

export default App
