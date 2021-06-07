import React, { useState } from "react";
import "./CartItem.css";

const CartItem = ({ product }) => {
  const { image, title, price, quantity } = product;
  const [cartQuantity, setCartQuantity] = useState(quantity);

  const handleCartQuantity = (e) => {
    if (e.target.value > 100) return;
    setCartQuantity(e.target.value);
  };

  return (
    <div>
      <hr />
      <div className="cart-items">
        <table className="cart-item-table">
          <tbody>
            <tr>
              <td>
                <sup className="remove-cart-product">&times;</sup>
                <img src={image} alt={title} />
              </td>
              <td>
                {title} <br />৳{price} &times;{" "}
                <input
                  type="number"
                  name="quantity"
                  value={cartQuantity}
                  className="cart-quantity"
                  onChange={handleCartQuantity}
                />
              </td>
              <td className="cart-total">
                <br /> = ৳{price * cartQuantity}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartItem;
