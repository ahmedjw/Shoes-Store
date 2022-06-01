import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../components/Cart";
import Content from "../components/Content";
import ProductDetail from "../sharedComponents/Productetails";

export default function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<h3>Welcome to our Sotre</h3>} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/:category" element={<Content />} />
      <Route path="/:category/:id" element={<ProductDetail />} />
    </Routes>
  );
}
