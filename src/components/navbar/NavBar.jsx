import React, { useState } from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const Navbar = () => {
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    //cuando esta true lo pasa a false y viceversa
    setClicked(!clicked)
  }
  return (
    <>
      <nav>
        <h2>Café <span>Vidanova</span></h2>
        <div className="links">
          <a onClick={handleClick} href="#">Home</a>
          <a onClick={handleClick} href="#">Service</a>
          <a onClick={handleClick} href="#">About-Us</a>
          <a onClick={handleClick} href="#">Contact</a>
          <a onClick={handleClick} href="#">{< CartWidget />}</a>
        </div>
      </nav>
    </>
  )
}
export default Navbar
