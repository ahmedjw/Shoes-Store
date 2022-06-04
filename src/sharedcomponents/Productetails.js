import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PageNotFound from "../components/PageNotFound";
import useGetproducts from "../hooks/useGetproducts";
import Spinner from "./Spinner";

export default function ProductDetail({ cart, setCart }) {
  let navigate = useNavigate();
  const { id } = useParams();
  const [Sku, setSku] = useState("");

  const {
    data: product,
    isError,
    isLoading,
    err,
  } = useGetproducts("products/" + id);
  function addToCart(id, sku) {
    setCart((items) => {
      const itemInCart = items.find((item) => item.sku === sku);
      if (itemInCart) {
        return items.map((item) =>
          item.sku === sku ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...items, { id, sku, quantity: 1 }];
      }
    });
  }
  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h3>there is an Error : {err}</h3>;
  }
  if (product.id === undefined) {
    return <PageNotFound />;
  }
  console.log(product.skus);
  return (
    <div id="detail">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p id="price">${product.price}</p>
      <select
        id="size"
        value={Sku}
        onChange={(e) => {
          setSku(e.target.value);
        }}
      >
        <option value="">Select Sku</option>
        {product.skus.map((prop) => (
          <option key={prop.sku} value={prop.sku}>
            {prop.sku}
          </option>
        ))}
      </select>
      <p>
        <button
          disabled={!Sku}
          className="btn btn-primary"
          onClick={() => {
            addToCart(id, Sku);
            navigate("/cart");
          }}
        >
          Add to cart
        </button>
      </p>
      <img src={`/images/${product.image}`} alt={product.category} />
    </div>
  );
}
