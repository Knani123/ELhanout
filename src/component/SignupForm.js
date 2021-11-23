import {
  Chip,
  Divider,
  Link,
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";
import { useHistory } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import React, { useState } from "react";

const SignUpForm = () => {
  const history = useHistory();
  const [showPassword, setshowPassword] = useState(true);
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
      <Typography variant="h4">Créer un compte</Typography>
      <TextField
        label="Prénom"
        variant="outlined"
        sx={{ width: "100%", height: "82px" }}
      />
      <TextField
        label="Nom de la famille"
        variant="outlined"
        sx={{ width: "100%", height: "82px" }}
      />
      <TextField
        label="Adresse e-mail"
        variant="outlined"
        sx={{ width: "100%", height: "82px" }}
      />
      <div>
        <Typography>Date de naissance</Typography>
        <TextField
          type="date"
          variant="outlined"
          sx={{ width: "100%", height: "82px" }}
        />
      </div>
      <div>
        <span style={{ float: "right" }}>
          {showPassword ? (
            <VisibilityOff
              onClick={() => setshowPassword(!showPassword)}
              sx={{ cursor: "pointer", zIndex: "100" }}
            />
          ) : (
            <Visibility
              onClick={() => setshowPassword(!showPassword)}
              sx={{ cursor: "pointer", zIndex: "100" }}
            />
          )}
        </span>
        <TextField
          label="password"
          type={showPassword ? "text" : "password"}
          variant="outlined"
          sx={{ width: "100%", height: "82px" }}
        />
      </div>
      {/* <p>
        Minimum 8 caractères (12+ recommandés avec au moins 1 lettre et 1
        chiffre) et aucun espace En créant un compte, vous acceptez que nous
        adaptions notre communication et nos services en fonction de vos
        informations personnelles, de votre utilisation des canaux numériques
        d’Action et de vos achats afin d’optimiser votre expérience utilisateur.
        Vous pouvez toujours modifier vos préférences dans Mon Action.
      </p> */}

      <Chip
        color="success"
        label="S'inscrire"
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
        J'ai déjà un compte !
      </Typography>
      <Chip
        onClick={() => history.push("/Login")}
        variant="outlined"
        color="primary"
        label="Connexion"
        sx={{ cursor: "pointer", margin: "5px  " }}
      />
    </div>
  );
};

export default SignUpForm;
