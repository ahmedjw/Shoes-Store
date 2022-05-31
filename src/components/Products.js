import React from "react";
import useGetproducts from "../hooks/useGetproducts";
import Product from "./Product";

export default function () {
  const {
    data: products,
    isLoading,
    isError,
    err,
  } = useGetproducts("products?category=shoes");
  if (isLoading) {
    return <h3>Loading ......</h3>;
  }
  if (isError) {
    return <h3>there is An Error :{err} </h3>;
  }
  return (
    <div id="products">
      {products.map((product) => (
        <Product p={product} />
      ))}
    </div>
  );
}
