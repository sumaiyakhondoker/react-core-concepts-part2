import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'



function App() {

  function handleClick(){
    alert('button clicked')
  }

  const handleClick2=()=>{
    alert('btn2 clicked')
  }
  const addToFive=(num)=>{
    alert(num + 5)
  }


  return (
    <>
      
      <h2>React core concepts 2</h2>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>click2</button>
      <button onClick={()=>{alert('third clicked')}}>Third</button>

      <button onClick={()=> addToFive(3)}>four</button>


















      {/* <Friends></Friends> */}
      {/* <Users></Users> */}
      {/* <Team></Team> */}
      {/* <Counter></Counter> */}
     
      
    </>
  )
}

export default App
