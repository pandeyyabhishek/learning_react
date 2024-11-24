import React from 'react'
import './Cards.css'
const Cards = (props) => {
  return (
    <div className='Card-Wrapper'>
        <h3 className='Name'>{props.name}</h3>
        <img className='Img' src={props.img} alt="" />
        <p className='Desc'>{props.desc}</p>
    </div>
  )
}

export default Cards
