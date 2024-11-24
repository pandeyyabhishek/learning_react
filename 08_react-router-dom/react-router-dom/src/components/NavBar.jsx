import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <ul>
        <li><Link className='' to='/'>Home</Link></li>
        <li><Link to='/about'>about</Link></li>
        <li> <Link to='/contact'>contact</Link></li>
      </ul>
    </div>
  )
}

export default NavBar
