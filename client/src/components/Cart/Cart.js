import React, { useContext } from "react";
import { CartContext } from "../../App";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";

const Cart = () => {
  const [cartItems, , showCart] = useContext(CartContext);

  return (
    <>
      {showCart && cartItems.length > 0 ? (
        <div className="cart-content">
          <div className="cart-item-content">
            {cartItems.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Cart;
