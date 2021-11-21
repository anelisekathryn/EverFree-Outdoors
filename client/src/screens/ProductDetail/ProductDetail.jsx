// ProductDetail.jsx
import { useState, useEffect } from "react";
import { getProduct, deleteProduct } from "../../services/products";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Layout } from "../../components";
import CSS from "./ProductDetail.css";

const ProductDetail = (props) => {
  const [product, setProduct] = useState([]);
  const [substring, setSubstring] = useState("");
  const [showMore, setShowMore] = useState(false);
  let { id } = useParams();
  let description = product.description;
  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id);
      setProduct(product);
      setSubstring(product.description);
    };
    fetchProduct();
    console.log(description);
  }, [id]);

  let navigate = useNavigate()
 
  
  return (
    <Layout user={props.user}>
      
      
      <div>
        <div className="wrapper">
          <img className="url" src={product.imgURL} />
          <div className="price-wrapper">
            <h2 className="name">{product.name}</h2>
            <h3 className="price">{`$ ${product.price}`}</h3>
            <div className="product-description"> {showMore ? description : substring.substring(0, 250)} </div>
            {description && description.length <= 250 ? null : (
              <button
                className="save-button"
                
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "read less " : "read more"}
              </button>
            )}
          </div>
        </div>
      </div>
      
      
     
     {props.user ? 
      <div className="button-container">
        <button className="save-button" id='edit-delete'>
          <Link className="edit-button" to={`/products/${product._id}/edit`}>
            edit
          </Link>
        </button>
        <button
          className="save-button"
          id='edit-delete'
          onClick={() => {
            deleteProduct(product._id)
            navigate("/products")
          }}
        >
          delete
        </button>
      </div>
      : 
      null
}
    
    
    </Layout>
  );
};
export default ProductDetail;