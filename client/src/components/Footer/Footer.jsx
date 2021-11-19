import './Footer.css'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'


const Footer = () => {
  return (
    <footer>
      
      <div className='footer-margin'>
    <div className='footer-menu'>
      <div className='menu-item'><Link to='/'>Home</Link></div>
      <div className='menu-item'><Link to='/products'>Shop</Link></div>
      <div className='menu-item'><Link to='/about'>About</Link></div>
      <div className='menu-item'><HashLink to='/about#meet-the-team'>Meet the Team</HashLink></div>
      <div className='menu-item'><Link to='/add-product'>Add a Product</Link></div>
    </div>
    
    <div className='footer-byline'>
      <h4>Site Created By:</h4>
      <h5>Anelise Bergin</h5>
      <h5>Andrew Freedman</h5>
      <h5>David Gurule</h5>
      <h5>Elhadj Soumahoro</h5>
      <h5>Lance Simmons</h5>
      </div>
      </div>

    </footer>
  )
}

export default Footer