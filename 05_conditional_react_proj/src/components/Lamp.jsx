import React from 'react'
import './lamp.css'
 //true->on
const Lamp = (props) => {
  return (
    <div className='lamp-wrapper'>
        <div className='lamp' style={{backgroundColor: props.flag ? 'yellow' : 'gray'}}>
        </div>
          {props.flag ? <button onClick={()=> props.setFlag(!props.flag)}>Turn Off</button>:<button  onClick={()=> props.setFlag(!props.flag)}>Turn On</button>}
    </div>
  )
}

export default Lamp
