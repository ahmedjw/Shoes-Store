import React from "react";
import { useParams } from "react-router-dom";
import useGetproducts from "../hooks/useGetproducts";
import Spinner from "./Spinner";

export default function ProductDetail() {
  const { id } = useParams();
  const {
    data: product,
    isError,
    isLoading,
    err,
  } = useGetproducts("products/" + id);
  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h3>there is an Error : {err}</h3>;
  }
  return (
    <div id="detail">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p id="price">${product.price}</p>
      <p>
        <button className="btn btn-primary">Add to cart</button>
      </p>
      <img src={`/images/${product.image}`} alt={product.category} />
    </div>
  );
}
