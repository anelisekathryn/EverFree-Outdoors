import { useState, useEffect } from 'react'
import { getProduct, deleteProduct } from '../../services/products';
import { useParams, Link} from 'react-router-dom'
import { Layout } from '../../components';
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
    <Layout>
    <div>
      
      <h2>This will be the product detail page</h2>
      <h2 className='name'>{product.name }</h2>
      <h3 className='price'>{`$${product.price}`}</h3>
      <img src={ product.imgURL }/>
          <div className='description'>{product.description}</div>
      </div>
      <div className='button-container'>
        <button>
            <Link className='edit-button' to={`/products/${product._id}/edit`}>
              Edit
            </Link></button>
            <button
              className='delete-button'
              onClick={() => deleteProduct(product._id)}
            >
              Delete
            </button>
          </div>
    </Layout>
  )
}

export default ProductDetail;