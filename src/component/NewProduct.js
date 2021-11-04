import React from "react";
import CardTop from "./underComponent/CardTop";
import "./style.css";
import { Divider, Link } from "@mui/material";
import Packge from "./underComponent/Packge";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
const NewProduct = ({ color, titre }) => {
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
      </div>{" "}
      <Divider />
      <div className="NewProduct">
        <Packge />
        <CardTop />
        <CardTop />
        <CardTop />
        <CardTop />
      </div>
    </div>
  );
};

export default NewProduct;
