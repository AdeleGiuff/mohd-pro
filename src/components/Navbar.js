import React from "react";
import { Box, Typography, Grid, InputBase, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from '@mui/icons-material/Menu';
import LogoMohd from "./LogoMohd";

const SearchBar = () => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      padding: "5px 10px",
      width: "100%",
      maxWidth: "400px",
      marginTop: "-5px"
    }}
  >
    <SearchIcon sx={{ color: "#666", marginRight: "5px" }} />
    <InputBase placeholder="Search for products" sx={{ flex: 1, padding: "4px", color: "#666" }} />
  </Box>
);

const Navbar = () => {
  return (
    <Box display="flex" flexDirection="row" width="100%" sx={{ minHeight: '70px' }}> 
      <Box
        sx={{
          flex: '0 0 20%',
          backgroundColor: 'black',
          display: 'flex',
          alignItems: 'center',
          padding: '10px',
        }}
      >
        <LogoMohd />
      </Box>

      <Grid container alignItems="center" sx={{ flexGrow: 1, mt: 0, background: "linear-gradient(to right, #f0f0f0, transparent)" }}>
        <Grid item sx={{ flexGrow: 1 }}>
          <SearchBar />
        </Grid>

        <Grid item sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="body2" sx={{ fontWeight: "bold", color: "#999", marginRight: "20px" }}>
            Browse by category
          </Typography>

          <Box sx={{ position: "relative", display: "flex", alignItems: "center", marginRight: "15px" }}>
            <MenuIcon sx={{ color: "#999" }} />
            <SearchIcon
              sx={{
                position: "absolute",
                top: "0",
                left: "0",
                color: "#999",
                fontSize: "20px",
                marginLeft: "3px"
              }}
            />
          </Box>

          <Button
            sx={{
              color: "black",
              textTransform: "none",
              fontSize: "14px",
              display: "flex",
              alignItems: "center",
              borderRadius: "15px",
              backgroundColor: "#e0e0e0"
            }}
          >
            Projects <KeyboardArrowDownIcon sx={{ fontSize: "16px", marginLeft: "5px", color: "black" }} />
          </Button>

          <NotificationsNoneIcon sx={{ color: "#999", marginX: "15px" }} />
          <AccountCircleIcon sx={{ color: "#999" }} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Navbar;