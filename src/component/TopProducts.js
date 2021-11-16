import React from "react";
import CardTop from "./underComponent/CardTop";
import "./style.css";

const TopProducts = ({ Produits }) => {
  return (
    <div style={{ width: "100%", backgroundColor: "rgba(212,115,212,0.5)" }}>
      <h2>Les plus demandés</h2>
      <div className="topproduct">
        {Produits.map((el) => (
          <CardTop produit={el} />
        ))}
      </div>
    </div>
  );
};

export default TopProducts;
