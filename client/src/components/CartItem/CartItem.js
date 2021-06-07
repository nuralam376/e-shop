import React, { useContext, useState } from "react";
import { CartContext } from "../../App";
import "./CartItem.css";

const CartItem = ({ product }) => {
  const { image, title, price, quantity } = product;
  const [cartQuantity, setCartQuantity] = useState(quantity);
  const [cartItems, setCartItems] = useContext(CartContext);

  const updateCartItem = (inputQuantity) => {
    const cartItem = cartItems.find((cart) => cart.id === product.id);
    let allCarts = cartItems.map((cart) => {
      if (cart.id === cartItem.id) {
        cart.quantity = inputQuantity;
      }
      return cart;
    });
    setCartItems(allCarts);
  };

  const handleCartQuantity = (e) => {
    let inputQuantity = e.target.value;
    if (inputQuantity > 100) return;
    setCartQuantity(inputQuantity);
    updateCartItem(inputQuantity);
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
