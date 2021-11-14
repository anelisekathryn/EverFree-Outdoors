import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Product = new Schema(
  {
    name: { 
      type: String, 
      required: true 
      },
    imageURL: { 
      type: String, 
      required: true 
      },
    description: { 
      type: String, 
      required: true 
      },
    type: { 
      type: String, 
      required: false  
      },
    price: { 
      type: String, 
      required: true 
      },
    featured: { 
      type: Boolean, 
      default: false
      }  
  },
  { timestamps: true }
)

export default mongoose.model('products', Product)