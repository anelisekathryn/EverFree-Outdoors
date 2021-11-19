import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Layout } from "../../components";
import { getProduct, editProduct } from "../../services/products";
import CSS from "./ProductEdit.css";

const ProductEdit = (props) => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    imgURL: "",
    price: "",
  });
  // const [newProduct, setNewProduct] = useState({
  //   name: '',
  //   description: '',
  //   imgURL: '',
  //   price: '',
  // })
  // const [imgUrl, setImgUrl] = useState('')
  const [isUpdated, setIsUpdated] = useState(false);

  let { id } = useParams();
  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id);
      setProduct(product);
    };
    fetchProduct();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updated = await editProduct(id, product);
    setIsUpdated(updated);
  };

  if (isUpdated) {
    return <Navigate to={`/products/${id}`} />;
  }

  return (
    <Layout user={props.user}>
      <div className='container-div'>
        <form htmlFor="EditInfo" className="editForm" onSubmit={handleSubmit}>
          <img className="url" src={product.imgURL} onChange={handleChange} />
          <div className='form-wrapper'>
            <input
              className='inputs'
            name='name'
            type="text"
            value={product.name}
            onChange={handleChange}
            required
          />
            <input
              className='inputs'
            name='price'
            type="text"
              value={product.price}
            onChange={handleChange}
            required
          />
            <textarea
              className='inputs'
            name='description'
            value={product.description}
            onChange={handleChange}
            rows={10}
            cols={38}
            required
          ></textarea>
          
            <input
              className='inputs'
            name='imgURL'
            type="text"
            value={product.imgURL}
            onChange={handleChange}
            required
          />
          <button type="submit" className="save-button">
            Save
          </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default ProductEdit;
