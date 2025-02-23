import React from "react";
import { Button } from "@mui/material";

export default function ShareButton() {
    
    return (
        <Button 
        variant="contained" 
        color="primary" 
        sx={{ backgroundColor: "#333", textTransform: "none", borderRadius:"10px"}} 
        >
        Share with client
        </Button>
    );
  }

