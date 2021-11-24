import React from "react";
import StepperAddProduct from "./component/underComponent/StepperAddProduct";

const AddProduct = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <div
        style={{
          width: "600px",
          margin: "10px auto",
          border: "1px solid black",
          padding: 5,
        }}
      >
        <StepperAddProduct />
      </div>
    </div>
  );
};

export default AddProduct;
