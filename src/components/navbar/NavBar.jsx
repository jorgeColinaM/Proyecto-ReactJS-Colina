import React, { useState } from 'react'
import BurguerButton from './BurguerButton'
import NavContainer from './NavBar'
import BgDiv from './NavBar'

function Navbar() {

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    //cuando esta true lo pasa a false y viceversa
    setClicked(!clicked)
  }
  return (
    <>
      <NavContainer>
        <h2>Café <span>Vidanova</span></h2>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <a onClick={handleClick} href="#">Home</a>
          <a onClick={handleClick} href="#">Shop</a>
          <a onClick={handleClick} href="#">About-Us</a>
          <a onClick={handleClick} href="#">Contact</a>
          <a onClick={handleClick} href="#"></a>
        </div>
        <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </NavContainer>
    </>
  )
}
export default Navbar