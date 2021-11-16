import { Typography } from "@mui/material";
import React from "react";
import { Bar } from "./component";
import "./index.css";

const PageErr = (props) => {
  console.log("props", props.history);

  const pushTo = (a) => {
    props.history.push(a);
  };
  return (
    <div>
      <Typography>Page Err</Typography>
    </div>
  );
};

export default PageErr;
