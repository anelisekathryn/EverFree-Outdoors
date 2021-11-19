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

  // PRODUCTS 4 ONLY - TEST ======================================

  const FEATURED = products.slice(0,4).map((product, index) =>
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
        {FEATURED}
      </div>
      
    </div>
  )
}

export default FeaturedProduct