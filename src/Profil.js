import { Paper, TextField } from "@mui/material";
import React from "react";
import ProfilProduct from "./component/ProfilProduct";
import { Produits } from "./Data";

const Profil = () => {
  return (
    <div style={{ minHeight: "100vh", padding: "5px" }}>
      <div style={{ width: "400px" }}>
        <h3>Mes coordonnées</h3>
        <p>Adresse e-mail</p>
        <Paper sx={{ display: "flex", flexDirection: "column" }}>
          <TextField
            variant="outlined"
            label="Prénom"
            value="Yosri"
            focused="True"
            sx={{ margin: "5px" }}
          />
          <TextField
            sx={{ margin: "5px" }}
            variant="outlined"
            label="Prénom"
            value="Yosri"
            focused="True"
          />
          <TextField
            sx={{ margin: "5px" }}
            variant="outlined"
            label="Date naissance"
            focused="True"
            value="28/08/1990"
            onMouseOver={(e) => console.log(e)}
          />
        </Paper>
      </div>
      <div>
        <ProfilProduct
          color="rgba(45,85,215,0.7)"
          titre="Libre"
          Produits={Produits}
        />
      </div>
    </div>
  );
};

export default Profil;
