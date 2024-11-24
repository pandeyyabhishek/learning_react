import React from 'react'
import { userContext } from '../App'
const ChildC = () => {
    const {name,setName}=userContext();
  return (
    <div>
        ChildC here.
        <input type="text" placeholder='Enter name to change' style={{padding:"6px 9px"}} onChange={(e)=>{}}/>
        
    </div>
  )
}

export default ChildC
