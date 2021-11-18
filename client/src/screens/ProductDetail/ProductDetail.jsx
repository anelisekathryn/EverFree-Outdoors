import { useState, useEffect } from "react";
import { getProduct, deleteProduct } from "../../services/products";
import { useParams, Link } from "react-router-dom";
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
  }, [id, showMore]);

  return (
    <Layout user={props.user}>
      <div>
        <div className="wrapper">
          <img className="url" src={product.imgURL} />
          <div className="price-wrapper">
            <h2 className="name">{product.name}</h2>
            <h3 className="price">{`$ ${product.price}`}</h3>
            <div> {showMore ? description : substring.substring(0, 250)} </div>

            {/* if desciption has less than 250 characer don't display show more*/}

            <button
              className="save-button"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Read Less " : "Read More"}
            </button>
          </div>
        </div>
      </div>
      <div className="button-container">
        <button className="save-button">
          <Link className="edit-button" to={`/products/${product._id}/edit`}>
            Edit
          </Link>
        </button>
        <button
          className="save-button"
          onClick={() => deleteProduct(product._id)}
        >
          Delete
        </button>
      </div>
    </Layout>
  );
};

export default ProductDetail;
