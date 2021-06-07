import React, { useContext } from "react";
import { CartContext } from "../../App";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";

const Cart = () => {
  const [cartItems, , showCart, setShowCart] = useContext(CartContext);

  const hideCartMenu = () => {
    setShowCart(false);
  };

  return (
    <>
      {showCart && cartItems.length > 0 ? (
        <div className="cart-content">
          <div className="cart-item-content">
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
            {cartItems.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
            <hr />
            <div className="cart-total">
              <h3>
                Subtotal - ৳
                {cartItems.reduce(
                  (sum, cart) => sum + cart.quantity * cart.price,
                  0
                )}
              </h3>
              <h3>Delivery Charge - ৳100</h3>
              <hr />
              <h3>
                Grand Total - ৳
                {cartItems.reduce(
                  (sum, cart) => sum + cart.quantity * cart.price,
                  0
                ) + 100}
              </h3>
              <button className="cart-button">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Cart;
