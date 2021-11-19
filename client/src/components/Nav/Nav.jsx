import './Nav.css'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { NavHashLink, HashLink } from 'react-router-hash-link'
import { useEffect } from 'react'
import { pushRotate as Menu }from 'react-burger-menu'

const authenticatedOptions = (
  <>
      <NavLink className="link" to="/sign-out">SIGN OUT</NavLink>
  </>
)
const unauthenticatedOptions = (
  <>
      <NavLink className="link" to="/sign-up">SIGN UP</NavLink>
      <NavLink className="link" to="/sign-in">SIGN IN</NavLink>
  </>
)
const alwaysOptions = (
  <>
    <NavLink className="link" to="/about">ABOUT</NavLink>
    <NavLink className="link" to="/products">PRODUCTS</NavLink>
    <NavHashLink className="link" to="/about#meet-the-team">MEET THE TEAM</NavHashLink>
  </>
)

/*-------Menu Options------*/

const authenticatedOptionsMenu = (
  <>
      <Link className="link" to="/sign-out">SIGN OUT</Link>
  </>
)

const unauthenticatedOptionsMenu = (
  <>
      <Link className="link" to="/sign-up">SIGN UP</Link>
      <Link className="link" to="/sign-in">SIGN IN</Link>
  </>
)
const alwaysOptionsMenu = (
  <>
    <Link className="link" to="/about">ABOUT</Link>
    <Link className="link" to="/products">PRODUCTS</Link>
    <HashLink className="link" to="/about#meet-the-team">MEET THE TEAM</HashLink>
  </>
)

const Nav = ({ user }) => {
  let location = useLocation()

  useEffect(() => {
  }, [location])

  return (
    <div>
    <nav
      className={location.pathname === '/' ? 'nav-home' : 'nav'}>
      
        
        <NavLink
          className='logo'
          to='/'>
          <img src={location.pathname === '/' ? "https://i.imgur.com/sUDM2sy.png" : "https://i.imgur.com/iIWZzLV.png"} />
        </NavLink>
        
        <div className='links'>
          {alwaysOptions}
          {user ? authenticatedOptions : unauthenticatedOptions}
          {user && <div className="link-welcome">Welcome, {user.username}</div>}
          </div>

      </nav>
      
      <nav className='mobile-nav'>
        <Menu right className='mobile-nav'>
          <div className='links'>
            <Link to='/' className="link">HOME</Link>
            {alwaysOptionsMenu}
            {user ? authenticatedOptionsMenu : unauthenticatedOptionsMenu}
            {user && <div className="link-welcome">Welcome, {user.username}</div>}
            </div>
        </Menu> 
      </nav>

      </div>
  )
}

export default Nav