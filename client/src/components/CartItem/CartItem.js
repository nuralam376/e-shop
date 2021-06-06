import React from "react";

const CartItem = ({ product }) => {
  const { image, title, price, quantity } = product;
  return (
    <div>
      <h1>Cart</h1>
      <h4>Your Items</h4>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{price}</p>
      <p>{quantity}</p>
      <p>{price * quantity}</p>
    </div>
  );
};

export default CartItem;
