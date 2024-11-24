import { useState } from 'react'

import './App.css'

function App() {
  
  const [cnt,setcnt]=useState(0);
  return (
    <div>
        <h1>Counter: {cnt}</h1>
        <button onClick={handleInc} >Click me to inc</button>
        <button onClick={handleDec} >Click me to dec</button>
        
    </div>
  )
  function handleInc(){
    setcnt(cnt+1);
  }
    function handleDec(){
    setcnt(cnt-1);
  }
}

export default App
