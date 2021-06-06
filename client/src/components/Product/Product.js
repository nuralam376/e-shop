import React from "react";

const Product = ({ product }) => {
  const { image, title, price } = product;
  return (
    <>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>৳{price}</p>
      <button className="cart-button">Add to Cart</button>
    </>
  );
};

export default Product;
