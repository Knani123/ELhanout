import React from "react";

const PubHome = ({ image }) => {
  console.log(image);
  return (
    <div
      className="sous-bar"
      style={{
        height: "100px",
        border: "1px solid green",
        overflow: "hidden",
      }}
    >
      <img src={image} alt="" />
    </div>
  );
};

export default PubHome;
