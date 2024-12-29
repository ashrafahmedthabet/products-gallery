import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";

type TProps = {
  title: string;
  description: string;
  image: string;
  price: number;
};

const ProductCard = (props: TProps) => {
  return (
    <Card sx={{ maxWidth: 345, maxHeight: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.image}
          alt={props.title}
          sx={{ objectFit: "contain" }}
        />
        <CardContent
          sx={{ display: "flex", gap: "4px", flexDirection: "column" }}
        >
          <Typography
            gutterBottom
            variant="h5"
            sx={{
              color: "text.secondary",
              display: "-webkit-box",
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 1,
            }}
          >
            {props.title}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              display: "-webkit-box",
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
            }}
          >
            {props.description}
          </Typography>

          <Typography variant="h5" sx={{ color: "text.secondary" }}>
            {props.price}$
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
