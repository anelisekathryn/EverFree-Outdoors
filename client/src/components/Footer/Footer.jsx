import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = ({ user }) => {
  return (
    <footer>
      
      <div className='footer-margin'>
    <div className='footer-menu'>
      <div><Link to='/'>Home</Link></div>
      <div><Link to='/products'>Shop</Link></div>
      <div><Link to='/about'>About</Link></div>
      <div><Link to='/about#meet-the-team'>Meet the Team</Link></div>
        <div><Link to='/add-product'>Add a Product</Link></div>
    </div>
    
    <div className='footer-byline'>
      <h4>Site Created By:</h4>
      <h5>Anelise Bergin</h5>
      <h5>Andrew Freedman</h5>
      <h5>David Gurule</h5>
      <h5>Ej Soumahoro</h5>
      <h5>Lance Simmons</h5>
      </div>
      </div>
      {/* <div>
      <img src='https://i.imgur.com/xL9R8iT.png'/>
      </div> */}
    </footer>
  )
}

export default Footer