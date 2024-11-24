import React, { createContext, useState } from 'react'
import ChildC from './components/ChildC';

const userContext=createContext();
const App = () => {
  //create context 
  //provide context
  //pass values
  //accept / take context.

  const[name ,setName]=useState('')
  return (
    <div>
      <h1>My name is : {name}</h1>
    <userContext.Provider name={name} setName={setName} >
    <ChildC></ChildC>
    </userContext.Provider>
    </div>
  )
}
export {userContext}

export default App