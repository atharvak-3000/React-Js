import React from 'react'

const App = () => {

  // function btnClicked(){
  //     console.log('button is clicked !')
  // }

  // function onScroll(elem){
  //   if(elem>0){
  //     console.log("UP");
  //   }else{
  //     console.log("Down");
  //   }
  // }
  return (
    <div onWheel={(elem)=>{
      onScroll(elem.deltaY);
    }}>
      {/* <input onChange={(elem)=>{
        console.log(elem.target.value)
      }} type="text" /> */}

      {/* <div id="page1"></div>
      <div id="page2"></div>
      <div id="page3"></div> */}
    </div>
  )
}

export default App