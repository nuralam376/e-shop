import React, { useContext, useState } from "react";
import { CartContext } from "../../App";
import "./Product.css";

const Product = ({ product }) => {
  const { image, title, price } = product;
  const [cartItems, setCartItems] = useContext(CartContext);

  const [count, setCount] = useState(0);

  const setCart = (count) => {
    const cartItem = cartItems.find((cart) => cart.id === product.id);

    if (count === 0 && cartItem) {
      let allCarts = cartItems.filter((cart) => cart.id !== cartItem.id);
      setCartItems(allCarts);
    } else if (cartItem) {
      let allCarts = cartItems.map((cart) => {
        if (cart.id === cartItem.id) {
          cart.quantity = count;
        }
        return cart;
      });
      setCartItems(allCarts);
    } else {
      setCartItems((cartItem) => [
        ...cartItem,
        {
          ...product,
          quantity: count,
        },
      ]);
    }
  };

  const handleClick = () => {
    setCount((count) => count + 1);
    setCart(count + 1);
  };

  const handleCount = (type) => {
    if (type === "add") {
      setCount((count) => count + 1);
      setCart(count + 1);
    } else if (type === "substract" && count > 0) {
      setCount((count) => count - 1);
      setCart(count - 1);
    }
  };

  return (
    <>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>৳{price}</p>
      {count <= 0 ? (
        <button className="cart-button" onClick={handleClick}>
          Add to Cart
        </button>
      ) : (
        <div className="count-item-cart">
          <button onClick={() => handleCount("substract")}>-</button>
          <p>{count}</p>
          <button onClick={() => handleCount("add")}>+</button>
        </div>
      )}
    </>
  );
};

export default Product;
