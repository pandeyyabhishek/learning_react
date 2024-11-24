import React from 'react'
import '../../public/StyleSheets/Nav.css'

const Nav = () => {
  return (
    <div className='nav-wrapper'>
        <div className='left-nav'>
          <img src="../../public/images/logo.png" alt="logo" />
        </div>
        <div className='right-nav'>
          <h3>Home</h3>
          <h3>About</h3>
          <h3>Contact</h3>
          <h3>Profile</h3>
        </div>
    </div>
  )
}

export default Nav
