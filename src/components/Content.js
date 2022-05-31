import React from "react";
import Header from "./Header";
import Filtter from "./Filtter";
import Products from "./Products";

export default function Content() {
  return (
    <div className="content">
      <Header />
      <Filtter />
      <Products />
    </div>
  );
}
