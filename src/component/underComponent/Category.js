import React from "react";
import "./style2.css";
import category from "../../image/category.jfif";
import { Grid } from "@mui/material";
const Category = () => {
  return (
    <Grid xs={3} sm={1} md={1} lg={1} spacing={2}>
      <div item className="category">
        <img src={category} alt="Image category" />
        <a href="https://www.flipkart.com/">Category</a>
      </div>
    </Grid>
  );
};

export default Category;
