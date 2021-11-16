import { useState, useEffect } from 'react'
import { getProduct, deleteProduct } from '../../services/products';
import { useParams, Link} from 'react-router-dom'
const ProductDetail = () => {
  const [product, setProduct] = useState([])
  let { id } = useParams()
  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id)
      setProduct(product)
      
    }
    console.log(product)
    fetchProduct()
  },[id])
  return (
    <div>
      <h2>This will be the product detail page</h2>
      <div className='name'>{product.name }</div>
      <div className='price'>{`$${product.price}`}</div>
      <img src={ product.imgURL }/>
          <div className='description'>{product.description}</div>
    </div>
  )
}

export default ProductDetail;