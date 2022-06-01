import React from "react";
import { Route, Routes } from "react-router-dom";
import Content from "../components/Content";
import Product from "../components/Product";
import useGetproducts from "../hooks/useGetproducts";

export default function PageRoutes() {
  const { data: products } = useGetproducts("products?category=shoes");

  return (
    <Routes>
      <Route path="/" element={<Content />} />
      {products.map((product) => (
        <Route
          path={`/products/id/${product.id}` || "/"}
          element={<Product p={product} />}
        />
      ))}
    </Routes>
  );
}
