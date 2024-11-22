import { useState } from 'react'
import './App.css'
import Nav from './components/nav.jsx'
import Cards from './components/Cards.jsx'

function App() {
  return (
    <div className='app-wrapper'>
        <Nav></Nav>
        <Cards name="abhishek jee" desc="student of LNCT" img="../../public/images/img3.jpg" ></Cards>
        <Cards name="pandey jee" desc="web dev" img="../../public/images/img2.jpg"></Cards>
        <Cards name="why so jee" desc="programmer" img="../../public/images/img1.jpg"></Cards>
          
    </div>
  )
}
export default App
