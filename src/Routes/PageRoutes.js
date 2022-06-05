import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../components/Cart";
import Checkout from "../components/Checkout";
import Content from "../components/Content";
import ProductDetail from "../sharedComponents/ProductetailsUseRef";

export default function PageRoutes() {
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("cart")) ?? [];
    } catch (e) {
      return [];
    }
  });
  useEffect(() => localStorage.setItem("cart", JSON.stringify(cart)));
  function updateQuantity(sku, quantity) {
    setCart((items) => {
      return quantity === 0
        ? items.filter((i) => i.sku !== sku)
        : items.map((i) => (i.sku === sku ? { ...i, quantity } : i));
    });
  }
  function emptyCart() {
    setCart([]);
  }
  return (
    <Routes>
      <Route path="/" element={<h3>Welcome to our Sotre</h3>} />
      <Route
        path="/cart"
        element={<Cart cart={cart} updateQuantity={updateQuantity} />}
      />
      <Route path="/:category" element={<Content />} />
      <Route
        path="/:category/:id"
        element={<ProductDetail setCart={setCart} cart={cart} />}
      />
      <Route
        path="/checkout"
        element={<Checkout cart={cart} emptyCart={emptyCart} />}
      />
    </Routes>
  );
}
