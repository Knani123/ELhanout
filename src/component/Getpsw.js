import { Chip, Divider, Fab, Link, TextField, Typography } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";

const Getpsw = () => {
  const history = useHistory();

  return (
    <div
      style={{
        width: "320px",
        display: "flex",
        // alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h4">Réinitialiser votre mot de passe</Typography>
      <p>
        Mot de passe oublié ? Pas de soucis ! Entrez votre adresse e-mail
        ci-dessous. Vous recevrez dans quelques minutes un lien avec lequel vous
        pourrez réinitialiser votre mot de passe.
      </p>
      <TextField
        label="Adresse e-mail"
        variant="outlined"
        sx={{ width: "100%", height: "82px" }}
      />
      <Chip
        color="success"
        label="Envoyer le lien"
        sx={{ cursor: "pointer", margin: "5px  " }}
      />
    </div>
  );
};

export default Getpsw;
