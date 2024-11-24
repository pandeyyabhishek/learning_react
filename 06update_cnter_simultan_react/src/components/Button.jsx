import React, { useState } from 'react'

const Button = ({cnt,setCnt}) => {
    function handleClick(){
        setCnt(cnt+1);
        
    }
  return (
    <div>
        <button onClick={handleClick} >Clicked : {cnt} times.</button> 
    </div>
  )
}

export default Button
