import ProductList from "@/components/products/ProductList";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h3" color="info">
          Product List
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "32px",
          marginTop: "32px",
        }}
      >
        <ProductList />
      </Box>
    </Box>
  );
}
