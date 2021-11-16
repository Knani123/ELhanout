import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useHistory } from "react-router-dom";
const CardTop = ({ produit }) => {
  let history = useHistory();
  let { titre, discrip, image, id } = produit;
  produit && ({ titre, discrip, image } = produit);
  return (
    <div>
      <Card
        sx={{ width: 160, margin: 1 }}
        onClick={() => history.push(`/Product/${id}`)}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="130"
            image={image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="OVERLINE " component="div">
              {titre}
            </Typography>
            <Typography variant="caption " color="text.secondary">
              {discrip}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default CardTop;
