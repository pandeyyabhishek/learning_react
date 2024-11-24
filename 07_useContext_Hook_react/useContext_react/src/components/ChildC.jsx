import React, { useContext } from 'react'
import { userContext } from '../App'
const ChildC = () => {
    const {name,setName}=useContext(userContext);
  return (
    <div>
        ChildC here.
        <input type="text" placeholder='Enter name to change' style={{padding:"6px 9px"}} onChange={(e)=>{setName(e.target.value)}}/>
    </div>
  )
}

export default ChildC
