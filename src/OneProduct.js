import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { typography } from "@mui/system";
import React from "react";
import { useParams } from "react-router-dom";
import { Produits } from "./Data";
import PubHome from "./component/PubHome";
const OneProduct = () => {
  console.log(Produits);

  let { id } = useParams();
  let produit = Produits.filter((el) => el.id == id)[0];
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {/* <div style={{ width: "60px", border: "1px solid red" }}></div> */}
        <div
          container
          style={{ display: "flex", margin: "5px", border: "1px solid red" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={produit.image}
              width="80px"
              height="80px "
              style={{
                margin: "5px",
                border: "1px solid black",
                cursor: "pointer",
              }}
            />
            <img
              src={produit.image}
              width="80px"
              height="80px "
              style={{
                margin: "5px",
                border: "1px solid black",
                cursor: "pointer",
              }}
            />
            <img
              src={produit.image}
              width="80px"
              height="80px "
              style={{
                margin: "5px",
                border: "1px solid black",
                cursor: "pointer",
              }}
            />
            <img
              src={produit.image}
              width="80px"
              height="80px "
              style={{
                margin: "5px",
                border: "1px solid black",
                cursor: "pointer",
              }}
            />
          </div>
          <Card elevation={0}>
            <CardContent>
              <Typography variant="h5" component="div">
                {produit.titre}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {produit.discrip}
              </Typography>
            </CardContent>
            <CardMedia
              sx={{ width: "500px" }}
              component="img"
              height="300"
              image={produit.image}
              alt="green iguana"
            />

            <CardActions
              sx={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <Button size="small" variant="contained">
                Add to Card
              </Button>
              <Button size="small">Partager</Button>
            </CardActions>
          </Card>
        </div>
        <div
          style={{
            padding: "50px",
            maxWidth: "900px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // justifyContent: "center",
            // maxHeight: "100vh",
            // overflow: "auto",
          }}
        >
          <Typography variant="h4">ASUS Mechanical Gaming Keyboard</Typography>
          <div>
            <p style={{ maxHeight: "50vh", overflow: "auto" }}>
              ASUS Mechanical Gaming Keyboard - ROG Strix Scope RX | Red Optical
              | 2X Wider Ctrl Key for Greater FPS PrecisionX Wider Ctrl Key for
              Greater FPS Precision | Aura Sync, Armoury Crate RGB Lighting
            </p>
            <Divider />
            <table>
              <tr>
                <td>Nom : </td>
                <td>
                  <Typography variant="subtitle1"> {produit.titre}</Typography>
                </td>
              </tr>
              <tr>
                <td>Marque</td>
                <td></td>
              </tr>
              <tr>
                <td>Prix</td>
                <td></td>
              </tr>
              <tr>
                <td>Annee</td>
                <td></td>
              </tr>
            </table>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                margin: "3px",
              }}
            >
              <Button size="small" variant="contained" sx={{ margin: "2px" }}>
                Add to Card
              </Button>
              <Button size="small" variant="outlined">
                Partager
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <PubHome />
      </div>
    </div>
  );
};

export default OneProduct;
