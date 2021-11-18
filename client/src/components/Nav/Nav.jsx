import './Nav.css'
import { NavLink, useLocation } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link'
import { SignOut } from '../../components'
import { useEffect } from 'react'

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

const Nav = ({ user }) => {
  let location = useLocation()

  useEffect(() => {
  }, [location])

  return (
    <nav
      className={location.pathname === '/' ? 'nav-home' : 'nav'}>
    
      <NavLink
        className='logo'
        to='/'>
        <img src={location.pathname === '/' ? "https://i.imgur.com/M7GAgcy.png" : "https://i.imgur.com/iIWZzLV.png"} />
      </NavLink>
      
      <div className='links'>
        {alwaysOptions}
        {user ? authenticatedOptions : unauthenticatedOptions}
        {user && <div className="link-welcome">Welcome, {user.username}</div>}
      </div>

    </nav>
  )
}

export default Nav