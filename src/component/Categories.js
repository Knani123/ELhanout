import React from "react";
import Category from "./underComponent/Category";
import "./style.css";
import { Grid } from "@mui/material";

const Categories = () => {
  return (
    <Grid container className="categories">
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
    </Grid>
  );
};

export default Categories;
