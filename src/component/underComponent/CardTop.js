import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const CardTop = () => {
  return (
    <div>
      <Card sx={{ width: 160, margin: 1 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="130"
            image="https://th.bing.com/th/id/OIP.IN6vAl_RTNnxOD7pp3vpEwHaEK?w=298&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default CardTop;
