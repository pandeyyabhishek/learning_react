import React, { useCallback, useState } from 'react'
import './App.css'
import Lamp from './components/lamp.jsx'
import TurnOn from './components/TurnOn.jsx'
import TurnOff from './components/TurnOff.jsx'
const App = () => {
  const [flag,setFlag]=useState(true);
  return (
    <div className='app-wrapper'>
      <h1>Hello from App.  This is a simple  turn on/off proj in react.</h1>
      <Lamp flag={flag} setFlag={setFlag}></Lamp>
      {/* {flag ? <TurnOn></TurnOn>:<TurnOff></TurnOff>} */}
    </div>
  )
}

export default App
