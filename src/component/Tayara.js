import { Paper, Typography } from "@mui/material";
import React from "react";
import "./style.css";
const Tayara = () => {
  return (
    <div
      style={{
        height: "500px",
        width: "100%",
        backgroundColor: "rgba(145,25,88,0.6)",
        margin: "50px 0",
      }}
    >
      <Typography
        variant="h3"
        component="div"
        align="center"
        className="tayara"
      >
        Offre Tayara !
      </Typography>
      <div style={{ display: "flex", overflow: "hidden" }}>
        <Paper square elevation={6} sx={{ width: "200px", margin: "0 10px" }} />

        <img
          src="https://tn.jumia.is/cms/000_BF21/Games/Roue/BF21_RF_Slider.gif"
          alt=""
        />
        <Paper square elevation={6} sx={{ width: "200px", margin: "0 10px" }} />
      </div>
    </div>
  );
};

export default Tayara;
