import React from "react";
import { Box, Typography } from "@mui/material";

const Logo = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", marginLeft: "30px" }}>
      <Typography variant="h6" sx={{ fontWeight: "bold", color: "white" }}>
        mohd
      </Typography>
      <Box
        component="span"
        sx={{
          backgroundColor: "red",
          color: "white",
          fontSize: "12px",
          borderRadius: "20px",
          padding: "5px 15px",
          marginLeft: "5px",
        }}
      >
        Pro
      </Box>
    </Box>
  );
};

export default Logo;
