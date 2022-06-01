import React from "react";
import Filtter from "./Filtter";
import Products from "./Products";

export default function Content() {
  return (
    <div className="content">
      <Filtter />
      <Products />
    </div>
  );
}
