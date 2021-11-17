import "./FeaturedProduct.css"

import { useState, useEffect } from 'react'
import { getProducts } from '../../services/products'
import Product from '../Product/Product'


const FeaturedProduct = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getProducts()
      setProducts(allProducts)
    }
    fetchProducts()
  }, [])

  const FEATURED1 = products.slice(0,1).map((product, index) =>
    product.featured ? (
      <Product
      _id={product._id}
      imgURL={product.imgURL}
      key={index}
      />
    ) : null
  )

  const FEATURED2 = products.slice(1,5).map((product, index) =>
    product.featured ? (
      <Product
      _id={product._id}
      imgURL={product.imgURL}
      key={index}
      />
    ) : null
  )

  return (
    <div className="featured">
      <div className="featured-title">
        <h3>Featured Products</h3>
      </div>
      <div className="featured-products">
        <div className="featured-products-large">
          {FEATURED1}
        </div>
        <div className="featured-products-small">
          {FEATURED2}
        </div>
      </div>
    </div>
  )

}

export default FeaturedProduct