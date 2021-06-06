import React, { useState } from "react";
import "./Product.css";

const Product = ({ product }) => {
  const { id, image, title, price } = product;

  const [cartId, setCartId] = useState(null);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCartId(id);
    setCount(1);
  };

  const handleCount = (type) => {
    if (type === "add") {
      setCount(count + 1);
    } else if (type === "substract" && count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>৳{price}</p>
      {!cartId ? (
        <button className="cart-button" onClick={handleClick}>
          Add to Cart
        </button>
      ) : (
        <div className="count-item-cart">
          <button onClick={() => handleCount("substract")}>-</button>
          <p>{count}</p>
          <button onClick={() => handleCount("add")}>+</button>
        </div>
      )}
    </>
  );
};

export default Product;
