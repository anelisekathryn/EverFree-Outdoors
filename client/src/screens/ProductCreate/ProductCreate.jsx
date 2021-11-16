import { useState } from 'react'
import './ProductCreate.css'
import { Layout } from '../../components'
// import { useNavigate } from 'react-router-dom'
import { createProduct } from '../../services/products'

const ProductCreate = (props) => {
  // const navigate = useNavigate()

  const [product, setProduct] = useState({
    name: '',
    imgURL: '',
    description: '',
    type: '',
    price: '',
  })

  const [isCreated, setCreated] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setProduct({
      ...product,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const created = await createProduct(product)
    setCreated({ created })
  }

  // if (isCreated) {
  //   navigate("/products")
  // }

  return (
    <Layout user={props.user}>
      <form className='create-form' onSubmit={handleSubmit}>
        <h2>Add a Product</h2>
        <input 
          className='input-name'
          placeholder='NAME'
          value={product.name}
          name='name'
          required
          autoFocus
          onChange={handleChange}
        />
         <input
          className='input-image-link'
          placeholder='IMAGE LINK URL'
          value={product.imgURL}
          name='imgURL'
          required
          onChange={handleChange}
        />
        <textarea
          className='text-area-description'
          rows={10}
          placeholder='DESCRIPTION'
          value={product.description}
          name='description'
          required
          onChange={handleChange}
        />
        <input
          className='input-price'
          placeholder='PRICE'
          value={product.price}
          name='price'
          required
          onChange={handleChange}
        />
        <button type='submit' className='submit-button'>let's go</button>
      </form>
    </Layout>
  )
}

export default ProductCreate;