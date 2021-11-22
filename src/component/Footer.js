import { IconButton, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import logo from "../image/logo.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const Footer = () => {
  return (
    <div
      style={{
        padding: "20px 0px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <div>
        <img className="img" src={logo} alt="logo" />
      </div>
      <div>
        <IconButton aria-label="delete">
          <FacebookIcon sx={{ color: "#43609C" }} />
        </IconButton>

        <IconButton aria-label="delete" sx={{ color: "#F56040" }}>
          <InstagramIcon />
        </IconButton>
        <IconButton aria-label="delete">
          <TwitterIcon sx={{ color: "#1DA1F2" }} />
        </IconButton>
        <IconButton aria-label="delete">
          <WhatsAppIcon sx={{ color: "#75c543" }} />
        </IconButton>
      </div>
      <Typography align="center" sx={{ color: "white" }}>
        Fait avec <span style={{ color: "red" }}>&hearts;</span> à Tunis.
        Copyright <span style={{ fontStyle: "italic" }}>ELHanout </span>
        <span>{new Date().getFullYear()} </span>
        Tous droits réservés
      </Typography>
    </div>
  );
};

export default Footer;
