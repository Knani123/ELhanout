import { Chip, Divider, Fab, Link, TextField, Typography } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
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
      <Typography variant="h4">Connexion</Typography>
      <TextField
        label="Adresse e-mail"
        variant="outlined"
        sx={{ width: "100%", height: "82px" }}
      />
      <TextField
        label="Mot de passe"
        variant="outlined"
        sx={{ width: "100%", height: "82px" }}
      />
      <Link onClick={() => history.push("/Pswforget")}>
        Vous avez oublié votre mot de passe ?
      </Link>
      <Chip
        color="success"
        label="Connexion"
        sx={{ cursor: "pointer", margin: "5px  " }}
      />
      <Divider
        // sx={{
        //   width: "30px",
        //   margin: "10px auto",
        //   color: "black",
        //   height: "3px",
        // }}
        variant="middle"
      />
      <Typography variant="overline" textAlign="center">
        Vous êtes nouveau ici ?
      </Typography>
      <Chip
        variant="outlined"
        color="primary"
        label="Créer un compte"
        sx={{ cursor: "pointer", margin: "5px  " }}
        onClick={() => history.push("/SignUp")}
      />
    </div>
  );
};

export default LoginForm;
