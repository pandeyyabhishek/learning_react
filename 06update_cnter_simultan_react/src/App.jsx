import React, { useState } from 'react'
import Button from './components/Button.jsx'
import IncrementCntWithUseEffect from './components/IncrementCntWithUseEffect.jsx'
const App = () => {
  const [cnt,setCnt]=useState(0);
  return (
    <div>
        {/* <h1>These two counters will update simulataneously..</h1>
        <p>heoo</p> */}
        {/* <Button cnt={cnt} useState={useState} ></Button>
        <Button cnt={cnt} setCnt={setCnt}></Button> */}
        
        {/* here we learn about the useEffect react hook ->used to handle the side effects such as fetching data and updating DOM */}
          <IncrementCntWithUseEffect></IncrementCntWithUseEffect>
          
    </div>
  )
}

export default App
