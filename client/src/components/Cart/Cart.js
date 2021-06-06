import React, { useContext } from "react";
import { CartContext } from "../../App";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";

const Cart = () => {
  const [cartItems] = useContext(CartContext);

  return (
    <div className="cart-content">
      {cartItems.length > 0 ? (
        <div className="cart-item-content">
          {cartItems.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Cart;
