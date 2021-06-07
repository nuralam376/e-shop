import React from "react";
import "./CartItem.css";

const CartItem = ({ product }) => {
  const { image, title, price, quantity } = product;

  return (
    <div>
      <hr />
      <div className="cart-items">
        <table className="cart-item-table">
          <tr>
            <td>
              <sup className="remove-cart-product">&times;</sup>
              <img src={image} alt={title} />
            </td>
            <td>
              {title} <br />৳{price} &times;{" "}
              <input
                type="text"
                name="quantity"
                value={quantity}
                className="cart-quantity"
              />
            </td>
            <td className="cart-total">
              <br /> = ৳{price * quantity}
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default CartItem;
