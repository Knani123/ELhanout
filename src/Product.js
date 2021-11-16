import React from "react";
import { Bar } from "./component";
import ProductDetails from "./component/ProductDetails";
import "./index.css";
import { useParams } from "react-router-dom";
const Product = () => {
  console.log(useParams());
  return (
    <>
      <ProductDetails />
    </>
  );
};

export default Product;
