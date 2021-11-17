import './Nav.css'
import { NavLink } from 'react-router-dom'
import { SignOut } from '../../components'

const authenticatedOptions = (
  <>
      <NavLink className="link" to="/sign-out">Sign Out</NavLink>
  </>
)
const unauthenticatedOptions = (
  <>
      <NavLink className="link" to="/sign-up">Sign Up</NavLink>
      <NavLink className="link" to="/sign-in">Sign In</NavLink>
  </>
)
const alwaysOptions = (
  <>
    <NavLink className="link" to="/about">About</NavLink>
    <NavLink className="link" to="/products">Products</NavLink>
  </>
)

const Nav = ({ user }) => {
  return (
    <nav>
      <NavLink className='logo' to='/'>EverFree Outdoors</NavLink>
      <div className='links'>
        {alwaysOptions}
        {user && <div className="link welcome">Welcome, {user.username}</div>}
        {user ? authenticatedOptions : unauthenticatedOptions}
      </div>
    </nav>
  )
}

export default Nav