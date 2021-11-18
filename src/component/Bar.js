import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import MenuIcon from "@mui/icons-material/Menu";
import { Hidden, Button, Badge } from "@mui/material";
import Search from "./underComponent/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import IconButton from "@mui/material/IconButton";
import "./style.css";
import logo from "../image/logo.png";
import { useHistory } from "react-router-dom";
const Bar = () => {
  let history = useHistory();
  return (
    <>
      <CssBaseline />
      <AppBar className="entete">
        <Toolbar>
          <Hidden smUp>
            <IconButton>
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Hidden mdDown>
            <div className="block"></div>
          </Hidden>
          <img
            className="img"
            src={logo}
            alt="logo"
            onClick={() => history.push("/")}
          />
          <Hidden smUp>
            <div className="div">
              <Hidden smDown>
                <Search className="search" />
              </Hidden>
              <IconButton onClick={() => history.push("/Login")}>
                <LockOpenIcon />
              </IconButton>
              <IconButton>
                <FavoriteIcon />
              </IconButton>
              <IconButton>
                <Badge badgeContent={4} color="secondary">
                  <AddShoppingCartIcon />
                </Badge>
              </IconButton>
            </div>
          </Hidden>
          <Hidden smDown>
            <Search className="search" />
            <div className="div">
              <Button
                size="small"
                className="btn"
                variant="contained"
                endIcon={<LockOpenIcon />}
                onClick={() => history.push("/Login")}
              >
                Login
              </Button>
              <Button
                className="btn"
                variant="contained"
                endIcon={<FavoriteIcon />}
              >
                Favorite
              </Button>
              <Button
                className="btn"
                variant="contained"
                endIcon={
                  <Badge badgeContent={4} color="primary">
                    <AddShoppingCartIcon />
                  </Badge>
                }
              >
                Panier
              </Button>
            </div>
          </Hidden>
        </Toolbar>
        <Hidden smUp>
          <Search className="search" />
        </Hidden>
      </AppBar>
    </>
  );
};

export default Bar;
