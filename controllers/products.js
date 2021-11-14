import Product from '../models/product.js'

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find()
    res.json(products)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}

export const getProduct = async (req, res) => {
  try {
    const { id } = req.params
    const product = await Product.findById(id)
    if (product) {
      return res.json(product)
    }
    res.status(404).json({ message: 'Product not found!' })
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}