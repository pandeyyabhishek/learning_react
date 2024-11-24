import React from 'react'

const childs = (props) => {
  return (
    <div>
      <h1>helllooo from child my name is : {props.name}</h1>
      <input onChange={(e)=>{props.setName(e.target.value)}} className='input-field' type="text"  />
    </div>
  )
}

export default childs