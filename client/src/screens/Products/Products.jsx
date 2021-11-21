import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Products.css";

import { Layout, Product, Search } from "../../components";
import { getProducts } from "../../services/products";

const Products = (props) => {
  const [products, setProducts] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getProducts();
      setProducts(allProducts);
      setSearchResult(allProducts);
    };
    fetchProducts();
  }, []);

  const handleSearch = (event) => {
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSearchResult(results);
  };

  const handleSubmit = (event) => event.preventDefault();

  return (
    <Layout user={props.user}>
      <div className="products-wrapper">
        <div className="search-wrapper">
          <Search onSubmit={handleSubmit} handleSearch={handleSearch} />
        </div>

        <div className="products">
          {searchResult.map((product, index) => {
            return (
              <Product
                _id={product._id}
                name={product.name}
                imgURL={product.imgURL}
                price={product.price}
              />
            );
          })}
        </div>
      </div>

      <Link className="addProduct" to="/add-product">
        {" "}
        add product
      </Link>
    </Layout>
  );
};

export default Products;
