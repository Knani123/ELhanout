import React from "react";
import CardTop from "./underComponent/CardTop";
import "./style.css";

const NewProduct = ({ color }) => {
  return (
    <div style={{ width: "100%", backgroundColor: color, margin: "4px 0px" }}>
      <h2 style={{ margin: 0 }}>Category 1</h2>
      <div className="NewProduct">
        <CardTop />
        <CardTop />
        <CardTop />
        <CardTop />
      </div>
    </div>
  );
};

export default NewProduct;
