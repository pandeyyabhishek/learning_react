import React, { createContext, useState } from 'react'
import ChildC from './components/ChildC';
import ChildA from './components/ChildA';
import ChildB from './components/ChildB';


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
      <ChildA></ChildA>
      <ChildB></ChildB>
    <userContext.Provider value={{name,setName}} >
        <ChildC></ChildC>
    </userContext.Provider>

      <div>
        
      </div>
    </div>
  )
}
export {userContext}

export default App