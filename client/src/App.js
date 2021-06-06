import { createContext, useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";

export const CartContext = createContext();

function App() {
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);
  return (
    <div className="App">
      <CartContext.Provider value={[cartItems, setCartItems]}>
        <Navbar />
        <Cart />
        <Products />
      </CartContext.Provider>
    </div>
  );
}

export default App;
