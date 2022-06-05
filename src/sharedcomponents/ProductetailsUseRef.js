import React, { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PageNotFound from "../components/PageNotFound";
import useGetproducts from "../hooks/useGetproducts";
import Spinner from "./Spinner";

export default function ProductDetail({ cart, setCart }) {
  let navigate = useNavigate();
  const { id } = useParams();
  const skuRef = useRef(null);
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
      <select id="size" ref={skuRef}>
        <option value="">Select Sku</option>
        {product.skus.map((prop) => (
          <option key={prop.sku} value={prop.sku}>
            {prop.sku}
          </option>
        ))}
      </select>
      <p>
        <button
          className="btn btn-primary"
          onClick={() => {
            const sku = skuRef.current.value;
            addToCart(id, sku);
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
