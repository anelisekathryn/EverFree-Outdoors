import { useState, useEffect } from 'react'
import { getProduct, deleteProduct } from '../../services/products';
import { useParams, Link} from 'react-router-dom'
import { Layout } from '../../components';
import CSS from './ProductDetail.css'
const ProductDetail = (props) => {
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
    <Layout user={props.user}>
    <div>
      
      
        <div className='wrapper'>
          
          <img className='url' src={product.imgURL} />
          <div className='price-wrapper'>
          <h2 className='name'>{product.name }</h2>
          <h3 className='price'>{`$${product.price}`}</h3>
          <p className='description'>{product.description}</p>
          </div>
          </div>
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