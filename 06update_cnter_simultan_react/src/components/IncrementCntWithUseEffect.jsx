import React, { useEffect, useState } from 'react'

const IncrementCntWithUseEffect = () => {
    const [cnt,setCnt]=useState(0);
    useEffect(() => {
    //   first->{here we write }
    alert("Cnt is just updated.")
      return () => {
        // second  -> clean upp code..
        // console.log("effect of the updataion of the code..")  ui is unmounted.
        alert("cnt is unmounted.")
      }
    }, [cnt])   //dependency array (run on the basis of thesse)
    
  return (
    <div>
        <h1>
            This is basic program of the useEffect..
        </h1>
            <button onClick={()=>{setCnt(cnt+1)}}>Click me see to useEffect.</button>
        <p>Count is : {cnt}</p>
    </div>
  )
}

export default IncrementCntWithUseEffect
