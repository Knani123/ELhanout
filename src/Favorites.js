import { Link, Paper } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import React from "react";

const Favorites = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Favorites</h1>
      <div>
        <Link
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            color: "#aa0909",
            textDecoration: "none",
            fontSize: "10px",
            margin: "0px 10px",
            cursor: "pointer",
          }}
        >
          <DeleteIcon sx={{ fontSize: "15px" }} />
          Vider ma liste
        </Link>
        <Paper
          style={{
            margin: "10px 0",

            display: "flex",
            width: "350px",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <img
            width="60px"
            src="https://www.action.com/globalassets/cmsarticleimages/22/51/3007925_8711299100129-110_01.png?preset=mediaSliderImageLargeHD"
            alt="images"
          />
          <span>
            <p>Article</p>
            <p>
              PRIX <span>99</span>{" "}
            </p>
          </span>
          <span>Number</span>
        </Paper>
        <Paper
          style={{
            margin: "10px 0",

            display: "flex",
            width: "350px",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <img
            width="60px"
            src="https://www.action.com/globalassets/cmsarticleimages/22/51/3007925_8711299100129-110_01.png?preset=mediaSliderImageLargeHD"
            alt="images"
          />
          <span>
            <p>Article</p>
            <p>
              PRIX <span>99</span>{" "}
            </p>
          </span>
          <span>Number</span>
        </Paper>
        <Paper
          style={{
            margin: "10px 0",

            display: "flex",
            width: "350px",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <img
            width="60px"
            src="https://www.action.com/globalassets/cmsarticleimages/22/51/3007925_8711299100129-110_01.png?preset=mediaSliderImageLargeHD"
            alt="images"
          />
          <span>
            <p>Article</p>
            <p>
              PRIX <span>99</span>{" "}
            </p>
          </span>
          <span>Number</span>
        </Paper>
        <Paper
          style={{
            margin: "10px 0",

            display: "flex",
            width: "350px",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <img
            width="60px"
            src="https://www.action.com/globalassets/cmsarticleimages/22/51/3007925_8711299100129-110_01.png?preset=mediaSliderImageLargeHD"
            alt="images"
          />
          <span>
            <p>Article</p>
            <p>
              PRIX <span>99</span>{" "}
            </p>
          </span>
          <span>Number</span>
        </Paper>
        <Paper
          style={{
            margin: "10px 0",

            display: "flex",
            width: "350px",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <img
            width="60px"
            src="https://www.action.com/globalassets/cmsarticleimages/22/51/3007925_8711299100129-110_01.png?preset=mediaSliderImageLargeHD"
            alt="images"
          />
          <span>
            <p>Article</p>
            <p>
              PRIX <span>99</span>{" "}
            </p>
          </span>
          <span>Number</span>
        </Paper>
        <Paper
          style={{
            margin: "10px 0",
            display: "flex",
            width: "350px",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <img
            width="60px"
            src="https://www.action.com/globalassets/cmsarticleimages/22/51/3007925_8711299100129-110_01.png?preset=mediaSliderImageLargeHD"
            alt="images"
          />
          <span>
            <p>Article</p>
            <p>
              PRIX <span>99</span>{" "}
            </p>
          </span>
          <span>Number</span>
        </Paper>
        <Paper
          style={{
            margin: "10px 0",

            display: "flex",
            width: "350px",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <img
            width="60px"
            src="https://www.action.com/globalassets/cmsarticleimages/22/51/3007925_8711299100129-110_01.png?preset=mediaSliderImageLargeHD"
            alt="images"
          />
          <span>
            <p>Article</p>
            <p>
              PRIX <span>99</span>{" "}
            </p>
          </span>
          <span>Number</span>
        </Paper>
        <Paper
          style={{
            margin: "10px 0",

            display: "flex",
            width: "350px",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <img
            width="60px"
            src="https://www.action.com/globalassets/cmsarticleimages/22/51/3007925_8711299100129-110_01.png?preset=mediaSliderImageLargeHD"
            alt="images"
          />
          <span>
            <p>Article</p>
            <p>
              PRIX <span>99</span>{" "}
            </p>
          </span>
          <span>Number</span>
        </Paper>
        <Paper
          style={{
            margin: "10px 0",

            display: "flex",
            width: "350px",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <img
            width="60px"
            src="https://www.action.com/globalassets/cmsarticleimages/22/51/3007925_8711299100129-110_01.png?preset=mediaSliderImageLargeHD"
            alt="images"
          />
          <span>
            <p>Article</p>
            <p>
              PRIX <span>99</span>{" "}
            </p>
          </span>
          <span>Number</span>
        </Paper>
        <Paper
          style={{
            margin: "10px 0",
            padding: "5px",
            backgroundColor: "#3895D9",
            display: "flex",
            width: "350px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span> Prix Totale</span>
          <span> 150</span>
        </Paper>
      </div>
    </div>
  );
};

export default Favorites;
