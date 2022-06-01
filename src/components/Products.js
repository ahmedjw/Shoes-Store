import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { dataContext } from "../context/DataProvider";
import useGetproducts from "../hooks/useGetproducts";
import Spinner from "../sharedcomponents/Spinner";
import Product from "../sharedcomponents/Product";

export default function () {
  const { size } = useContext(dataContext);
  const { category } = useParams();
  const {
    data: products,
    isLoading,
    isError,
    err,
  } = useGetproducts("products?category=" + category);
  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h3>there is An Error :{err} </h3>;
  }

  return (
    <div id="products">
      {size !== ""
        ? products
            .filter((product) =>
              product.skus.find((s) => s.size === parseInt(size))
            )
            .map((product) => <Product p={product} key={product.id} />)
        : products.map((product) => <Product p={product} key={product.id} />)}
    </div>
  );
}
