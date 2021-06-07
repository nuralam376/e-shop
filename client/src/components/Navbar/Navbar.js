import React, { useContext } from "react";
import { CartContext } from "../../App";
import "./Navbar.css";

const Navbar = () => {
  const [cartItems, , , setShowCart] = useContext(CartContext);

  const showMenuCart = () => {
    if (cartItems.length > 0) {
      setShowCart(true);
    } else {
      setShowCart(false);
    }
  };

  return (
    <div id="navbar">
      <ul id="navbar-items">
        <li className="navbar-item logo">E-Shop</li>
        <li className="navbar-item" id="cart" onClick={showMenuCart}>
          <i className="fa fa-shopping-cart cart-icon" aria-hidden="true"></i>
          <span id="cartItem">{cartItems.length}</span>
        </li>
        <li className="clearfix"></li>
      </ul>
    </div>
  );
};

export default Navbar;
