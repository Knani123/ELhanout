import React from "react";
import CardTop from "./underComponent/CardTop";
import "./style.css";
import { Divider, Link } from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

const Libre = ({ color, titre, Produits }) => {
  return (
    <div style={{ width: "100%", backgroundColor: color, margin: "4px 0px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 5px",
        }}
      >
        <h2 style={{ margin: 0 }}>{titre}</h2>
        <Link
          href="#"
          underline="none"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "red",
          }}
        >
          Voir plus
          <DoubleArrowIcon />
        </Link>
      </div>
      <Divider />
      <div className="NewProduct">
        {Produits.map((el) => (
          <CardTop produit={el} />
        ))}
        {Produits.map((el) => (
          <CardTop produit={el} />
        ))}
      </div>
    </div>
  );
};

export default Libre;
