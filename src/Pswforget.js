import { Typography } from "@mui/material";
import React from "react";
import Getpsw from "./component/Getpsw";

const Pswforget = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // height: "100vh",
      }}
    >
      <div
        style={{
          flexDirection: "column",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          //   border: "1px solid green",
          boxSizing: "border-box",
          height: "100vh",
          width: "100%",
        }}
      >
        <Getpsw />
      </div>
      <div
        style={{
          //   border: "1px solid red",
          boxSizing: "border-box",
          height: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#2f2f2f",
        }}
      >
        <img src="https://www.action.com/contentassets/313cba827b9a4b1e904f816fea344c24/microsoftteams-image.png?preset=pageImageExtraLargeHD" />
      </div>
    </div>
  );
};

export default Pswforget;
