import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../components/Cart";
import Content from "../components/Content";
import ProductDetail from "../sharedComponents/Productetails";

export default function PageRoutes() {
  const [cart, setCart] = useState([]);
  function updateQuantity(sku, quantity) {
    setCart((items) => {
      return quantity === 0
        ? items.filter((i) => i.sku !== sku)
        : items.map((i) => (i.sku === sku ? { ...i, quantity } : i));
    });
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
    </Routes>
  );
}
