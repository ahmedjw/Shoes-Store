import React, { useContext, useState } from "react";
import { dataContext } from "../context/DataProvider";

export default function Filtter() {
  const { size, setSize } = useContext(dataContext);
  return (
    <main value={size} onChange={(e) => setSize(e.target.value)}>
      <section id="filters">
        <label htmlFor="size">Filter by Size:</label>{" "}
        <select id="size">
          <option value="">All sizes</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
        </select>
      </section>
    </main>
  );
}
