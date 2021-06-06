import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const response = await axios.get("/products");
      setAllProducts(response.data.products);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div id="products">
      {allProducts.map((product) => (
        <div className="product-item" key={product.id}>
          <Product product={product} />
        </div>
      ))}
    </div>
  );
};

export default Products;
