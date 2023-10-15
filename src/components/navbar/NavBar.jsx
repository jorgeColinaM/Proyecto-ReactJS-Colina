import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  
  return (
    <>
    <div className='container'>
      <nav className='nav'>
        <div className="nav__brand">
          <h2>Café <span>Vidanova</span></h2>
        </div>
        <div className="links">
          <ul className="nav__list">
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/category/:categoryId'>Category</NavLink></li>
            <li><NavLink to='/aboutUs'>About-Us</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
            <li><NavLink to='/cart'>{< CartWidget />}</NavLink></li>
          </ul>
        </div>
      </nav>
    </div>
    </>
  )}

export default Navbar
