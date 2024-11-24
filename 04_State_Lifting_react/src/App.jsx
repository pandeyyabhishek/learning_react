import React, { useState } from 'react'
import Childs from './components/childs.jsx'
/* 
  yhi pr state create hogi,
  manage hogi,
  distirbute hogy synchronically.
*/
const App = () => {
  const [name,setName]=useState('')
  return (
    <div>
    <h1>Hellloo from abpp and i am : {name}</h1>
      <Childs name={name} setName={setName} >

      </Childs>
    </div>
  ) 
}

export default App
