import React, { useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../components/Cart";
import Checkout from "../components/Checkout";
import Content from "../components/Content";
import CartReducer from "../hooks/cartReducer";
import ProductDetail from "../sharedComponents/Productetails";
let intialize;
try {
  intialize = JSON.parse(localStorage.getItem("cart")) ?? [];
} catch (e) {
  intialize = [];
}

export default function PageRoutes() {
  const [cart, dispatch] = useReducer(CartReducer, intialize);
  console.log(cart);

  return (
    <Routes>
      <Route path="/" element={<h3>Welcome to our Sotre</h3>} />
      <Route path="/cart" element={<Cart cart={cart} dispatch={dispatch} />} />
      <Route path="/:category" element={<Content />} />
      <Route
        path="/:category/:id"
        element={<ProductDetail dispatch={dispatch} />}
      />
      <Route path="/checkout" element={<Checkout dispatch={dispatch} />} />
    </Routes>
  );
}
