import './Nav.css'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <NavLink className='logo' to='/'>EverFree Outdoors</NavLink>
      <div className='links'>

      </div>
    </nav>
  )
}

export default Nav