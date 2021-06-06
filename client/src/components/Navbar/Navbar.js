import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div id="navbar">
      <ul id="navbar-items">
        <li className="navbar-item">
          <h2>E-Shop</h2>
        </li>
        <li className="navbar-item" id="cart">
          Cart
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
