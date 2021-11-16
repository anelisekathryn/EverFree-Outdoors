import { useState,useEffect } from "react"
import { useParams } from "react-router"
import { Layout } from "../../components"
import { getProduct } from "../../services/products"
import CSS from './ProductEdit.css'

const ProductEdit = () => {
  const [product, setProduct] = useState([])
  let { id } = useParams()
  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id)
      setProduct(product)
      
    }
    
    fetchProduct()
  },[id])
  return (
    <Layout>
    <div>
      <form htmlFor='EditInfo'>
        <input type="text" placeholder={product.name}  required/>
        <input type="text" placeholder={product.price}  required/>
        <textarea placeholder={product.description} required></textarea>
        <input type="text" placeholder='Image Link' required />
        <button type='submit' className='save-button'>
            Save
          </button>
      </form>
      </div>
      </Layout>
  )
}

export default ProductEdit;