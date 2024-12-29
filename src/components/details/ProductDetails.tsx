import { TProduct } from "@/types/products";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const ProductDetails = async ({ productId }: { productId: string }) => {
  const data = await fetch(`https://fakestoreapi.com/products/${productId}`);
  const productDetails: TProduct = await data.json();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "16px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "32px",
          alignItems: "center",
          padding: "16px",
          flexWrap: "wrap",
        }}
      >
        <Box>
          <Image
            src={productDetails.image}
            alt={productDetails.title}
            width={400}
            height={400}
          />
        </Box>
        <Box
          sx={{
            maxWidth: 800,
            width: "100%",
            display: "flex",
            gap: "8px",
            flexDirection: "column",
            flexWrap: "wrap",
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {productDetails.title}
          </Typography>

          <Typography variant="h6" sx={{ color: "text.secondary" }}>
            {productDetails.category}
          </Typography>

          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {productDetails.description}
          </Typography>

          <Typography variant="h5" color="info">
            {productDetails.price}$
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDetails;
