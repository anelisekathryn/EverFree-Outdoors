import "./Home.css";

import { Link } from 'react-router-dom'
import { Layout, FeaturedProduct } from "../../components";

const Home = (props) => {
  return (
    <Layout user={props.user}>
      <div className='header'>
        <img src="https://i.imgur.com/kWRULl8.jpg" alt="machu picchu"></img>
        <br />
        <br />
      </div>
      <div className='featured-block'>
        <FeaturedProduct />
        <p>Featured products should be here</p>
        <br />
        <br />
      </div>
      <div className='join-block'>
        <div className='text-block'>
          <h4>Join Us Outdoors</h4>
          <p>Shopping at EverFree Outdoors means you’re part of a community. Get unplugged, get free, and get outside with us (and find great deals along the way).</p>
          <Link className="join-button" to="/sign-up">
            Join Us
          </Link>
        </div>
        <div className='image-block'>
          <h4>This will be the join us image - need link</h4>
        </div>
        <br />
        <br />
      </div>
      <div className='quote-block'>
        <h2>Not all who wander are lost.</h2>
        <p>If it wasn’t for hiking, I would not have discovered the trails, soaring trees, chirping birds and rolling dunes in multiple parts of the world.  Pashmina, 2021</p>
        <br />
        <br />
      </div>
      <div className='action-block'>
        <div className="shop-now">
          <h4>backpack - need image link</h4>
          <p>Take in the experience of the outdoors.  Browse through our catalog of hundreds of products and find what you need to get outside and get free.</p>
        </div>
        <div className="join-us">
          <h4>shoes - need image link</h4>
          <p>Be a part of the adventure.  Join the community and get exclusive deals and gain access to  product reviews. Contribute to EverFree Outdoor’s member experience.</p>
        </div>
        <div className="learn-more">
          <h4>learn more - need image link</h4>
          <p>We like to think we’re a pretty fun bunch! And we would love for you to join in on the fun. Learn more about our team and what we love to do.</p>
        </div>
        <br />
        <br />
      </div>
    </Layout>
  )
}

export default Home;