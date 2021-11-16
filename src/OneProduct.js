import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { Produits } from "./Data";

const OneProduct = () => {
  console.log(Produits);

  let { id } = useParams();
  let produit = Produits.filter((el) => el.id == id)[0];
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexWrap: "wrap" }}>
      <div container style={{ margin: "10px" }}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              {produit.titre}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {produit.discrip}
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            width="100%"
            height="300"
            image={produit.image}
            alt="green iguana"
          />

          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
      <div
        style={{
          padding: "50px",
          maxWidth: "600px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          // maxHeight: "100vh",
          // overflow: "auto",
        }}
      >
        <Typography variant="h4">
          ASUS Mechanical Gaming Keyboard - ROG Strix Scope RX | Red Optical
          Mechanical Switches | USB 2.0 Passthrough | 2X Wider Ctrl Key for
          Greater FPS Precision | Aura Sync, Armoury Crate RGB Lighting
        </Typography>
        <div style={{ maxHeight: "50vh", overflow: "auto" }}>
          <p>
            ASUS Mechanical Gaming Keyboard - ROG Strix Scope RX | Red Optical
            Mechanical Switches | USB 2.0 Passthrough | 2X Wider Ctrl Key for
            Greater FPS Precision | Aura Sync, Armoury Crate RGB Lighting ASUS
            Mechan Mechanical Gaming Keyboard - ROcal Switches | USB 2.0
            Passthrough | 2X Wider Ctrl Key for Greater FPS Precision | Aura
            Sync, Armoury Crate RGB Lighting ASUS Mechan Mechanical Gaming
            Keyboard - ROcal Switches | USB 2.0 Passthrough | 2X Wider Ctrl Key
            for Greater FPS Precision | Aura Sync, Armoury Crate RGB Lighting
            ASUS Mechan Mechanical Gaming Keyboard - ROcal Switches | USB 2.0
            Passthrough | 2X Wider Ctrl Key for Greater FPS Precision | Aura
            Sync, Armoury Crate RGB Lighting ASUS Mechan Mechanical Gaming
            Keyboard - ROcal Switches | USB 2.0 Passthrough | 2X Wider Ctrl Key
            for Greater FPS Precision | Aura Sync, Armoury Crate RGB Lighting
            ASUS Mechan Mechanical Gaming Keyboard - ROcal Switches | USB 2.0
            Passthrough | 2X Wider Ctrl Key for Greater FPS Precision | Aura
            Sync, Armoury Crate RGB Lighting ASUS Mechan Mechanical Gaming
            Keyboard - ROcal Switches | USB 2.0 Passthrough | 2X Wider Ctrl Key
            for Greater FPS Precision | Aura Sync, Armoury Crate RGB Lighting
            ASUS Mechan Mechanical Gaming Keyboard - ROcal Switches | USB 2.0
            Passthrough | 2X Wider Ctrl Key for Greater FPS Precision | Aura
            Sync, Armoury Crate RGB Lighting ASUS Mechan Mechanical Gaming
            Keyboard - ROcal Switches | USB 2.0 Passthrough | 2X Wider Ctrl Key
            for Greater FPS Precision | Aura Sync, Armoury Crate RGB Lighting
            ASUS Mechan Mechanical Gaming Keyboard - ROcal Switches | USB 2.0
            Passthrough | 2X Wider Ctrl Key for Greater FPS Precision | Aura
            Sync, Armoury Crate RGB Lighting ASUS Mechan Mechanical Gaming
            Keyboard - ROcal Switches | USB 2.0 Passthrough | 2X Wider Ctrl Key
            for Greater FPS Precision | Aura Sync, Armoury Crate RGB Lighting
            ASUS Mechan Mechanical Gaming Keyboard - ROcal Switches | USB 2.0
            Passthrough | 2X Wider Ctrl Key for Greater FPS Precision | Aura
            Sync, Armoury Crate RGB Lighting ASUS Mechan Mechanical Gaming
            Keyboard - ROcal Switches | USB 2.0 Passthrough | 2X Wider Ctrl Key
            for Greater FPS Precision | Aura Sync, Armoury Crate RGB Lighting
            ASUS Mechan Mechanical Gaming Keyboard - ROcal Switches | USB 2.0
            Passthrough | 2X Wider Ctrl Key for Greater FPS Precision | Aura
            Sync, Armoury Crate RGB Lighting ASUS Mechan Mechanical Gaming
            Keyboard - ROcal Switches | USB 2.0 Passthrough | 2X Wider Ctrl Key
            for Greater FPS Precision | Aura Sync, Armoury Crate RGB Lighting
            ASUS Mechan Mechanical Gaming Keyboard - ROcal Switches | USB 2.0
            Passthrough | 2X Wider Ctrl Key for Greater FPS Precision | Aura
            Sync, Armoury Crate RGB Lighting ASUS Mechan Mechanical Gaming
            Keyboard - ROcal Switches | USB 2.0 Passthrough | 2X Wider Ctrl Key
            for Greater FPS Precision | Aura Sync, Armoury Crate RGB Lighting
            ASUS Mechan Mechanical Gaming Keyboard - ROcal Switches | USB 2.0
            Passthrough | 2X Wider Ctrl Key for Greater FPS Precision | Aura
            Sync, Armoury Crate RGB Lighting ASUS Mechan Mechanical Gaming
            Keyboard - ROcal Switches | USB 2.0 Passthrough | 2X Wider Ctrl Key
            for Greater FPS Precision | Aura Sync, Armoury Crate RGB Lighting
            ASUS Mechan Mechanical Gaming Keyboard - ROcal Switches | USB 2.0
            Passthrough | 2X Wider Ctrl Key for Greater FPS Precision | Aura
            Sync, Armoury Crate RGB Lighting ASUS Mechan Mechanical Gaming
            Keyboard - ROcal Switches | USB 2.0 Passthrough | 2X Wider Ctrl Key
            for Greater FPS Precision | Aura Sync, Armoury Crate RGB Lighting
            ASUS Mechan Mechanical Gaming Keyboard - ROcal Switches | USB 2.0
            Passthrough | 2X Wider Ctrl Key for Greater FPS Precision | Aura
            Sync, Armoury Crate RGB Lighting ASUS Mechan Mechanical Gaming
            Keyboard - ROcal Switches | USB 2.0 Passthrough | 2X Wider Ctrl Key
            for Greater FPS Precision | Aura Sync, Armoury Crate RGB Lighting
            ASUS Mechan Mechanical Gaming Keyboard - ROcal Switches | USB 2.0
            Passthrough | 2X Wider Ctrl Key for Greater FPS Precision | Aura
            Sync, Armoury Crate RGB Lighting ASUS Mechan Mechanical Gaming
            Keyboard - ROcal Switches | USB 2.0 Passthrough | 2X Wider Ctrl Key
            for Greater FPS Precision | Aura Sync, Armoury Crate RGB Lighting
            ASUS Mechan Mechanical Gaming Keyboard - ROcal Switches | USB 2.0
            Passthrough | 2X Wider Ctrl Key for Greater FPS Precision | Aura
            Sync, Armoury Crate RGB Lighting ASUS Mechan Mechanical Gaming
            Keyboard - ROcal Switches | USB 2.0 Passthrough | 2X Wider Ctrl Key
            for Greater FPS Precision | Aura Sync, Armoury Crate RGB Lighting
            ASUS Mechan Mechanical Gaming Keyboard - ROcal Switches | USB 2.0
            Passthrough | 2X Wider Ctrl Key for Greater FPS Precision | Aura
            Sync, Armoury Crate RGB Lighting ASUS Mechan Mechanical Gaming
            Keyboard - ROcal Switches | USB 2.0 Passthrough | 2X Wider Ctrl Key
            for Greater FPS Precision | Aura Sync, Armoury Crate RGB Lighting
            ASUS Mechan Mechanical Gaming Keyboard - ROcal Switches | USB 2.0
            Passthrough | 2X Wider Ctrl Key for Greater FPS Precision | Aura
            Sync, Armoury Crate RGB Lighting ASUS Mechan Mechanical Gaming
            Keyboard - ROcal Switches | USB 2.0 Passthrough | 2X Wider Ctrl Key
            for Greater FPS Precision | Aura Sync, Armoury Crate RGB Lighting
            ASUS Mechan Mechanical Gaming Keyboard - ROcal Switches | USB 2.0
            Passthrough | 2X Wider Ctrl Key for Greater FPS Precision | Aura
            Sync, Armoury Crate RGB Lighting ASUS Mechan Mechanical Gaming
            Keyboard - ROcal Switches | USB 2.0 Passthrough | 2X Wider Ctrl Key
            for Greater FPS Precision | Aura Sync, Armoury Crate RGB Lighting
            ASUS Mechan Mechanical Gaming Keyboard - ROcal Switches | USB 2.0
            Passthrough | 2X Wider Ctrl Key for Greater FPS Precision | Aura
            Sync, Armoury Crate RGB Lighting ASUS Mechan Mechanical Gaming
            Keyboard - ROcal Switches | USB 2.0 Passthrough | 2X Wider Ctrl Key
            for Greater FPS Precision | Aura Sync, Armoury Crate RGB Lighting
            ASUS Mechan Mechanical Gaming Keyboard - ROcal Switches | USB 2.0
            Passthrough | 2X Wider Ctrl Key for Greater FPS Precision | Aura
            Sync, Armoury Crate RGB Lighting ASUS Mechan Mechanical Gaming
            Keyboard - ROcal Switches | USB 2.0 Passthrough | 2X Wider Ctrl Key
            for Greater FPS Precision | Aura Sync, Armoury Crate RGB Lighting
            ASUS Mechan Mechanical Gaming Keyboard - ROcal Switches | USB 2.0
            Passthrough | 2X Wider Ctrl Key for Greater FPS Precision | Aura
            Sync, Armoury Crate RGB Lighting ASUS Mechan Mechanical Gaming
            Keyboard - ROcal Switches | USB 2.0 Passthrough | 2X Wider Ctrl Key
            for Greater FPS Precision | Aura Sync, Armoury Crate RGB Lighting
            ASUS Mechan Mechanical Gaming Keyboard - ROcal Switches | USB 2.0
            Passthrough | 2X Wider Ctrl Key for Greater FPS Precision | Aura
            Sync, Armoury Crate RGB Lighting ASUS Mechan Mechanical Gaming
            Keyboard - ROcal Switches | USB 2.0 Passthrough | 2X Wider Ctrl Key
            for Greater FPS Precision | Aura Sync, Armoury Crate RGB Lighting
            ASUS Mechan Mechanical Gaming Keyboard - ROG Strix Scope RX | Red
            Optical Mechanical Switches | USB 2.0 Passthrough | 2X Wider Ctrl
            Key for Greater FPS Precision | Aura Sync, Armoury Crate RGB
            Lighting ASUS Mechanical Gaming Keyboard - ROG Strix Scope RX | Red
            Optical Mechanical Switches | USB 2.0 Passthrough | 2X Wider Ctrl
            Key forchanical Switches | USB 2.0 Passthrough | 2X Wider Ctrl Key
            for Greater FPS Precision | Aura Sync, Armoury Crate RGB Lighting
            ASUS Mechan Mechanical Gaming Keyboard - ROG Strix Scope RX | Red
            Optical Mechanical Switches | USB 2.0 Passthrough | 2X Wider Ctrl
            Key for Greater FPS Precision | Aura Sync, Armoury Crate RGB
            Lighting ASUS Mechanical Gaming Keyboard - ROG Strix Scope RX | Red
            Optical Mechanical Switches | USB 2.0 Passthrough | 2X Wider Ctrl
            Key forchanical Switches | USB 2.0 Passthrough | 2X Wider Ctrl Key
            for Greater FPS Precision | Aura Sync, Armoury Crate RGB Lighting
            ASUS Mechan Mechanical Gaming Keyboard - ROG Strix Scope RX | Red
            Optical Mechanical Switches | USB 2.0 Passthrough | 2X Wider Ctrl
            Key for Greater FPS Precision | Aura Sync, Armoury Crate RGB
            Lighting ASUS Mechanical Gaming Keyboard - ROG Strix Scope RX | Red
            Optical Mechanical Switches | USB 2.0 Passthrough | 2X Wider Ctrl
            Key forchanical Switches | USB 2.0 Passthrough | 2X Wider Ctrl Key
            for Greater FPS Precision | Aura Sync, Armoury Crate RGB Lighting
            ASUS Mechan Mechanical Gaming Keyboard - ROG Strix Scope RX | Red
            Optical Mechanical Switches | USB 2.0 Passthrough | 2X Wider Ctrl
            Key for Greater FPS Precision | Aura Sync, Armoury Crate RGB
            Lighting ASUS Mechanical Gaming Keyboard - ROG Strix Scope RX | Red
            Optical Mechanical Switches | USB 2.0 Passthrough | 2X Wider Ctrl
            Key forchanical Switches | USB 2.0 Passthrough | 2X Wider Ctrl Key
            for Greater FPS Precision | Aura Sync, Armoury Crate RGB Lighting
            ASUS Mechan Mechanical Gaming Keyboard - ROG Strix Scope RX | Red
            Optical Mechanical Switches | USB 2.0 Passthrough | 2X Wider Ctrl
            Key for Greater FPS Precision | Aura Sync, Armoury Crate RGB
            Lighting ASUS Mechanical Gaming Keyboard - ROG Strix Scope RX | Red
            Optical Mechanical Switches | USB 2.0 Passthrough | 2X Wider Ctrl
            Key forchanical Switches | USB 2.0 Passthrough | 2X Wider Ctrl Key
            for Greater FPS Precision | Aura Sync, Armoury Crate RGB Lighting
            ASUS Mechan Mechanical Gaming Keyboard - ROG Strix Scope RX | Red
            Optical Mechanical Switches | USB 2.0 Passthrough | 2X Wider Ctrl
            Key for Greater FPS Precision | Aura Sync, Armoury Crate RGB
            Lighting ASUS Mechanical Gaming Keyboard - ROG Strix Scope RX | Red
            Optical Mechanical Switches | USB 2.0 Passthrough | 2X Wider Ctrl
            Key forchanical Switches | USB 2.0 Passthrough | 2X Wider Ctrl Key
            for Greater FPS Precision | Aura Sync, Armoury Crate RGB Lighting
            ASUS Mechan Mechanical Gaming Keyboard - ROG Strix Scope RX | Red
            Optical Mechanical Switches | USB 2.0 Passthrough | 2X Wider Ctrl
            Key for Greater FPS Precision | Aura Sync, Armoury Crate RGB
            Lighting ASUS Mechanical Gaming Keyboard - ROG Strix Scope RX | Red
            Optical Mechanical Switches | USB 2.0 Passthrough | 2X Wider Ctrl
            Key for Greater FPS Precision | Aura Sync, Armoury Crate RGB
            Lighting ASUS Mechanical Gaming Keyboard - ROG Strix Scope RX | Red
            Optical Mechanical Switches | USB 2.0 Passthrough | 2X Wider Ctrl
            Key for Greater FPS Precision | Aura Sync, Armoury Crate RGB
            Lighting ASUS Mechanical Gaming Keyboard - ROG Strix Scope RX | Red
            Optical Mechanical Switches | USB 2.0 Passthrough | 2X Wider Ctrl
            Key for Greater FPS Precision | Aura Sync, Armoury Crate RGB
            Lighting
          </p>
        </div>
      </div>
    </div>
  );
};

export default OneProduct;
