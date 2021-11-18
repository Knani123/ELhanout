import { Typography } from "@mui/material";
import React from "react";
import "./style.css";

const PubHome = ({ image }) => {
  console.log(image);
  return (
    <div
      className="sous-bar"
      style={{
        height: "100px",
        // overflow: "hidden",
      }}
    >
      <Typography variant="h1">PUB</Typography>
    </div>
  );
};

export default PubHome;
