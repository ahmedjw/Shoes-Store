import React from "react";
import { Link } from "react-router-dom";

export default function Product({ p }) {
  return (
    <div key={p.id} className="product">
      <Link to={`/products/id/${p.id}`}>
        <img src={`/images/${p.image}`} alt={p.name} />
        <h3>{p.name}</h3>
        <p>${p.price}</p>
      </Link>
    </div>
  );
}
