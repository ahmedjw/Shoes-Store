import React from "react";

export default function Product({ p }) {
  return (
    <div key={p.id} className="product">
      <a href="/">
        <img src={`/images/${p.image}`} alt={p.name} />
        <h3>{p.name}</h3>
        <p>${p.price}</p>
      </a>
    </div>
  );
}
