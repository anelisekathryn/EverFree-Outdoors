import "./Home.css";

import { Link } from 'react-router-dom'
import { Layout, FeaturedProduct } from "../../components";

const Home = (props) => {
  return (
    <Layout user={props.user}>
      <div className='header'>
        <img src="https://i.imgur.com/kWRULl8.jpg" alt="machu picchu"></img>
        <div className="header-text">
          <h1>get unplugged, get outside, get free</h1>
          <Link className="header-button" to="/products">
              find gear to do it with
          </Link>
        </div>
      </div>
      <div className='featured-block'>
        <FeaturedProduct />
      </div>


      <div className='join-block'>
        <div className='join-text-block'>
          <h4>Join Us <span className="color-outdoors">Outdoors</span></h4>
          <p>Shopping at EverFree Outdoors means you’re part of a community. Get unplugged, get free, and get outside with us (and find great deals along the way).</p>
          <Link className="join-button" to="/sign-up">
            join us
          </Link>
        </div>
        <div className='join-image-block'>
          <img src="https://i.imgur.com/zppPCEE.jpg" alt="hikers"></img>
        </div>
      </div>


      <div className='quote-block'>
        <h2>Not all who <span className="color-wander">wander</span> are lost.</h2>
        <p>If it wasn’t for hiking, I would not have discovered the trails, soaring trees, chirping birds and rolling dunes in multiple parts of the world.  Pashmina, 2021</p>
      </div>
      <div className='action-block'>
        <div className="shop-now">
          <img src="https://i.imgur.com/adQyRvl.jpg" alt="backpack"></img>
          <h4>Shop Now</h4>
          <p>Take in the experience of the outdoors. Browse through our catalog of hundreds of products and find what you need to get outside and get free.</p>
          <Link to ="/products">shop now</Link>
        </div>
        <div className="join-us">
          <img src="https://i.imgur.com/wGBJEuG.jpg" alt="footprints"></img>
          <h4>Join Us</h4>
          <p>Be a part of the adventure. Join the community and get exclusive deals and gain access to  product reviews. Contribute to EverFree Outdoor’s member experience.</p>
          <Link to ="/sign-up">let's go</Link>
        </div>
        <div className="learn-more">
          <img src="https://i.imgur.com/x1ImAkP.jpg" alt="light bulb"></img>
          <h4>Learn More</h4>
          <p>We like to think we’re a pretty fun bunch! And we would love for you to join in on some of our fun. Learn more about our team and what we love to do.</p>
          <Link to ="/about">meet daale</Link>
        </div>
      </div>
    </Layout>
  )
}

export default Home;