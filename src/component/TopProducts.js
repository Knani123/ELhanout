import React from "react";
import CardTop from "./underComponent/CardTop";
import "./style.css";

const TopProducts = () => {
  return (
    <div style={{ width: "100%", backgroundColor: "rgba(212,115,212,0.5)" }}>
      <h2>Les plus demandés</h2>
      <div className="topproduct">
        <CardTop />
        <CardTop />
        <CardTop />
        <CardTop />
        <CardTop />
        <CardTop />
      </div>
    </div>
  );
};

export default TopProducts;
