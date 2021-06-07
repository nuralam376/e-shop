import React, { useContext } from "react";
import { CartContext } from "../../App";
import "./CartItem.css";

const CartItem = ({ product }) => {
  const { image, title, price, quantity } = product;
  const [, , , setShowCart] = useContext(CartContext);

  const hideCartMenu = () => {
    setShowCart(false);
  };

  return (
    <div>
      <div className="cart-header">
        <div className="cart-title">
          <h1>Cart</h1>
          <h4>Your Items</h4>
        </div>
        <p onClick={hideCartMenu} className="closeMenu">
          &times;
        </p>
      </div>
      <div className="clearfix"></div>
      <hr />
      <div className="cart-items">
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <p>{price}</p>
        <p>{quantity}</p>
        <p>{price * quantity}</p>
      </div>
    </div>
  );
};

export default CartItem;
